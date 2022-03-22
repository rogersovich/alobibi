<template>
  <div>
    <div class="tw-bg-white tw-px-4 md:tw-px-6 tw-py-4">
      <div
        class="tw-capitalize tw-font-bold tw-text-2xl md:tw-text-3xl tw-mb-6"
      >
        Rekrut Bibi Bulanan
      </div>
      <div class="tw-mb-4">
        <div class="tw-font-medium tw-text-primary tw-text-lg md:tw-text-xl">
          Deskripsi
        </div>
        <div class="tw-font-light tw-text-dark-2 tw-text-base md:tw-text-lg">
          Kami akan mencarikan pilihan Bibi terbaik, terpecaya dan tepat untuk
          kebutuhan anda. Tentunya setiap Bibi Sudah melalui proses verfikasi
          tim Alobibi, agar dapat memberikan pelayanan terbaik untuk anda.
        </div>
      </div>
      <div class="tw-mb-4">
        <div class="tw-font-medium tw-text-primary tw-text-lg md:tw-text-xl">
          Layanan yand didapat
        </div>
        <div class="tw-font-light tw-text-dark-2 tw-text-base md:tw-text-lg">
          Dapat disesuiakn kebutuhan anda
        </div>
      </div>
      <div class="tw-mb-4">
        <div class="tw-font-medium tw-text-primary tw-text-lg md:tw-text-xl">
          Estimasi Biaya
        </div>
        <div class="tw-font-light tw-text-dark-2 tw-text-base md:tw-text-lg">
          {{ `Mulai dari ${formatRupiah(100000)} / Bulan` }}
        </div>
      </div>
    </div>
    <form-layanan/>
    <footer-section />
  </div>
</template>

<script>
import FooterSection from "../../../components/FooterSection.vue";
import FormLayanan from '../../../components/FormLayanan.vue';
export default {
  components: {
    FooterSection,
    FormLayanan,
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
