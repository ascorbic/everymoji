import React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {
  const { emoji, name } = data.emojiCsv
  return (
    <div style={{ display: `grid`, placeItems: "center" }}>
      <h1 style={{ fontFamily: "arial, helvetica" }}>{name}</h1>
      <div style={{ fontSize: `256px` }} role="image">
        {emoji}
      </div>
    </div>
  )
}

export const query = graphql`
  query($id: String) {
    emojiCsv(id: { eq: $id }) {
      emoji
      id
      name
    }
  }
`
