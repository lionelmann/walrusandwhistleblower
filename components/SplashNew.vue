<template>
  <section class="main"></section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Mobile First */

section {
  background: url("~assets/images/poster-min.jpg") no-repeat;
  background-position: top;
  background-size: 100% 700px;
  height: 700px;
  width: 100%;
}

.main {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  text-align: center;
  padding: 7rem 0 0 0;
}

h1 {
  color: rgba(50, 118, 134, 1);
  font-size: 3rem;
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
}

h1 span {
  font-size: 1rem;
  font-weight: 300;
  display: block;
  margin-bottom: -45px;
}

h3 {
  color: rgba(255, 255, 255, 1);
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
}

.button {
  color: white;
  cursor: pointer;
  background: none;
  border: 2px solid rgba(255, 255, 255, 1);
  font: normal 700 1rem/1.5 "GTWalsheim";
  margin: 1rem 0 0 0;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  transition: background 0.3s;
}

.button:hover {
  color: rgba(49, 118, 134, 1);
  background: rgba(255, 213, 28, 1);
}

.button:active {
  color: rgba(255, 255, 255, 1);
  background: rgba(49, 118, 134, 1);
}

.laurels {
  display: flex;
  flex-direction: column;
}

.laurels img {
  display: block;
  padding: 0;
  margin: 1rem 0 0 0;
  width: auto;
  height: 40px;
}

.laurels p {
  color: rgba(255, 255, 255, 1);
  font-size: 1rem;
  text-align: left;
  padding: 0 20px;
}

.laurels p a {
  color: white;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}

.laurels p a:hover {
  border-bottom: 1px solid rgba(255, 255, 255, 1);
}

@-webkit-keyframes text-shadow-pop-br {
  0% {
    text-shadow: 0 0 rgba(255, 255, 255, 0.6), 0 0 rgba(255, 255, 255, 0.6);
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: 1px 1px rgba(255, 255, 255, 0.5),
      2px 2px rgba(255, 255, 255, 0.6);
    -webkit-transform: translateX(-2px) translateY(-2px);
    transform: translateX(-1px) translateY(-1px);
  }
}
@keyframes text-shadow-pop-br {
  0% {
    text-shadow: 0 0 rgba(255, 255, 255, 0.6), 0 0 rgba(255, 255, 255, 0.6);
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: 1px 1px rgba(255, 255, 255, 0.6),
      2px 2px rgba(255, 255, 255, 0.6);
    -webkit-transform: translateX(-2px) translateY(-2px);
    transform: translateX(-2px) translateY(-2px);
  }
}

.text-shadow-pop-br {
  -webkit-animation: text-shadow-pop-br 4s both;
  animation: text-shadow-pop-br 4s both;
}

@media screen and (min-width: 770px) {
  .main {
    grid-template-columns: repeat(3, 1fr);
    padding: 2.5rem;
  }

  .main .title {
    grid-column: 1;
  }

  .main .laurels {
    grid-column: 3;
  }

  h1 {
    font-size: 5.202rem;
    line-height: 1;
  }

  h1 span {
    font-size: 1.266rem;
    margin-bottom: -75px;
    text-shadow: 1px 1px rgba(255, 255, 255, 0.4);
  }

  h3 {
    font-size: 1.602rem;
  }

  .laurels img {
    margin: 1rem 0 0 0;
    width: auto;
    height: 100px;
  }

  .laurels p {
    color: rgba(255, 255, 255, 1);
    font-size: 1.2rem;
    padding: 0;
  }
}

@media screen and (min-width: 1420px) {
  h1 {
    font-size: 6rem;
    line-height: 1;
  }
}

@media screen and (min-width: 1720px) {
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
