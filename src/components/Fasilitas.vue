<template>
  <div class="tw-bg-primary tw-px-4 md:tw-px-6 tw-py-10">
    <div class="tw-text-secondary tw-font-bold tw-text-2xl md:tw-text-3xl tw-text-center">
      Kenapa menggunakan Alobibi?
    </div>
    <div class="tw-mt-5">
      <v-row justify="center">
        <v-col cols="12" md="11" v-for="(item, i) in fasilitas" :key="i">
          <v-row align="center" :dense="!$vuetify.breakpoint.xsOnly">
            <v-col cols="3">
              <v-avatar color="#fff" :size="$vuetify.breakpoint.xsOnly ? 75 : 120">
                <v-img
                  contain
                  :src="item.img"
                ></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="9">
              <div class="tw-text-white">
                <div class="tw-font-bold tw-text-lg md:tw-text-xl tw-mb-2">
                  {{ item.title }}
                </div>
                <div class="tw-text-base md:tw-text-lg tw-leading-normal tw-tracking-wide">
                  {{ item.desc }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fasilitas: [
        {
          img: require("@/assets/img/aman-bergaransi.png"),
          title: "Aman & Bergaransi",
          desc: "Terhindar dari Bibi-bibi nakal yang tidak bertanggung jawab.",
        },
        {
          img: require("@/assets/img/terverifikasi.png"),
          title: "Terverifikasi",
          desc: "Semua bibi telah dikurasi dan diverivikasi secara detail oleh tim Alobibi",
        },
        {
          img: require("@/assets/img/jaminan-puas.png"),
          title: "Jaminan Puas",
          desc: "Pasti bersih, rapih dan sehat. Semua Bibi telah dibekali prosedur dan terlatih",
        },
        {
          img: require("@/assets/img/pasti-beres.png"),
          title: "Pasti Beres",
          desc: "Serahkan semua pada Alobibi, segala kebutuhan rumah pasti beres!",
        },
      ],
    };
  },
};
</script>

<style></style>
