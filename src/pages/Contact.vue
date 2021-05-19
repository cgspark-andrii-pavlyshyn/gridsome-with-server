<template>
  <Layout>
    <section class="section section--contact-us-page">
      <div class="container">
        <form 
          action="#" 
          method="POST"
          id="js-contact-us-form" 
          class="contact-us__form">
          <div class="contact-us__input-group">
            <label class="contact-us__label" for="email">Email Address</label>
            <input
              class="contact-us__input" 
              placeholder="Your email address"
              type="email" 
              id="email" 
              name="email" 
              required>
          </div>
          <div class="contact-us__input-group">
            <label class="contact-us__label" for="name">Name</label>
            <input
              class="contact-us__input" 
              placeholder="Your name" 
              id="name" 
              name="name" 
              required>
          </div>

          <button 
            type="submit"
            class="btn contact-us__submit">Submit</button>
        </form>
      </div>
      <Notification :notification="formNotificationArgs" />
    </section>
  </Layout>
</template>

<style lang="scss">
  @import '~/assets/scss/contact-us/contact-us.scss';
</style>

<script>
import $ from 'jquery';
import Notification from '../components/Notification.vue';

export default {
  data: () => {
    return {
      formNotificationArgs: {
        successMessage: 'Success, message was been sent! 😄',
        errorMessage: 'Something went wrong, pleas, try again 😔',
        success: 'hidden'
      },
    }
  },
  components: {
    Notification
  },
  metaInfo: {
    title: 'Contact us'
  },
  mounted () {
    // Form sending
    const contactForm = $('#js-contact-us-form');
    const notification = this.formNotificationArgs;

    function hideNotification(formNotificationArgs) {
      setTimeout(() => {
        formNotificationArgs.success = 'hidden';
      }, 2000);
    }

    contactForm.submit((e) => {
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: 'https://gridsome.cgspark.co/wp-content/formSent.php',
        data: contactForm.serialize(),
        cache: false,
      }).fail(() => {
        console.log('fail');


        notification.success = 'error';
        hideNotification(notification);
      }).done(() => {
        console.log('done');

        notification.success = 'success';
        hideNotification(notification);

        // Reset form
        contactForm.find('input').val('');
      });
      return false;
    });
  }
}
</script>
