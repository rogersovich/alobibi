<template>
  <div>
    <banner-hero />
    <layanan />
    <fasilitas/>
    <persentase/>
    <help-center/>
    <footer-section/>
  </div>
</template>

<script>
import BannerHero from "../../components/BannerHero.vue";
import Fasilitas from '../../components/Fasilitas.vue';
import FooterSection from '../../components/FooterSection.vue';
import HelpCenter from '../../components/HelpCenter.vue';
import Layanan from "../../components/Layanan.vue";
import Persentase from '../../components/Persentase.vue';
export default {
  components: { Layanan, BannerHero, Fasilitas, Persentase, HelpCenter, FooterSection },
  data() {
    return {};
  },
};
</script>

<style></style>
