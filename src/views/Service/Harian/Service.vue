<template>
  <div>
    <div>
      <v-img
        :src="layanan.thumbnail"
        :lazy-src="layanan.thumbnail"
        :aspect-ratio="2.35 / 1"
      ></v-img>
    </div>
    <service-detail :layanan="layanan" />
    <form-layanan/>
    <footer-section/>
  </div>
</template>

<script>
import FooterSection from '../../../components/FooterSection.vue';
import FormLayanan from '../../../components/FormLayanan.vue';
import ServiceDetail from "../../../components/ServiceDetail.vue";
export default {
  components: { ServiceDetail, FormLayanan, FooterSection },
  computed: {
    layanan_type() {
      return this.$route.params.service;
    },
    layanan() {
      let value = this.$store.state.layanan.find(
        (x) => x.key === this.layanan_type
      );
      return value;
    },
  },
};
</script>

<style></style>
