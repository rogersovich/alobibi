<template>
  <div class="tw-bg-primary tw-px-4 md:tw-px-6 tw-py-8">
    <div
      class="tw-text-white tw-font-semibold tw-text-lg md:tw-text-xl tw-mb-6"
    >
      Pesan Layanan
    </div>
    <div class="tw-text-white">
      <div>
        <div class="tw-text-base">Nama Lengkap</div>
        <div class="tw-mt-2">
          <v-text-field
            solo
            placeholder="Name"
            v-model="form.name"
          ></v-text-field>
        </div>
      </div>
      <div>
        <div class="tw-text-base">Email</div>
        <div class="tw-mt-2">
          <v-text-field
            solo
            placeholder="Email"
            v-model="form.email"
          ></v-text-field>
        </div>
      </div>
      <div>
        <div class="tw-text-base">No.Whatsapp</div>
        <div class="tw-mt-2">
          <v-text-field
            solo
            placeholder="62837282992"
            v-model="form.no_whatsapp"
          ></v-text-field>
        </div>
      </div>
      <div>
        <div class="tw-text-base">Kota/Kab</div>
        <div class="tw-mt-2">
          <v-autocomplete
            solo
            :items="list.city"
            item-text="text"
            item-value="value"
            placeholder="Pilih Kota/Kab"
            v-model="form.city"
          ></v-autocomplete>
        </div>
      </div>
      <div>
        <div class="tw-text-base">Kecamatan</div>
        <div class="tw-mt-2">
           <v-autocomplete
            solo
            :items="list.district"
            item-text="text"
            item-value="value"
            placeholder="Pilih Kecamatan"
            v-model="form.district"
          ></v-autocomplete>
        </div>
      </div>
      <div>
        <div class="tw-text-base">Alamat Lengkap</div>
        <div class="tw-mt-2">
          <v-textarea
            solo
            placeholder="Jl. Manggis 3 No. 17"
            rows="4"
            v-model="form.address"
          ></v-textarea>
        </div>
      </div>
      <div>
        <div class="tw-text-base">Catatan Tambahan</div>
        <div class="tw-mt-2">
          <v-textarea
            solo
            placeholder="Tinggalkan catatan tambahan untuk tim Alobibi"
            rows="4"
            v-model="form.notes"
          ></v-textarea>
        </div>
      </div>
      <div>
        <v-btn depressed color="#FCCB0B" x-large block @click="handleSubmit"> Pesan Layanan </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        no_whatsapp: "",
        city: "",
        district: "",
        address: "",
        notes: "",
      },
      list: {
        city: [
          {
            text: "Kota Bogor",
            value: "kota bogor",
          },
          {
            text: "Kab. Bogor",
            value: "kabupaten bogor",
          },
        ],
        district: [
          {
            text: "Bogor utara",
            value: "bogor utara",
          },
          {
            text: "Bogor barat",
            value: "bogor barat",
          },
          {
            text: "Bogor tengah",
            value: "bogor tengah",
          },
          {
            text: "Bogor timur",
            value: "bogor timur",
          },
        ]
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.form)
    }
  },
};
</script>

<style scoped>
*
  >>> .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none !important;
}
</style>
