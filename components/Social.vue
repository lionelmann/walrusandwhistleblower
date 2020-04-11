<template>
  <section>
    <div>
      <a href="https://google.ca">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
      <a href="https://google.ca">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
      <a href="https://google.ca">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.svg-inline--fa {
  color: rgba(255, 213, 28, 0.8);
  font-size: 2.5rem;
  margin: 0 10px;
  transition: color 0.3s;
}

.svg-inline--fa:hover {
  color: rgba(255, 213, 28, 1);
}
</style>