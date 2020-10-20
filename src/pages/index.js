import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

export default function Home() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      emoji: allEmojiCsv {
        nodes {
          emoji
          name
          gatsbyPath(filePath: "/emoji/{EmojiCsv.name}")
        }
      }
    }
  `)

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 30px)",
        gridTemplateRows: "30px",
      }}
    >
      {data.emoji.nodes.map(emoji => (
        <Link
          style={{ textDecoration: "none" }}
          title={emoji.name}
          to={`${emoji.gatsbyPath}`}
        >
          {emoji.emoji}
        </Link>
      ))}
    </div>
  )
}
