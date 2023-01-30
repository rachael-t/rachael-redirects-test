const redirects = require("./redirects.json") 

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  // this doesn't seem to work, because the page /hello/ exists
//   createRedirect({
//     fromPath: `/hello/`,
//     toPath: `https://www.gatsbyjs.com/`,
//     statusCode: 200,
//   })

  redirects.forEach(redirect =>
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
    })
  )

    createRedirect({
    fromPath: `/rachael/`,
    toPath: `/hello/`,
    statusCode: 200,
  })
}