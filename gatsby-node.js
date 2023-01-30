exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/404/`,
    toPath: `https://www.gatsbyjs.com/`,
    statusCode: 200,
  })
}