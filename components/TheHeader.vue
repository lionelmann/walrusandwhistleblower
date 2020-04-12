<template>
  <section>
    <header class="container">
      <p class="presents">
        <span class="uc">Bunbury Films Presents</span>
      </p>

      <p class="association">
        <span class="uc">in association with</span>
        <br />
        <em>
          <b>documentary</b>
        </em>
        <b>Channel</b>
        <span class="lc">&</span>
        <b>CBC Docs</b>
      </p>
    </header>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  position: relative;
}

.container {
  position: absolute;
  width: 100%;
}

header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  align-items: top;
  padding: 1.5rem 2.5rem;
}

header .presents {
  grid-column: 1;
}

header .association {
  grid-column: 3;
}

header p {
  color: white;
  font-size: 1rem;
}

.uc {
  text-transform: uppercase;
  font-weight: 200;
  font-size: 1.1rem;
}

.lc {
  text-transform: lowercase;
  font-size: 0.8rem;
  font-weight: 200;
}

/* Tablet and Desktop */

@media screen and (min-width: 620px) {
}
</style>