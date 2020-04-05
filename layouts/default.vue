<template>
  <div class="bg">
    <nuxt />
  </div>
</template>

<style>
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}

.bg {
  background: url("~assets/bg_water.jpg");
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
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
</style>