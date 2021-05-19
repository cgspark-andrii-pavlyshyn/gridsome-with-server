// gridsome.server.js
const axios = require('axios')

module.exports = function (api) {
  // General options
  api.loadSource(async actions => {
    const collection = actions.addCollection('Options')

    const { data } = await axios.get('https://gridsome.cgspark.co/wp-json/acf/v2/options')

    collection.addNode({
      ...data
    })
  })

  // Menus
  api.loadSource(async actions => {
    const collection = actions.addCollection('Menus')

    const { data } = await axios.get('https://gridsome.cgspark.co/wp-json/wp-api-menus/v2/menus')

    collection.addNode({
      ...data
    })
  })
}