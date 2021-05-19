<template>
  <div class="header__navigation-wrapper"> 
    <header id="js-header" class="header">
      <div class="container">
        <div class="logo-wrapper">
          <g-link to="/">
            <g-image
              class="logo"
              :src="$static.allOptions.edges[0].node.acf.header_logo"
            />
          </g-link>
        </div>

        <div v-on:click="menuVision('add')" class="burger">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </div>

        <nav class="header-navigation">
          <g-link class="header-navigation__link" to="/">Home</g-link>
          <g-link class="header-navigation__link" to="/about/">About</g-link>
          <g-link class="header-navigation__link header-navigation__link--contact" to="/contact/">Contact us</g-link>
        </nav>
      </div>
    </header>
    <div class="offcanvas-menu__wrapper">
      <div v-on:click="menuVision('remove')" id="js-offcanvas__overlay" class="offcanvas__overlay"></div>
      <div id="js-offcanvas-menu" class="offcanvas-menu">
        <g-link to="/">
          <g-image
            class="logo"
            :src="$static.allOptions.edges[0].node.acf.header_logo"
          />
        </g-link>
        <nav class="header-navigation header-navigation--offcanvas">
          <g-link class="header-navigation__link" to="/">Home</g-link>
          <g-link class="header-navigation__link" to="/about/">About</g-link>
          <g-link class="header-navigation__link" to="/front/">Front</g-link>
          <g-link class="header-navigation__link header-navigation__link--contact" to="/contact/">Contact us</g-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<static-query>
query Options {
  allOptions {
    edges {
      node {
        id
        acf {
          header_logo
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  methods: {
    menuVision: function(hideRemove) {
      const offcanvas        = document.getElementById('js-offcanvas-menu');
      const offcanvasOverlay = document.getElementById('js-offcanvas__overlay');

      offcanvas.classList.[hideRemove]('open');
      offcanvasOverlay.classList.[hideRemove]('open');
    }
  },
  mounted () {
    // Header on scroll
    const offset = 50;

    window.addEventListener('scroll', (e) => {
      if(window.pageYOffset > offset) {
        document.getElementById('js-header').classList.add('sticky');
      } else {
        document.getElementById('js-header').classList.remove('sticky');
      }
    });
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/constants.scss';

  .burger {
    width: 50px;
    height: 50px;
    padding: 5px;
    background-color: $accent;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    display: none;
  }

  .burger-line {
    height: 1px;
    width: 50%;
    background-color: $white;
    margin-bottom: 10px;

    &:last-child {
      margin: 0;
    }
  }

  .header {
    padding: 15px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: background-color .5s;
    z-index: 20;

    &.sticky {
      background-color: $white;
    }

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .logo-wrapper {
    max-width: 220px;

    a {
      padding: 5px;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .header-navigation__link {
    padding: 5px 10px;
    text-decoration: none;
    margin: 0 10px;
    color: $black;
    transition: color .5s;

    &:hover {
      color: $accent;
    }
  }

  .header-navigation__link--contact {
    padding: 15px 70px;
    border-radius: 10px;
    background-color: $accent;
    color: $white;
    font-weight: 600;
    transition: all .5s;

    &:hover {
      background-color: darken($accent, 10%);
      color: $white;
    }
  }

  // Offcanvas

  .offcanvas__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba($black, .5);
    z-index: 50;
    visibility: hidden;
    transition: all .5s;

    &.open {
      visibility: visible;
    }
  }

  .offcanvas-menu {
    height: 100vh;
    width: 300px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    background-color: $accentDark;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transform: translate(100%, 0);
    transition: all .5s;

    &.open {
      transform: translate(0, 0);
    }
  }

  .header-navigation--offcanvas {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    .header-navigation__link {
      color: $white;
      text-align: center;
      margin: 0 0 20px 0;
    }
  }

  @media only screen and (max-width : 960px) {
    .header-navigation {
      display: none;
    }

    .header-navigation--offcanvas {
      display: flex;
    }

    .burger {
      display: flex;
    }

    .header {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media only screen and (max-width : 640px) {
    .header {
      padding-top: 5px;
      padding-bottom: 5px;
    }

    .logo-wrapper {
      width: 60%;
    }
  }
</style>
