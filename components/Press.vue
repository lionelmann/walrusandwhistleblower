<template>
  <div>
    <div class="shoutout-container">
      <div class="shoutout">
        <p>{{ $t("press.winner") }}</p>
      </div>
    </div>
    <section>
      <div class="grid">
        <p v-html="$t('press.description')"></p>
        <div>
          <!--<h4>Subscribe</h4>-->
          <p v-html="$t('footer.cta')"></p>
          <br />
          <a
            class="button"
            href="https://walrusandwhistleblower.us19.list-manage.com/subscribe/post?u=57f2978c518969af12ab3cd19&amp;id=5994baca88"
            target="_blank"
            >{{ $t("footer.button") }}</a
          >
        </div>
        <p>
          <b>{{ $t("press.title") }}:</b>
          <br />{{ $t("press.name") }}
          <br />
          <a :href="'mailto:' + $t('press.email')">{{ $t("press.email") }}</a
          ><br />
          <a :href="'tel:' + $t('press.phone')">{{ $t("press.phone") }}</a>
          <br />
          <br />
          <b>{{ $t("press.contact") }}:</b>
          <a href="mailto:walrusandwhistleblower@gmail.com">Email</a>
          <br />
          <b>{{ $t("press.kit") }}:</b>
          <a
            href="https://forms.gle/Gqn6tSL8AyApcwcA7"
            target="_blank"
            class="press"
            >Download</a
          >
        </p>
      </div>
    </section>
  </div>
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

.shoutout-container {
  background-color: rgba(237, 27, 36, 1);
}

.shoutout {
  color: white;
  max-width: 1366px;
  margin: 0 auto;
  padding: 1.5rem 3rem 1rem 3rem;
  text-align: center;
  font-size: 1.5rem;
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

.button {
  background: transparent;
  color: white;
  padding: 12px 20px;
  transition: border 0.3s;
  text-transform: uppercase;
  font: normal 700 1.2rem/1 "GTWalsheim";
  cursor: pointer;
  border: 2px solid white;
  transition: background 0.3s;
}

.button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
}

@media screen and (min-width: 800px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
