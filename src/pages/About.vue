<template>
  <Layout>
    <section
      class="section section--about-page">
        <div class="container">
          <div 
            v-html="$page.aboutContent.edges[0].node.acf.about_page_content"
            class="about__content"></div>
        </div>
      </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About me'
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/about-page/about-page.scss';
</style>

<page-query>
query AboutPage {
  aboutContent: allOptions {
    edges {
      node {
        acf {
          about_page_content
        }
      }
    }
  }
}
</page-query>
