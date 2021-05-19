<template>
  <section class="section section--footer">
    <div class="container">
      <div class="footer__content-grid">
        <div class="footer__copiright-wrapper">
          <p class="footer_copiright" v-html="$static.allOptions.edges[0].node.acf.copyright_text" />
        </div>
        <div class="footer__content-wrapper">
          <ul class="clean-list footer__socials">
            <li v-if="$static.allOptions.edges[0].node.acf.social_facebook" class="footer__social">
              <a :href="$static.allOptions.edges[0].node.acf.social_facebook" class="footer__social-link">
                <g-image 
                  alt="Facebook"
                  src="../assets/img/icons/facebook.svg"
                  class="footer__social-img" />
              </a>
            </li>
            <li v-if="$static.allOptions.edges[0].node.acf.social_twitter" class="footer__social">
              <a :href="$static.allOptions.edges[0].node.acf.social_twitter" class="footer__social-link">
                <g-image 
                  alt="Twitter"
                  src="../assets/img/icons/twitter.svg"
                  class="footer__social-img" />
              </a>
            </li>
            <li v-if="$static.allOptions.edges[0].node.acf.social_instagram" class="footer__social">
              <a :href="$static.allOptions.edges[0].node.acf.social_instagram" class="footer__social-link">
                <g-image 
                  alt="Instagram"
                  src="../assets/img/icons/instagram.svg"
                  class="footer__social-img" />
              </a>
            </li>
          </ul>

          <g-link
            :to="'/'"
            class="footer__logo-wrapper">
            <g-image
              :src="$static.allOptions.edges[0].node.acf.footer_logo"
              class="footer__logo" />
          </g-link>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query Options {
  allOptions {
    edges {
      node {
        id
        acf {
          footer_logo
          social_facebook
          social_twitter
          social_instagram
          copyright_text
        }
      }
    }
  }
}
</static-query>

<script>
export default {

}
</script>

<style lang="scss">
  @import '~/assets/scss/constants.scss';

  .section--footer {
    background-image: url('../assets/img/general/footer.svg');
    background-size: cover;
    padding: 250px 0 50px 0 !important;
  }

  .footer__content-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 40%;
  }

  .footer__content-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .footer__socials {
    display: flex;
    margin: 0;
    align-items: center;
  }

  .footer__social {
    margin-right: 30px;
    transition: all .5s;

    &:hover {
      transform: scale(1.1);
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .footer__social-link {
    background-color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 35px;
    height: 35px;
  }

  .footer__logo-wrapper {
    display: flex;
    align-items: center;
  }

  .footer__copiright-wrapper {
    display: flex;
    align-items: center;
  }

  .footer_copiright {
    margin: 0;
    color: $white;
    font-size: $fz16;
  }

  @media only screen and (max-width : 1200px) {
    .section--footer {
      background-position: 50%;
      padding-top: 200px !important;
    }
  }

  @media only screen and (max-width : 960px) {
    .footer__content-grid {
      background-position: 50%;
      grid-template-columns: 1fr;
    }

    .footer__copiright-wrapper {
      order: 1;
      margin-top: 20px;
      justify-content: center;
    }
  }

  @media only screen and (max-width : 640px) {
    .section--footer {
      padding-top: 120px !important;
    }
  }

  @media only screen and (max-width : 480px) {
    .footer__content-wrapper {
      flex-direction: column;
      align-items: center;
    }

    .footer__socials {
      margin-bottom: 30px;
    }
  }
</style>
