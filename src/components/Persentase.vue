<template>
  <div class="tw-bg-white tw-px-4 md:tw-px-6 tw-py-8">
    <div class="tw-text-xl md:tw-text-2xl tw-font-bold">Alobibi, telah…</div>
    <div class="tw-my-6">
      <v-row>
        <v-col cols="12" v-for="(item, i) in persentase" :key="i">
          <v-row align="center" :dense="$vuetify.breakpoint.xsOnly">
            <v-col cols="2" md="2">
              <v-avatar color="#fff" :size="$vuetify.breakpoint.xsOnly ? 50 : 70">
                <v-icon color="#7C58BF" class="tw-text-4xl md:tw-text-5xl">
                  {{ item.icon }}
                </v-icon>
              </v-avatar>
            </v-col>
            <v-col cols="5" md="4">
              <div class="tw-text-dark tw-text-lg md:tw-text-xl tw-font-semibold">
                {{ item.title }}
              </div>
            </v-col>
            <v-col cols="5" md="6">
              <div class="tw-border-2 tw-border-solid tw-border-primary tw-py-2 md:tw-py-3 tw-rounded">
                <div class="tw-text-2xl md:tw-text-3xl tw-text-primary tw-font-bold tw-text-center">
                  {{ `${item.value}+` }}
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
      persentase: [
        {
          icon: 'mdi-account-plus',
          title: 'Bibi Terdaftar',
          value: 20
        },
        {
          icon: 'mdi-silverware-clean',
          title: 'Melayani Harian',
          value: 100
        },
        {
          icon: 'mdi-calendar-month',
          title: 'Direkrut Bulanan',
          value: 4
        },
      ]
    }
  },
};
</script>

<style></style>
