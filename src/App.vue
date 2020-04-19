<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-list-item link v-for="menu in navigationItems" :key="menu.link" :to="menu.link">
          <v-list-item-action></v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{menu.menu}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="onLogout" v-if="isUserAuthenticated">
          <v-list-item-action></v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" color="red" />
      <v-toolbar-title>
        <v-img src="logo.jpeg" height="48" width="100" style="cursor: pointer" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        class="hidden-sm-and-down"
        :to="menu.link"
        style="color: #bf1e2e"
        text
        v-for="menu in navigationItems"
        :key="menu.link"
        color="orange--text"
      >{{menu.menu}}</v-btn>
      <v-btn
        v-if="isUserAuthenticated"
        text
        @click="onLogout"
        class="hidden-sm-and-down red--text"
      >Logout</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <div>
      <Footer></Footer>
    </div>
  </v-app>
</template>

<script>
import Footer from "./components/shared/Footer.vue";
export default {
  props: {
    source: String
  },
  components: {
    Footer
  },
  data: () => ({
    drawer: false

    // menuItems: [
    //   { link: "/", menu: "Home" },
    //   { link: "/news", menu: "News Update" },
    //   { link: "/contact", menu: "Contact" },
    //   { link: "/signup", menu: "Sign Up" },
    //   { link: "/signin", menu: "Sign In" }
    // ]
  }),
  computed: {
    navigationItems() {
      let menuItems = [];
      if (this.isUserAuthenticated) {
        menuItems = [
          { link: "/", menu: "Home" },
          { link: "/news", menu: "News Update" },
          { link: "/contact", menu: "Contact" }
        ];
      } else {
        menuItems = [
          { link: "/", menu: "Home" },
          { link: "/news", menu: "News Update" },
          { link: "/contact", menu: "Contact" },
          { link: "/signup", menu: "Sign Up" },
          { link: "/signin", menu: "Sign In" }
        ];
      }
      return menuItems;
    },
    isUserAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/signin");
    }
  }
};
</script>