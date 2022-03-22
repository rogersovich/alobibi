<template>
  <div class="tw-bg-white tw-px-6 tw-text-dark tw-py-4">
    <div class="tw-text-xl md:tw-text-2xl tw-font-semibold">Layanan</div>
    <div class="tw-mb-6">
      <div class="tw-text-base md:tw-text-lg tw-mb-2 tw-mt-3">
        Rekrut bibi Harian
      </div>

      <v-row>
        <v-col cols="6" md="4" v-for="(item, i) in layanan" :key="i">
          <v-card
            rounded="md"
            class="tw-shadow-card-layanan tw-flex tw-items-center"
            height="150"
            :to="{ name: 'Service', params: { service: stringToSlug(item.text) } }"
          >
            <v-card-text class="tw-text-center">
              <v-avatar tile>
                <v-icon color="#7C58BF" class="tw-text-5xl">
                  {{ item.icon }}
                </v-icon>
              </v-avatar>
              <div
                class="tw-text-dark tw-text-base md:tw-text-lg tw-mt-2 tw-font-semibold"
              >
                {{ item.text }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="tw-mb-4">
      <div class="tw-text-base md:tw-text-lg tw-mb-2 tw-mt-3">
        Rekrut bibi Bulanan
      </div>
      <div>
        <v-btn
          block
          depressed
          large
          :to="{name: 'RekrutBulanan'}"
          color="#fff"
          height="55"
          class="tw-shadow-card-layanan tw-text-dark-1 tw-font-semibold tw-text-base md:tw-text-lg text-none tw-tracking-wide"
        >
          <v-icon left color="#7C58BF" class="tw-text-4xl tw-mr-4">
            mdi-home-account
          </v-icon>
          Asisten Rumah Tangga
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layanan: [
        {
          text: "Bersih",
          icon: "mdi-broom",
        },
        {
          text: "Rapih",
          icon: "mdi-hand-clap",
        },
        {
          text: "Urus Anak",
          icon: "mdi-baby-face",
        },
        {
          text: "Bersih Rapih",
          icon: "mdi-hand-back-left",
        },
        {
          text: "Bersih Rapih Sehat",
          icon: "mdi-thumb-up",
        },
        {
          text: "Bersih Rapih Sehat & Anak",
          icon: "mdi-heart",
        },
      ],
    };
  },
  methods: {
    stringToSlug(Text) {
      return Text.toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    },
  },
};
</script>

<style></style>
