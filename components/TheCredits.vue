<template>
  <section>
    <div>
      <h2>{{ $t("credit_title") }}</h2>
      <ul>
        <li v-for="credit in $t('credits')" :key="credit.role">
          {{ $t(credit.role) }}
          <br />
          <b>{{ $t(credit.name) }}</b>
        </li>
      </ul>
    </div>
    <div class="bg"></div>
  </section>
</template>

<style scoped>
section {
  padding-top: 3rem;
}

.bg {
  background: url("~assets/images/bg_credit.jpg") no-repeat;
  background-position: 50 100;
  background-size: cover;
  min-height: 500px;
}

h2 {
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 30px;
}

div {
  margin: 0 auto;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
