<template>
  <section>
    <div class="grid">
      <h2 v-html="$t('screenings.title')"></h2>
      <h3>Canada</h3>
      <p>
        {{ $t("screenings.cn") }}<br />
        {{ $t("screenings.cn_link") }}
        <a href="https://apple.co/360KWdn" target="_blank">iTunes</a>
      </p>

      <h3>{{ $t("screenings.us_name") }}</h3>
      <p>
        {{ $t("screenings.us_1") }}<br />
        <a
          href="https://www.docnyc.net/film/the-walrus-and-the-whistleblower/"
          target="_blank"
          >{{ $t("screenings.us_1_link") }}</a
        >
      </p>
      <br />
      <p>
        {{ $t("screenings.us_2") }}<br />

        {{ $t("screenings.us_2_link") }}
        <a
          href="https://apple.co/3k5XXrphttps://trailers.apple.com/trailers/independent/the-walrus-and-the-whistleblower/"
          >iTunes</a
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  background-color: #ffd621;
}

h2 {
  font-size: 3rem;
  text-transform: uppercase;
}

h3 {
  margin-top: 10px;
}

a {
  color: rgba(49, 118, 134, 1);
  font-weight: bold;
  text-decoration: none;
  border-bottom: 2px solid rgba(49, 118, 134, 1);
  transition: 0.1s ease-in-out;
}

a:hover {
  border-bottom: none;
}

.grid {
  color: black;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1366px;
  margin: 0 auto;
  padding: 3rem;
}
</style>
