<template>
  <footer>
    <div class="grid">
      <img src="~assets/images/logo_doc-channel.png" alt />
      <img src="~assets/images/logo_bunbury.png" alt />
      <img src="~assets/images/logo_cbc-colour.png" alt />
      <img src="~assets/images/logo_media.png" alt />
      <img src="~assets/images/logo_canadian-film-or-video-tax-credit.png" alt />
    </div>
    <div class="grid">
      Press inquiries: Clutch, Daniela Kelloway,
      <a
        href="mailto:daniela@clutchpr.com"
      >daniela@clutchpr.com</a>,
      <a href="tel:416 319 3511">416 319 3511</a>
      General contact:
      <a
        href="mailto:walrusandwhistleblower@gmail.com"
      >walrusandwhistleblower@gmail.com</a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-color: #317686;
  font-size: 0.9rem;
  padding: 1.3rem;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: auto;
  height: 50px;
  margin: 1rem;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

a {
  text-decoration: none;
  border-bottom: 1px solid white;
}

a:hover {
  border-bottom: none;
}
</style>