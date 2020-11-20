<template>
  <section>
    <article>
      <h2 v-html="$t('director.title')"></h2>
      <div class="two-columns">
        <p v-html="$t('director.section_1')"></p>

        <blockquote>
          <p v-html="$t('director.quote_1')"></p>
        </blockquote>
        <p v-html="$t('director.section_2')"></p>
      </div>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Mobile First */
section {
  background-color: #632b30;
  background-color: rgb(49, 118, 134);
  padding: 3rem 3rem 5rem 3rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.3;
  margin-bottom: 18px;
}

blockquote p {
  font-size: 2.2rem;
  line-height: 1;
  font-weight: 200;
  padding: 1rem 1rem;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.31);
}

article {
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 1366px;
}

h2 {
  color: #ffd51c;
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 3px 3px 7px rgba(0, 0, 0, 0.31);
}

.two-columns {
  column-count: 1;
}

@media screen and (min-width: 720px) {
  .two-columns {
    column-count: 2;
    column-gap: 60px;
  }
  h2 {
    font-size: 4rem;
  }
}
</style>
