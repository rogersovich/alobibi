<template>
  <v-app>
    <v-row
      justify="center"
      no-gutters
      class="tw-bg-gray-100 tw-font-poppins tw-relative tw-flex"
    >
      <v-col cols="12" sm="8" class="tw-relative">
        <v-app-bar
          color="#7C58BF"
          flat
          dense
          dark
          height="80"
          class="tw-sticky tw-z-20 tw-top-0 tw-block"
        >
          <div v-if="meta_type === 'detail'">
            <v-btn icon exact :to="{ name: 'Home' }">
              <v-icon color="#fff" class="tw-text-4xl">
                mdi-arrow-left-circle
              </v-icon>
            </v-btn>
          </div>
          <v-spacer v-if="meta_type === 'detail'"></v-spacer>
          <div>
            <v-img
              :src="require('@/assets/img/logo.png')"
              contain
              width="140"
              :aspect-ratio="16 / 9"
            ></v-img>
          </div>
          <v-spacer></v-spacer>
          <div>
            <v-btn
              tile
              small
              height="50"
              @click="show_nav = !show_nav"
              depressed
              color="rgba(0,0,0,.1)"
            >
              <v-icon class="tw-text-3xl"> mdi-menu </v-icon>
            </v-btn>
          </div>
        </v-app-bar>

        <v-expand-transition>
          <div
            class="tw-sticky tw-top-20 tw-z-20 tw-w-full tw-left-0"
            v-if="show_nav"
          >
            <v-list class="tw-shadow-sm">
              <v-list-item-group v-model="navigation" mandatory>
                <v-list-item
                  v-for="(item, i) in navigations"
                  :key="i"
                  :value="item.value"
                  color="#7C58BF"
                >
                  <v-list-item-content>
                    <v-list-item-title class="tw-uppercase tw-font-medium">
                      {{ item.text }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </v-expand-transition>
        <v-main>
          <router-view></router-view>
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      show_nav: false,
      navigation: "home",
      navigations: [
        {
          value: "home",
          text: "home",
        },
        {
          value: "tentang",
          text: "tentang",
        },
        {
          value: "kontak",
          text: "kontak",
        },
        {
          value: "login-or-regis",
          text: "Login/Register",
        },
      ],
    };
  },
  computed: {
    meta_type() {
      return this.$route.meta.type;
    },
  },
};
</script>

<style></style>
