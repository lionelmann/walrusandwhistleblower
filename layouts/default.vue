<template>
  <transition>
    <main>
      <v-header />
      <nuxt />
      <v-footer />
    </main>
  </transition>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    "v-footer": TheFooter,
    "v-header": TheHeader
  }
};
</script>

<style>
/* Base Styles */
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

p {
  margin-bottom: 10px;
}

:focus {
  outline: none;
}

h1 {
  font-size: 5.202rem;
}

h2 {
  font-size: 3.653rem;
}

h3 {
  font-size: 1.602rem;
}

h4 {
  font-size: 1.266rem;
}

h5 {
  font-size: 1.125rem;
}

h6 {
  font-size: 1rem;
}

small {
  font-size: 0.889rem;
}
</style>