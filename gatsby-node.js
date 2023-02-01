// const redirects = require("./redirects.json") 

// exports.createPages = async ({ graphql, actions }) => {
  // const { createRedirect } = actions

  // this doesn't seem to work, because the page /hello/ exists
//   createRedirect({
//     fromPath: `/hello/`,
//     toPath: `https://www.gatsbyjs.com/`,
//     statusCode: 200,
//   })

  // redirects.forEach(redirect =>
  //   createRedirect({
  //     fromPath: redirect.fromPath,
  //     toPath: redirect.toPath,
  //   })
  // )

  //   createRedirect({
  //   fromPath: `/rachael/`,
  //   toPath: `/hello/`,
  //   statusCode: 200,
  // })


// }

exports.onPostBuild = async function ({ cache }) {
  const cacheKey = "test-key"
  let obj = await cache.get(cacheKey)

  if (!obj) {
    console.log(`No cache object found with key "${cacheKey}." Caching key "${cacheKey}" now.`)
    obj = { created: Date.now() }
    await cache.set(cacheKey, obj)
  } else {
    console.log(`Found cache object with key ${cacheKey} and created value ${obj.created}!`)
  }
}

