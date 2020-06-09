var plugins = [{
      plugin: require('C:/Users/Awesomeness/Documents/projects/gatsbyPortfolio/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"pathToConfigModule":"C:\\Users\\Awesomeness\\Documents\\projects\\gatsbyPortfolio\\node_modules\\@christiandavid\\gatsby-theme-byfolio/src/utils/typography"},
    },{
      plugin: require('C:/Users/Awesomeness/Documents/projects/gatsbyPortfolio/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Christian David Ibarguen","short_name":"CD","description":"This cool App contains information about my work experience as a software developer.","lang":"en","start_url":"/","background_color":"#000","theme_color":"#fff","display":"standalone","icon":"C:\\Users\\Awesomeness\\Documents\\projects\\gatsbyPortfolio\\node_modules\\@christiandavid\\gatsby-theme-byfolio/src/images/icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"44590bfb17c92ead4e63ed479de724c8"},
    },{
      plugin: require('C:/Users/Awesomeness/Documents/projects/gatsbyPortfolio/node_modules/gatsby-plugin-transition-link/gatsby-ssr'),
      options: {"plugins":[],"layout":"C:\\Users\\Awesomeness\\Documents\\projects\\gatsbyPortfolio\\node_modules\\@christiandavid\\gatsby-theme-byfolio\\src\\layout\\index.js"},
    },{
      plugin: require('C:/Users/Awesomeness/Documents/projects/gatsbyPortfolio/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/Awesomeness/Documents/projects/gatsbyPortfolio/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/Awesomeness/Documents/projects/gatsbyPortfolio/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"exclude":["/experience/_additionalSkills"]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
