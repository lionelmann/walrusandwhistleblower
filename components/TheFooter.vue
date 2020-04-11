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
  background-color: rgb(49, 118, 134);
  padding: 2.5rem;
}

section {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  text-align: center;
}
</style>