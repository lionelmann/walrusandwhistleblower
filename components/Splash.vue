<template>
  <div class="main">
    <transition name="fade" appear>
      <h1>
        <span>The</span>
        <br />Walrus
        <br />
        <span>and the</span>
        <br />Whistle
        <br />Blower
      </h1>
    </transition>

    <transition name="fade" appear>
      <h3>A Film By Nathalie Bibeau</h3>
    </transition>
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
  text-shadow: -1px 0 #c5c0c0, 0 1px #c5c0c0, 1px 0 #c5c0c0, 0 -1px #c5c0c0;
}

h1 span {
  font-weight: 300;
  font-size: 1.6rem;
  display: block;
  margin-bottom: -45px;
}

h3 {
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 1.1px;
}

.fade-enter-active {
  transition: opacity 2s ease-in;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}

@media screen and (min-width: 620px) {
  h1 {
    font-size: 5rem;
    line-height: 1;
  }

  h1 span {
    font-size: 2.2rem;
    margin-bottom: -70px;
  }

  h3 {
    font-size: 1.5rem;
    letter-spacing: 1.1px;
  }
}

@media screen and (min-width: 1620px) {
  h1 {
    font-size: 8rem;
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