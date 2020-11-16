<template>
  <section>
    <div class="grid">
      <h2>Theatrical & drive-in screenings</h2>
      <h3>Québec</h3>

      <p>
        The film is available NOW for a LIMITED TIME
        <a href="https://cinemaduparc.com/fr/cinema-en-ligne" target="_blank"
          >online at the Cinéma du Parc</a
        >
      </p>

      <h3>Canada - AVAILABLE NOVEMBER 24th ACROSS CANADA!</h3>
      <p>
        Pre-order the film on
        <a href="https://apple.co/360KWdn" target="_blank">iTunes</a>
      </p>

      <h3>United States - AVAILABLE NOVEMBER 24th ACROSS THE U.S.!</h3>
      <p>
        AVAILABLE TO WATCH NOW: TICKETS LIMITED!<br />
        <a
          href="https://www.docnyc.net/film/the-walrus-and-the-whistleblower/"
          target="_blank"
          >DOC NYC Film Festival</a
        >
      </p>
      <p>
        Pre-order the film on
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
