// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-vuefire"
  ],
  vuefire: {
    auth: {
      enabled: true
    },
    config: {
      apiKey: "AIzaSyBCMRmB1s0Q6NRfrDw4Cj1N9aUvVyC6y_w",
      authDomain: "test-4266b.firebaseapp.com",
      projectId: "test-4266b",
      storageBucket: "test-4266b.appspot.com",
      messagingSenderId: "55939243570",
      appId: "1:55939243570:web:9ebca58903d2eccdc0262b"
    },
  },
})
