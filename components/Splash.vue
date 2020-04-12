<template>
  <section class="main">
    <div class="title">
      <h1 class="text-shadow-pop-br">
        <span>The</span>
        <br />Walrus
        <br />
        <span>and the</span>
        <br />Whistle
        <br />Blower
      </h1>
      <h3>A Film By Nathalie Bibeau</h3>
      <button class="button" @click="showModal = true">Watch Trailer</button>
      <modal v-if="showModal" @close="showModal = false">
        <div slot="body">
          <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe
              src="https://player.vimeo.com/video/395205887?title=0&byline=0&portrait=0"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </modal>
    </div>
    <div class="laurels">
      <p>
        World premiere, Hot Docs at Home
        <br />
        <b>May 28, 2020, 8pm</b>
        <br />CBC Television and CBC Gem
      </p>
      <img class="hd20" src="~assets/images/laurel.svg" alt />
      <!--<img class="hd20" src="~assets/images/laurel.svg" alt />-->
    </div>
  </section>
</template>

<script>
import Modal from "@/components/BaseModal.vue";
export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style scoped>
section {
  background: url("~assets/images/bg_pool_full.jpg");
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
}

.main {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  text-align: center;
  padding: 2.5rem;
}

h1 {
  font-size: 3rem;
  line-height: 1;
  color: rgba(50, 118, 134, 1);
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
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
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 1.1px;
  text-align: center;
}

.button {
  margin: 2rem;
  padding: 0.5rem 1rem;
  font: normal 700 1rem/1.5 "GTWalsheim";
  background: none;
  color: white;
  border: 2px solid white;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s;
}

.button:hover {
  background: rgba(255, 213, 28, 1);
  color: rgba(49, 118, 134, 1);
}

.button:active {
  background: rgba(49, 118, 134, 1);
  color: white;
}

.hd20 {
  width: auto;
  height: 100px;
  padding: 0;
  margin: 0;
  display: block;
}

.laurels {
  display: flex;
  flex-direction: column;
}

.laurels img {
  margin: 0 1rem;
}

.laurels p {
  color: white;
  margin: 40px;
  font-size: 1.266rem;
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

@media screen and (min-width: 620px) {
  .main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    text-align: center;
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