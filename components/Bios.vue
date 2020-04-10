<template>
  <div>
    <div class="grid">
      <div class="grid-inner">
        <div class="bg-nat"></div>
        <div class="content">
          <h3>Nathalie Bibeau</h3>
          <small>Writer / Director / Producer</small>
          <p>
            A franco-ontarian raised in the rust belt, now based in Montréal, Nathalie Bibeau is a director and producer of international award-winning productions. She began her career in public broadcasting, producing documentary projects such as 8th Fire, nominated for the Canadian Screen Awards, Africa on the Move, which won the Gemini for Best Documentary Series, and was the Series Director for CBC’s seven-episode documentary, Back in Time for Dinner. She was a key member of the producing team for the highly-acclaimed feature film, Sugar Coated (dir: Michèle Hozer) which premiered at Hot Docs 2015, was nominated for three Canadian Screen Awards and won the Donald Brittain Award for Best Social and Political Documentary. Nathalie has written for the Globe & Mail and volunteered for War Child in Ethiopia. Her work has taken her everywhere from the sub-Arctic to Angola and the swamps of Louisiana.
            The Walrus and the Whistleblower is her first feature film. She went back to the rust belt to make it.
          </p>
        </div>
      </div>
      <div class="grid-inner">
        <div class="content">
          <h3>Frederic Bohbot</h3>
          <small>Producer, BUNBURY FILMS</small>
          <p>Executive Producer of the 2014 Academy Award-winning short documentary The Lady in Number 6, Frederic Bohbot founded Bunbury Films in 2002 as an independent producer / director intending only to make one film: Once a Nazi… completed in 2006. With much critical success, Bunbury expanded its production slate and has since produced fifteen documentaries covering history, art, sports, environment, religion and spirituality for television and theatrical audiences throughout the world. Bunbury’s first feature fiction entitled Boost received 5 Canadian Screen Award nominations winning the Best Actor award as well as 8 Quebec Cinema Award nominations.</p>
        </div>
        <div class="bg-fred"></div>
      </div>
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
}

.grid-inner {
  display: grid;
  grid-template-columns: 1fr;
}

img {
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: 0 0;
}

.content {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  padding: 3rem;
  max-width: 500px;
}

.container {
  height: 500px;
}

small {
  margin-bottom: 20px;
}

h3 {
  font-size: 2rem;
}
.bg-nat {
  background: url("~assets/images/bio_nat.jpg") no-repeat;
  background-size: cover;
  background-position: 0 50%;
  min-height: 600px;
}

.bg-fred {
  background: url("~assets/images/bio_fred.jpg") no-repeat;
  background-size: cover;
  background-position: 0 50%;
  min-height: 600px;
}

@media screen and (min-width: 620px) {
  .grid-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #ffd621;
  }
}
</style>