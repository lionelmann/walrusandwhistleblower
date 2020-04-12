<template>
  <div>
    <Splash />
    <Phil />
    <Statement />
    <Bios />
    <Credits />
  </div>
</template>

<script>
import Splash from "@/components/Splash.vue";
import Bios from "@/components/Bios.vue";
import Credits from "@/components/TheCredits.vue";
import Phil from "@/components/AboutPhil.vue";
import Statement from "@/components/DirectorStatement.vue";
export default {
  components: {
    Splash,
    Bios,
    Credits,
    Phil,
    Statement
  }
};
</script>

<style scoped>
main {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
}
</style>