<template>
  <section>
    <article>
      <div class="quote"></div>
      <div class="content">
        <p>
          <b>Phil Demers is an over 40-year-old part-time mailman</b> who lives in a bungalow across the creek from MarineLand, the iconic amusement park in Niagara Falls, where he had his dream job as an animal trainer for over a decade. He swam with killer whales and ran the show, until he quit and blew the whistle, making claims of animal abuse and calling for an end to the near 60-year-old practice of keeping marine mammals in pools.
        </p>
        <blockquote>
          <p>It's an old idea in crises.</p>
        </blockquote>
        <p>Known in the media as the @walruswhisperer, Phil has amassed 27,000 followers on Twitter, has appeared four times on the Joe Rogan show, has testified before the Canadian Senate, and is being sued for $1.5 million for plotting to steal Smooshi, the walrus.</p>

        <p>Phil and Smooshi had become an inseparable pair when she first arrived at MarineLand as a baby, and together they became a viral sensation in the early days of social media. He gave her a sense of security, she gave him a sense of purpose. Now, he's embroiled in a stranger-than-fiction custody battle to #savesmooshi.</p>
        <p>This character-driven film pierces the veneer of a media story that has been bubbling away in the filmmaker's hometown for decades, with access to her childhood acquaintance at the centre of it. We follow Phil as he champions a law to ban the captivity of whales and dolphins, faces a lawsuit entering its 8th year, and spirals around an aching loss of identity.</p>
        <blockquote>
          <p>
            I would like to think it's good vs. evil
            <br />but I know it's
            <em>asshole</em> vs.
            <em>asshole</em>.
          </p>
        </blockquote>
        <p>The Walrus and the Whistleblower is a personal tale that plays out against the swell of a paradigm shift in our relationship with animals. At its heart are questions of compassion for others, humans and animals alike, the nuances of all our stories, and the hills we are willing to die on.</p>
      </div>
    </article>
    <div class="bg"></div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  display: grid;
  grid-template-rows: 1fr auto;
}

.bg {
  background: url("~assets/images/bg_phil.webp") no-repeat;
  background-position: top;
  background-size: cover;
  height: 400px;
}

article {
  padding: 3rem;
  max-width: 700px;
  margin: 0 auto;
}

.content {
  max-width: 600px;
  font-size: 1.1rem;
}

blockquote p {
  margin: 2rem;
  font-weight: 100;
  font-size: 2.5rem;
  line-height: 1;
}

blockquote p em {
  color: #317686;
}

blockquote p:after {
  content: "-Phil Demers";
  display: block;
  font-size: 1rem;
  text-indent: 2rem;
  padding: 0.5rem;
}

/* Tablet and Desktop */

@media screen and (min-width: 620px) {
  blockquote p {
    margin: 2rem 2rem 2rem -4rem;
    font-weight: 100;
    font-size: 2.5rem;
    line-height: 1;
  }
}
</style>