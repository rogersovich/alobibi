import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layanan: [
      {
        key: 'bersih',
        title: 'Paket Bersih',
        thumbnail: require("@/assets/img/paket-bersih.png"),
        desc: 'Paket layanan Bersih-bersih rumah.',
        get_layanan: [
          'Ngepel',
          'Nyapu',
          'Bersih - bersih',
          'Nyuci Piring',
        ],
        estimasi_biaya: 90000,
      },
      {
        key: 'rapih',
        title: 'Paket Rapih',
        thumbnail: require("@/assets/img/paket-rapih.png"),
        desc: 'Paket layanan merapihkan rumah.',
        get_layanan: [
          'Nyuci Baju',
          'Nyetrika',
        ],
        estimasi_biaya: 70000,
      },
      {
        key: 'urus-anak',
        title: 'Paket Mengurus Anak',
        thumbnail: require("@/assets/img/urus-anak.png"),
        desc: 'Membantu mengurus anak.',
        get_layanan: [
          'Urus Anak',
          'Mandiin',
          'Makan + Suapin',
          'Ajak Main',
        ],
        estimasi_biaya: 120000,
      },
      {
        key: 'bersih-rapih-sehat--anak',
        title: 'Paket Bersih, Rapih, Sehat & Urus anak',
        thumbnail: require("@/assets/img/Bersih-Rapih-sehat-dan-anak.png"),
        desc: 'Memberikan layanan membersihkan, merapohkan serta membuatkan masakan dan mengurus anak.',
        get_layanan: [
          'Ngepel',
          'Nyapu',
          'Bersih - bersih',
          'Nyuci Piring',
          'Nyuci Baju',
          'Nyetrika',
          'Masak',
          'Urus Anak',
        ],
        estimasi_biaya: 90000,
      },
      {
        key: 'bersih-rapih-sehat',
        title: 'Paket Bersih Rapih dan Sehat',
        thumbnail: require("@/assets/img/Bersih-Rapih-sehat.png"),
        desc: 'Paket membersihkan, merapihkan dan membuat masakan yang sehat.',
        get_layanan: [
          'Ngepel',
          'Nyapu',
          'Bersih - bersih',
          'Nyuci Piring',
          'Nyuci Baju',
          'Nyetrika',
          'Masak',
        ],
        estimasi_biaya: 150000,
      },
      {
        key: 'bersih-rapih',
        title: 'Paket Bersih Rapih',
        thumbnail: require("@/assets/img/Bersih-Rapih.png"),
        desc: 'Paket layanan Membersihkan dan merapihkan Rumah.',
        get_layanan: [
          'Ngepel',
          'Nyapu',
          'Bersih - bersih',
          'Nyuci Piring',
          'Nyuci Baju',
          'Nyetrika',
        ],
        estimasi_biaya: 120000,
      },
    ],
  },
  mutations: {
    
    // SET_NOTIF_COUNT(state, payload) {
    //   state.notif.count = payload.count;
    // },
  },
  actions: {
    
    // setOauthTwitter({ commit }, payload) {
    //   commit("SET_OAUTH_TWITTER", payload);
    // },
  
  },
  // modules: { auth },
  plugins: [
    createPersistedState({
      key: "alobibi",
      paths: [
        "layanan",
      ],
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 1 }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
});
