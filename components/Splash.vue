<template>
  <div class="main">
    <h1>
      <span>The</span>
      <br />Walrus
      <br />
      <span>and the</span>
      <br />Whistle
      <br />Blower
    </h1>
    <h3>A Film By Nathalie Bibeau</h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

h1 {
  font-size: 3rem;
  line-height: 1;
  color: rgba(50, 118, 134, 1);
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

h1 span {
  font-weight: 300;
  font-size: 1.6rem;
  display: block;
  margin-bottom: -55px;
}

h3 {
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 1.1px;
}

@media screen and (min-width: 620px) {
  h1 {
    font-size: 4.5rem;
    line-height: 1;
  }

  h1 span {
    font-size: 2.2rem;
    margin-bottom: -65px;
  }

  h3 {
    font-size: 1.4rem;
    letter-spacing: 1.1px;
  }
}

@media screen and (min-width: 1620px) {
  h1 {
    font-size: 7.5rem;
    line-height: 1;
  }

  h1 span {
    font-weight: 300;
    font-size: 4.2rem;
    margin-bottom: -95px;
  }

  h3 {
    font-size: 1.4rem;
    letter-spacing: 1.1px;
  }
}
</style>