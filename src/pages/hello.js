import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const paragraphStyles = {
  marginBottom: 48,
} 

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Hello!
      </h1>
      <p style={paragraphStyles}>
        This is a test page.
      </p>
    
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
