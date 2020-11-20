<template>
  <div>
    <div class="grid">
      <div class="bg-nat box1"></div>
      <div class="content box2">
        <h3 v-html="$t('bios.nat.role')"></h3>
        <h5 v-html="$t('bios.nat.name')"></h5>
        <p v-html="$t('bios.nat.bio')"></p>
      </div>
      <div class="content box3">
        <h3 v-html="$t('bios.fred.role')"></h3>
        <h5 v-html="$t('bios.fred.name')"></h5>
        <p v-html="$t('bios.fred.bio')"></p>
      </div>
      <div class="bg-fred box4"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Mobile First */

.grid {
  display: grid;
  grid-template-columns: 1fr;
  background-color: #ffd621;
}

.box1 {
  grid-row-start: 1;
  grid-row-end: 2;
}

.box2 {
  grid-row-start: 2;
  grid-row-end: 3;
}

.box4 {
  grid-row-start: 3;
  grid-row-end: 4;
}

.content {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  padding: 3rem;
}

h5 {
  margin-bottom: 1.5rem;
}

.bg-nat {
  background: url("~assets/images/bio_nat.jpg") no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  min-height: 500px;
}

.bg-fred {
  background: url("~assets/images/bio_fred.jpg") no-repeat;
  background-size: cover;
  background-position: 50% 30%;
  min-height: 500px;
}

@media screen and (min-width: 620px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .box1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row: 1;
  }

  .box2 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row: 1;
  }

  .box3 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row: 2;
  }

  .box4 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row: 2;
  }
}
</style>
