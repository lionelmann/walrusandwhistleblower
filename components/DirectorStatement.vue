<template>
  <section>
    <article>
      <h2>Director's Statement</h2>
      <div class="two-columns">
        <p>
          <b>Phil is a childhood acquaintance.</b> When we were growing up, he and my brother smoked pot in my parents’ backyard and squeaked through high school. He was always a smart ass with a quick tongue, but there was no indication he would later hone a voice on Twitter so visceral it would attract celebrities and affect the course of legislation.
        </p>
        <p>As a journalist and storyteller, I have been watching his story roll out online for over a decade. I was working as a producer at the CBC when I first saw him make headlines as a mother figure to a walrus named Smooshi. He was working as an animal trainer at MarineLand, a giant amusement park in our hometown’s backyard, a place my parents loved to take me as a kid.</p>

        <blockquote>
          <p>Everyone I knew, it seemed, loved MarineLand.</p>
        </blockquote>
        <p>At the time, there were a handful of protesters outside the gates, but they were perceived by locals to be marginal characters in a sidelined conversation that didn’t relate to the rest of us.</p>

        <p>The summer Phil broke news as a whistleblower, and the protests exploded, I had just left my job to make independent films. It was a huge story, and I was shocked. Suddenly, the kid who didn’t seem to care about much at all when we were growing up was taking on one of the brightest legacies in the region that had put us on the tourist map.</p>
        <p>It took me a long time to decide to make this film. Years, in fact. I kept an eye on the story, but it felt too close to home and the risk was great. I had heard about the lawsuits launched against whistleblowers and the media, I still thought of Phil as an adolescent shit disturber, and I had happy memories of MarineLand.</p>
        <p>But as time passed, I felt the paradigm shift around the issue. My questions grew louder, and I realized that what was keeping me from telling the story were the very reasons I needed to do it.</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Mobile First */
section {
  background-color: #632b30;
  background-color: rgb(49, 118, 134);
  padding: 3rem 3rem 5rem 3rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.3;
  margin-bottom: 18px;
}

blockquote p {
  font-size: 2.2rem;
  line-height: 1;
  font-weight: 200;
  padding: 1rem 1rem;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.31);
}

article {
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 1366px;
}

h2 {
  color: #ffd51c;
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 3px 3px 7px rgba(0, 0, 0, 0.31);
}

.two-columns {
  column-count: 1;
}

@media screen and (min-width: 720px) {
  .two-columns {
    column-count: 2;
    column-gap: 60px;
  }
  h2 {
    font-size: 4rem;
  }
}
</style>