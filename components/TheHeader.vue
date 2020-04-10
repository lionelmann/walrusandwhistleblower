<template>
  <section>
    <header class="container">
      <p>
        <span class="uc">Bunbury Films Presents</span>
        <span class="lc">in assocation with</span>
        <em>
          <b>documentary</b>
        </em>
        <b>Channel</b>
        <span class="lc">and</span>
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
  display: flex;
  padding: 1rem 1rem 0 1rem;
}

header p {
  color: white;
  font-size: 1rem;
}

.uc {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.1rem;
}

.lc {
  text-transform: lowercase;
  font-size: 0.8rem;
}

/* Tablet and Desktop */

@media screen and (min-width: 620px) {
}
</style>