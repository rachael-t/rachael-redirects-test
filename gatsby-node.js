exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/hello/`,
    toPath: `https://www.gatsbyjs.com/`,
    statusCode: 200,
  })
}