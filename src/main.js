import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as firebase from "firebase/app";
import "firebase/auth";
import store from "./store";
import vuetify from "./plugins/vuetify";
import AlertCmp from "./components/shared/Alert.vue";

Vue.config.productionTip = false;

Vue.component("alert-app", AlertCmp);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyDVLjCoJoZ8KDnPpsGLb61n56e2HUVRTkQ",
      authDomain: "portfolio-ea1e0.firebaseapp.com",
      databaseURL: "https://portfolio-ea1e0.firebaseio.com",
      projectId: "portfolio-ea1e0",
      storageBucket: "portfolio-ea1e0.appspot.com",
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch("autoSigning", user);
      }
    });
  },
}).$mount("#app");
