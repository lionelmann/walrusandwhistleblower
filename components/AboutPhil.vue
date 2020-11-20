<template>
  <section>
    <article>
      <div class="quote"></div>
      <div class="content">
        <p v-html="$t('about.paragraph_1')"></p>
        <blockquote>
          <p v-html="$t('about.quote_1')"></p>
        </blockquote>
        <p v-html="$t('about.paragraph_2')"></p>
        <blockquote>
          <p v-html="$t('about.quote_2')"></p>
        </blockquote>
        <p v-html="$t('about.paragraph_3')"></p>
      </div>
    </article>
    <div class="bg"></div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  display: grid;
  grid-template-rows: 1fr auto;
}

.bg {
  background: url("~assets/images/bg_phil.jpg") no-repeat;
  background-position: top;
  background-size: cover;
  height: 400px;
}

article {
  padding: 3rem;
  max-width: 700px;
  margin: 0 auto;
}

.content {
  max-width: 600px;
  font-size: 1.1rem;
}

blockquote p {
  margin: 2rem;
  font-weight: 100;
  font-size: 2.5rem;
  line-height: 1;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.31);
}

/*blockquote p em {
  color: #317686;
}*/

blockquote p:after {
  content: "-Phil Demers";
  display: block;
  font-size: 1rem;
  text-indent: 2rem;
  padding: 0.5rem;
}

/* Tablet and Desktop */

@media screen and (min-width: 620px) {
  blockquote p {
    margin: 2rem 2rem 2rem -4rem;
    font-weight: 100;
    font-size: 2.5rem;
    line-height: 1;
  }
}
</style>
