<template>
  <v-carousel height="auto" hide-delimiters>
    <v-carousel-item
      v-for="(item, i) in banners"
      :key="i"
      :src="item.img"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
       banners: [
        {
          img: require("@/assets/img/banner.png"),
        },
        {
          img: require("@/assets/img/banner.png"),
        },
      ],
    }
  },
};
</script>

<style></style>
