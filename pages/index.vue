<template>
  <div>
    <Splash />
    <Press />
    <Screenings />
    <Phil />
    <Statement />
    <Bios />
    <Credits />
  </div>
</template>

<script>
import Splash from "@/components/SplashNew.vue";
import Screenings from "@/components/Screenings.vue";
import Press from "@/components/Press.vue";
import Bios from "@/components/Bios.vue";
import Credits from "@/components/TheCredits.vue";
import Phil from "@/components/AboutPhil.vue";
import Statement from "@/components/DirectorStatement.vue";
export default {
  components: {
    Splash,
    Screenings,
    Press,
    Bios,
    Credits,
    Phil,
    Statement
  }
};
</script>
