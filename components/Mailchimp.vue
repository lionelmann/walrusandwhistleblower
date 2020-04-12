<template>
  <div>
    <h4>Subscribe</h4>
    <p>Sign up with your email address to receive news and updates.</p>
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
          <div class="mc-field-group">
            <input
              type="email"
              value
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
              placeholder="Your email"
            />
          </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_57f2978c518969af12ab3cd19_5994baca88" tabindex="-1" value />
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
</template>

<script>
export default {};
</script>

<style scoped>
#mc_embed_signup_scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
}

input[type="email"],
input[type="submit"] {
  border: 2px solid rgba(255, 213, 28, 0.7);
  background: transparent;
  color: #ffd51c;
  height: 50px;
  padding: 0 20px;
  line-height: 48px;
  font-size: 1.2rem;
  width: 250px;
  transition: border 0.3s;
}

input[type="email"]:focus {
  border: 2px solid rgba(255, 213, 28, 1);
}

input[type="submit"] {
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid rgba(255, 213, 28, 1);
  transition: background 0.3s;
  margin: 5px 0px 0 0;
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

h4 {
  font-size: 2rem;
  color: rgba(255, 213, 28, 1);
  text-transform: uppercase;
  margin-bottom: 12px;
}

p {
  color: rgba(255, 213, 28, 1);
  font-size: 1.1rem;
}

@media screen and (min-width: 1020px) {
  #mc_embed_signup_scroll {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
  }

  input[type="email"],
  input[type="submit"] {
    border: 2px solid rgba(255, 213, 28, 0.7);
    background: transparent;
    color: #ffd51c;
    height: 50px;
    padding: 0 20px;
    line-height: 48px;
    font-size: 1.2rem;
    transition: border 0.3s;
    margin: 0 5px 0 0;
    width: auto;
  }
}
</style>