module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://cgspark-andrii-pavlyshyn.github.io',
  pathPrefix: '/gridsome-with-server',
  siteDescription: 'Gridsome test website',

  templates: {
    // WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    // WordPressPost: '/:year/:month/:day/:slug', // adds a route for the "post" post type (Optional)
    WordPressPage: '/:title', // adds a route for the "post" post type (Optional)
    // WordPressPostTag: '/tag/:slug' // adds a route for the "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: process.env.WORDPRESS_URL, // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        apiBase: 'wp-json',
      }
    }
  ]
}
