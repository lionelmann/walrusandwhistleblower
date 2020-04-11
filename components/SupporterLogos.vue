<template>
  <div>
    <div class="grid">
      <a href="#">
        <img src="~assets/images/logo_doc.svg" alt />
      </a>
      <a href="#">
        <img src="~assets/images/logo_cbc.png" alt />
      </a>
      <a href="#">
        <img src="~assets/images/logo_canada.png" alt />
      </a>
      <a href="#">
        <img src="~assets/images/logo_cmf_rv.svg" alt />
      </a>
      <a href="#">
        <img src="~assets/images/logo_quebec.svg" alt />
      </a>
      <a href="#">
        <img src="~assets/images/logo_bunbury.jpg" alt />
      </a>
      <div class="badge">
        <div id="wcb" class="wcb carbonbadge"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.grid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.badge {
  display: flex;
  margin: 20px auto;
}

img {
  width: auto;
  height: 2rem;
  margin: 1rem;
  opacity: 0.7;
  transition: opacity 0.3s;
}

img:hover {
  opacity: 1;
}

@media screen and (min-width: 1020px) {
  .grid {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  img {
    width: auto;
    height: 2rem;
    margin: 1rem;
    opacity: 0.7;
    filter: grayscale(100%);
    transition: opacity 0.3s;
  }

  .badge {
    display: flex;
    margin: 0;
    margin-left: auto;
    filter: grayscale(100%);
  }
}
</style>