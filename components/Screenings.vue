<template>
  <section>
    <div class="grid">
      <h2 v-html="$t('screenings.title')"></h2>
      <h3>Canada</h3>
      <p>
        {{ $t("screenings.available") }}<br />
        <a href="https://apple.co/360KWdn" target="_blank">iTunes</a><br />
        <a
          href="https://tiff.net/events/the-walrus-and-the-whistleblower"
          target="_blank"
          >TIFF</a
        >
      </p>

      <h3>{{ $t("screenings.us_name") }}</h3>
      <p>
        {{ $t("screenings.available") }}<br />
        <a
          href="https://www.amazon.com/Walrus-Whistleblower-Phil-Demers/dp/B08KVV475Q/ref=sr_1_1?crid=13U66SWEEICN7&dchild=1&keywords=the+walrus+and+the+whistleblower&qid=1606251550&s=instant-video&sprefix=the+walrus%2Caps%2C194&sr=1-1"
          >Amazon Prime</a
        ><br />
        <a
          href="https://trailers.apple.com/trailers/independent/the-walrus-and-the-whistleblower/"
          >iTunes</a
        >
      </p>

      <h3>{{ $t("screenings.uk_name") }}</h3>
      <p>
        {{ $t("screenings.available") }}<br />
        <a
          href="
https://www.amazon.co.uk/Walrus-Whistleblower-Phil-Demers/dp/B08P65BK7B/ref=sr_1_1?crid=1S23IFZS93UQ5&dchild=1&keywords=walrus+and+the+whistleblower&qid=1609945274&sprefix=walrus+whistleb%2Caps%2C250&sr=8-1"
          >Amazon Prime</a
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
