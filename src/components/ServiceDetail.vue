<template>
  <div class="tw-bg-white tw-px-4 md:tw-px-6 tw-py-4">
    <div class="tw-capitalize tw-font-bold tw-text-2xl md:tw-text-3xl tw-mb-6">
      {{ `${layanan.title}` }}
    </div>
    <div class="tw-mb-4">
      <div class="tw-font-medium tw-text-primary tw-text-lg md:tw-text-xl">
        Deskripsi
      </div>
      <div class="tw-font-light tw-text-dark-2 tw-text-base md:tw-text-lg">
        {{ layanan.desc }}
      </div>
    </div>
    <div class="tw-mb-4">
      <div class="tw-font-medium tw-text-primary tw-text-lg md:tw-text-xl">
        Layanan yand didapat
      </div>
      <v-list class="">
        <v-list-item
          v-for="(item, i) in layanan.get_layanan"
          :key="i"
          class="tw-border tw-border-solid tw-border-dark-2 tw-rounded tw-mb-2"
        >
          <v-list-item-content>
            <v-list-item-title
              class="tw-text-dark-2 tw-text-base md:tw-text-lg"
            >
              {{ item }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <div class="tw-mb-4">
      <div class="tw-font-medium tw-text-primary tw-text-lg md:tw-text-xl">
        Estimasi Biaya
      </div>
      <div class="tw-font-light tw-text-dark-2 tw-text-base md:tw-text-lg">
        {{ `Mulai dari ${formatRupiah(layanan.estimasi_biaya)}` }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    layanan: {
      type: Object,
      default: () => {}
    },
  },
  methods: {
    formatRupiah(uang) {
      const rupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(uang);
      return rupiah;
    },
  },
};
</script>

<style></style>
