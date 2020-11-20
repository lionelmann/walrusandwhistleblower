<template>
  <section class="main">
    <div class="laurels">
      <img src="~assets/images/laurels/HD20_rog_aud_top_five_BLACK.png" />
      <img src="~assets/images/laurels/HSDFF_2020_laurels.png" />
      <img src="~assets/images/laurels/Innsbruck_laurels.png" />
      <img src="~assets/images/laurels/DOXA2020_officialselection.png" />
      <img src="~assets/images/laurels/fridayharbor_laurels.png" />
      <img src="~assets/images/laurels/forestcity_bestdoc.png" />
      <img src="~assets/images/laurels/melbourne_laurels.png" />
      <img src="~assets/images/laurels/calgary_laurels.png" />
      <img src="~assets/images/laurels/buffalo_laurels.png" />
      <img
        src="~assets/images/laurels/FIN_Stream-2020-Laurels-Official_Selection.png"
      />
      <img src="~assets/images/laurels/2020-TGHFF-Laurel_eng.png" />

      <img
        src="~assets/images/laurels/DOCNYC20_Laurels_WinnersCircle_RGBBlack.png"
      />
      <br />
      <img src="~assets/images/laurels/HD20_aud_award.png" />
    </div>
    <div>
      <h3>
        <span>{{ $t("splash.sub") }}</span> <br />Nathalie Bibeau
      </h3>
      <h1 v-html="$t('splash.title')"></h1>
      <button class="button" @click="showModal = true">
        {{ $t("splash.watch") }}
      </button>
    </div>
    <modal v-if="showModal" @close="showModal = false">
      <div slot="body">
        <div style="padding:56.25% 0 0 0;position:relative;">
          <iframe
            src="https://player.vimeo.com/video/445245232?title=0&byline=0&portrait=0&autoplay=1"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </modal>
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
/* Mobile First */

section {
  background: url("~assets/images/poster-rsz.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  height: 2000px;
  width: 100%;
}

.main {
  display: grid;
  grid-template-columns: 1fr;
  /*grid-template-rows: 370px auto;*/
  grid-template-rows: 190px auto;
  text-align: center;
  padding-top: 70px;
}

h1 {
  color: rgba(237, 27, 36, 1);
  font: normal normal 5rem/1 "Impact";
  text-transform: uppercase;
  text-align: center;
  margin: 30px 0;
}

/*h1 span {
  color: black;
  font-size: 1.8rem;
  font-weight: 300;
  display: block;
  margin-bottom: -80px;
}*/

h3 {
  color: black;
  font: normal 100 2rem/1.1 "Impact";
  text-transform: uppercase;
  text-align: center;
}

h3 span {
  font: normal 100 1.6rem/1 "Impact";
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
  margin: 0 auto;
  padding: 2rem;
}

.laurels img {
  display: none;
  padding: 15px;
  width: auto;
  height: 90px;
}

.laurels img:last-child {
  display: inline-block;
  height: 120px;
}

@media screen and (min-width: 1024px) {
  .main {
    grid-template-rows: 370px auto;
  }

  .laurels img {
    display: inline-block;
    padding: 15px;
    width: auto;
    height: 90px;
  }

  h1 {
    font-size: 8.202rem;
    line-height: 1;
  }

  h1 span {
    font-size: 3.266rem;
    margin-bottom: -125px;
  }
}
</style>
