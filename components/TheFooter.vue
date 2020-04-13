<template>
  <footer>
    <section>
      <Social />
      <Mailchimp />
      <Logos />
    </section>
  </footer>
</template>

<script>
import Social from "@/components/Social.vue";
import Mailchimp from "@/components/Mailchimp.vue";
import Logos from "@/components/SupporterLogos.vue";
export default {
  components: {
    Social,
    Mailchimp,
    Logos
  }
};
</script>

<style scoped>
footer {
  background-color: rgba(49, 118, 134, 1);
  padding: 2.5rem;
}

section {
  max-width: 1366px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  text-align: center;
  margin: 0 auto;
}
</style>