<template>
  <section>
    <div class="grid">
      <p>A documentary project comprised of a feature film and an episode of CBC's The Nature of Things, each exploring the public discussion on marine mammal captivity from a different lens.</p>
      <div>
        <!--<h4>Subscribe</h4>-->
        <p>Sign up to get news and updates, and to be notified of a screening near you.</p>
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
          <form
            action="https://walrusandwhistleblower.us19.list-manage.com/subscribe/post?u=57f2978c518969af12ab3cd19&amp;id=5994baca88"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <!--<div class="mc-field-group">
            <input
              type="email"
              value
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
              placeholder="Your email"
            />
              </div>-->
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input
                  type="text"
                  name="b_57f2978c518969af12ab3cd19_5994baca88"
                  tabindex="-1"
                  value
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
              </div>
            </div>
          </form>
        </div>

        <!--End mc_embed_signup-->
      </div>
      <p>
        <b>Press inquiries:</b> Clutch, Daniela Kelloway
        <br />
        <a href="mailto:daniela@clutchpr.com">daniela@clutchpr.com</a>,
        <a href="tel:+14163193511">416 319-3511</a>
        <br />
        <b>General contact:</b>
        <a href="mailto:walrusandwhistleblower@gmail.com">Email</a>
      </p>
    </div>
  </section>
</template>

<script>
import Mailchimp from "@/components/Mailchimp.vue";
export default {
  components: {
    Mailchimp
  }
};
</script>

<style scoped>
section {
  background-color: rgba(49, 118, 134, 1);
}

.grid {
  color: white;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr;
  max-width: 1366px;
  margin: 0 auto;
  padding: 3rem;
}

a {
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;
}

a:hover {
  border-bottom: none;
}

#mc_embed_signup_scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
}

input[type="submit"] {
  border: 2px solid rgba(255, 213, 28, 0.7);
  background: transparent;
  color: white;
  height: 50px;
  padding: 0 20px;
  transition: border 0.3s;
}

input[type="submit"] {
  text-transform: uppercase;
  font: normal 700 1.2rem/1 "GTWalsheim";
  cursor: pointer;
  border: 2px solid white;
  transition: background 0.3s;
}

input[type="submit"]:hover {
  background: rgba(255, 213, 28, 0.3);
}

input[type="submit"]:active {
  color: rgba(49, 118, 134);
  background: rgba(255, 213, 28, 1);
}

::-webkit-input-placeholder,
:-ms-input-placeholder,
::placeholder {
  color: rgba(255, 213, 28, 0.6);
  font-size: 1.2rem;
}

@media screen and (min-width: 800px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>