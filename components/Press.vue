<template>
  <section>
    <div class="grid">
      <p>A documentary project comprised of a feature film and an episode of CBC's The Nature of Things, each exploring the public discussion on marine mammal captivity from a different lens.</p>
      <p>
        <b>Press inquiries:</b> Clutch, Daniela Kelloway
        <br />
        <a href="mailto:daniela@clutchpr.com">daniela@clutchpr.com</a>,
        <a href="tel:416 319-3511">416 319-3511</a>
        <br />
        <b>General contact:</b>
        <a href="mailto:walrusandwhistleblower@gmail.com">walrusandwhistleblower@gmail.com</a>
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #ffd621;
}

.grid {
  max-width: 1366px;
  padding: 3rem;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr;
  margin: 0 auto;
}

a {
  color: rgba(49, 118, 134, 1);
  text-decoration: none;
  border-bottom: 2px solid rgba(49, 118, 134, 1);
  transition: all 0.5s ease;
}

a:hover {
  border-bottom: none;
}

@media screen and (min-width: 800px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>