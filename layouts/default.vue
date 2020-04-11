<template>
  <transition>
    <main>
      <v-headerfull />
      <!--<v-header />-->
      <nuxt />
      <v-footer />
    </main>
  </transition>
</template>

<script>
import TheHeaderFull from "@/components/TheHeaderFull.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    "v-footer": TheFooter,
    "v-headerfull": TheHeaderFull,
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
</style>