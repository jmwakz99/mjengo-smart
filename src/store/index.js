import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    loading: null,
    error: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    clearError({ commit }) {
      commit("clearError");
    },
    signUserUp({ commit, state }, payload) {
      commit("clearError");
      commit("setLoading", true);
      const newUser = {};

      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit("setLoading", false);
          newUser.id = user.user.uid;
          newUser.fbKeys = {};
          //  Adding a referee
          commit("setLoading", true);
          firebase
            .database()
            .ref("users")
            .push(newUser.id)
            .then((result) => {
              commit("setLoading", false);
            })
            .catch((err) => {
              commit("setError", error);
              commit("setLoading", false);
            });
          commit("setLoading", true);
          firebase
            .database()
            .ref("users")
            .once("value")
            .then((result) => {
              commit("setLoading", false);
              const users = [];
              const obj = result.val();
              for (let key in obj) {
                users.push(obj[key]);
              }
              if (users.findIndex((p) => p === payload.referralCode) >= 0) {
                newUser.referee = payload.referralCode;
              }
            })
            .catch((err) => {
              commit("setError", error);
              commit("setLoading", false);
            });
          commit("setUser", newUser);
        })
        .catch((error) => {
          commit("setLoading", false);
          commit("setError", error);
        });
    },
    async resetPassword({ commit }, payload) {
      commit("setLoading", true);
      await firebase
        .auth()
        .sendPasswordResetEmail(payload.email)
        .then((result) => {
          commit("setLoading", false);
          console.log(result);
        })
        .catch((err) => {
          commit("setError", error);
          commit("setLoading", false);
        });
    },
    async signUserIn({ commit }, payload) {
      commit("clearError");
      commit("setLoading", true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit("setLoading", false);
          const newUser = {
            id: user.user.uid,
            fbKeys: {},
          };

          commit("setUser", newUser);
        })
        .catch((error) => {
          commit("setLoading", false);
          commit("setError", error);
        });
    },

    autoSigning({ commit }, payload) {
      commit("setUser", { id: payload.uid, fbKeys: {} });
    },

    logout({ commit }, payload) {
      firebase.auth().signOut();
      commit("setUser", null);
    },
    logout({ commit }, payload) {
      firebase.auth().signOut();
      commit("setUser", null);
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
  },
});
