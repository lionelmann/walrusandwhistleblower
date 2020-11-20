<template>
  <section>
    <header class="container">
      <p class="presents">
        <span class="uc">Bunbury Films {{ $t("header.presents") }}</span>
      </p>

      <p class="association">
        <span class="uc">{{ $t("header.association") }}</span>
        <br />
        <em>
          <b>documentary</b>
        </em>
        <b>Channel</b>
        <span class="lc">&</span>
        <b>CBC Docs</b>
      </p>
      <div>
        <nuxt-link
          class="toggle"
          v-if="$i18n.locale !== 'en'"
          :to="switchLocalePath('en')"
        >
          <font-awesome-icon :icon="['fas', 'globe']" /> English
        </nuxt-link>

        <nuxt-link
          class="toggle"
          v-if="$i18n.locale !== 'fr'"
          :to="switchLocalePath('fr')"
        >
          <font-awesome-icon :icon="['fas', 'globe']" /> Français
        </nuxt-link>
      </div>
    </header>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Mobile First */
section {
  position: relative;
}

.container {
  position: absolute;
  width: 100%;
}

header {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem 0rem;
}

header p {
  color: white;
  font-size: 1rem;
}

.toggle {
  color: white;
  text-decoration: none;
}

.toggle:hover {
  opacity: 0.7;
}

.uc {
  text-transform: uppercase;
  font-weight: 200;
  font-size: 1rem;
}

.lc {
  text-transform: lowercase;
  font-size: 0.8rem;
  font-weight: 200;
}

/* Tablet and Desktop */

@media screen and (min-width: 620px) {
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
    grid-column: 2;
  }
}
</style>
