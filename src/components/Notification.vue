<template>
  <div 
    v-bind:class="notification.success" 
    class="notification-body">
      <h4 v-html="notification.successMessage" />
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/constants.scss';

  .notification-body {
    max-width: 350px;
    width: calc(100% - 40px);
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 25;
    padding: 10px;
    background-color: $grey;
    border-radius: 10px;
    color: $white;
    text-align: center;
    transition: all .5s;
  
    &.hidden {
      visibility: hidden;
      opacity: 0;
    }

    &.success {
      background-color: lighten($green, 10%);
      visibility: visible;
      opacity: 1;
    }

    &.error {
      background-color: lighten($red, 10%);
      visibility: visible;
      opacity: 1;
    }
  }
</style>
