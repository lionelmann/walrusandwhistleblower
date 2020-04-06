<template>
  <header>
    <img class="hd20" src="~assets/laurel.svg" alt />
    <div>
      <p>
        Site
        <br />Coming
        <br />soon
      </p>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  padding: 1rem 1rem 0 1rem;
}

header div {
  display: flex;
  align-items: center;
  margin-left: auto;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
}

header p {
  line-height: 1;
  text-align: center;
  transform: rotate(10deg);
  padding: 0.5rem;
  color: white;
  font-size: 0.7rem;
  text-transform: uppercase;
}

.hd20 {
  width: auto;
  height: 70px;
  padding: 0;
  margin: 0;
  display: block;
}

/* Tablet and Desktop */

@media screen and (min-width: 620px) {
  .hd20 {
    width: auto;
    height: 100px;
    padding: 0;
    margin: 0;
    display: block;
  }

  header div {
    display: flex;
    align-items: center;
    margin-left: auto;
    height: 90px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.8);
  }
  header p {
    line-height: 1;
    text-align: center;
    transform: rotate(10deg);
    padding: 0.8rem;
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
  }
}
</style>