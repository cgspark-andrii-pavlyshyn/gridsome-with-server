<template>
  <Layout>
  
    <section class="hero-section">
      <g-image 
        :src="$page.heroSection.edges[0].node.acf.home_page_hero_section_background"
        class="hero-section__background-image" />
      <div class="hero-section__content">
        <div class="container">
          <h1 
            v-html="$page.heroSection.edges[0].node.acf.home_page_hero_title" 
            class="hero-section__h1"/>
          <p 
            v-html="$page.heroSection.edges[0].node.acf.home_page_hero_description" 
            class="hero-section__description"/>
          <a 
            class="btn"
            :href="$page.heroSection.edges[0].node.acf.home_page_hero_button.hero_button_url"
            v-html="$page.heroSection.edges[0].node.acf.home_page_hero_button.hero_button_text"/>
        </div>
      </div>
    </section>

    <section class="section section--home-services">
      <div class="container">
        <h3 
          class="services__title" 
          v-html="$page.servicesSection.edges[0].node.acf.home_page_services_title" />
        <p 
          class="services__description" 
          v-html="$page.servicesSection.edges[0].node.acf.home_page_services_description" />

        <ul class="services clean-list">
          <li 
            v-for="item in $page.servicesSection.edges[0].node.acf.home_page_services" 
            class="services__item">

            <div class="services__item-icon-wrapper">
              <g-image 
                class="services__item-icon" 
                :src="item.service_item_icon" />
            </div>

            <h4 
              class="services__item-title"
              v-html="item.service_item_title" />

            <p 
              class="services__item-description"
              v-html="item.service_item_description" />

          </li>
        </ul>

      </div>
    </section>

    <section class="section section--support">
      <div class="container">
        <div class="support__content-grid">
          <div class="support__content">
            <h3
              v-html="$page.supportSection.edges[0].node.acf.home_page_support_title" 
              class="support__title" />
            <p 
              v-html="$page.supportSection.edges[0].node.acf.home_page_support_description"
              class="support__description" />
          </div>
          <div class="support__tree">
            <div class="support__tree-image-wrapper">
              <g-image 
                src="../assets/img/home-page/tree.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<style lang="scss">
  @import '~/assets/scss/home-page/home-page.scss';
</style>

<script>
export default {
  metaInfo: {
    title: 'Home page'
  }
}
</script>

<page-query>
query HomePage {
  heroSection: allOptions {
    edges {
      node {
        acf {
          home_page_hero_section_background
          home_page_hero_title
          home_page_hero_description
          home_page_hero_button {
            hero_button_text
            hero_button_url
          }
        }
      }
    }
  }
  servicesSection: allOptions {
    edges {
      node {
        acf {
          home_page_services_title
          home_page_services_description
          home_page_services {
            service_item_title
            service_item_description
            service_item_icon
          }
        }
      }
    }
  }
  supportSection: allOptions {
    edges {
      node {
        acf {
          home_page_support_title
          home_page_support_description
        }
      }
    }
  }
}
</page-query>
