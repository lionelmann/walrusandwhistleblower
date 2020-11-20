<template>
  <div>
    <p v-html="$t('footer.cta')"></p>
    <br />
    <a
      class="button"
      href="https://walrusandwhistleblower.us19.list-manage.com/subscribe/post?u=57f2978c518969af12ab3cd19&amp;id=5994baca88"
      target="_blank"
      >{{ $t("footer.button") }}</a
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input[type="email"],
input[type="submit"] {
  border: 2px solid rgba(255, 213, 28, 0.7);
  background: transparent;
  color: #ffd51c;
  height: 50px;
  padding: 0 20px;
  font: normal 700 1.2rem/1 "GTWalsheim";
  width: 250px;
  transition: border 0.3s;
}

.button {
  background: transparent;
  color: rgba(255, 213, 28, 0.7);
  padding: 12px 20px;
  transition: border 0.3s;
  text-transform: uppercase;
  font: normal 700 1.2rem/1 "GTWalsheim";
  cursor: pointer;
  border: 2px solid rgba(255, 213, 28, 0.7);
  transition: background 0.3s;
  text-decoration: none;
}

.button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

h4 {
  font-size: 2rem;
  color: rgba(255, 213, 28, 1);
  text-transform: uppercase;
  margin-bottom: 12px;
}

p {
  color: rgba(255, 213, 28, 1);
  font-size: 1.1rem;
}
</style>
