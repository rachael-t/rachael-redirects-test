exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/test/`,
    toPath: `https://www.gatsbyjs.com/`,
  })
}