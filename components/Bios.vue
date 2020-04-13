<template>
  <div>
    <div class="grid">
      <div class="bg-nat box1"></div>
      <div class="content box2">
        <h3>Writer / Director / Producer</h3>
        <h5>Nathalie Bibeau</h5>
        <p>
          A franco-ontarian raised in the rust belt, now based in Montréal, Nathalie Bibeau is a director and producer of international award-winning productions. She began her career in public broadcasting, producing documentary projects such as
          <b>8th Fire</b>, nominated for the Canadian Screen Awards,
          <b>Africa on the Move</b>, which won the Gemini for Best Documentary Series, and was the Series Director for CBC’s seven-episode documentary,
          <b>Back in Time for Dinner</b>. She was a key member of the producing team for the highly-acclaimed feature film,
          <b>Sugar Coated</b> (dir: Michèle Hozer) which premiered at Hot Docs 2015, was nominated for three Canadian Screen Awards and won the Donald Brittain Award for Best Social and Political Documentary. Nathalie has written for the Globe & Mail and volunteered for War Child in Ethiopia. Her work has taken her everywhere from the sub-Arctic to Angola and the swamps of Louisiana.
          <b>The Walrus and the Whistleblower</b> is her first feature film. She went back to the rust belt to make it.
        </p>
      </div>
      <div class="content box3">
        <h3>Bunbury Films</h3>
        <h5>Frederic Bohbot, Producer</h5>
        <p>
          Executive Producer of the 2014 Academy Award-winning short documentary
          <b>The Lady in Number 6</b>, Frederic Bohbot founded Bunbury Films in 2002 as an independent producer / director intending only to make one film:
          <b>Once a Nazi...</b> completed in 2006. With much critical success, Bunbury expanded its production slate and has since produced fifteen documentaries covering history, art, sports, environment, religion and spirituality for television and theatrical audiences throughout the world. Bunbury’s first feature fiction entitled
          <b>Boost</b> received 5 Canadian Screen Award nominations winning the Best Actor award as well as 8 Quebec Cinema Award nominations.
        </p>
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