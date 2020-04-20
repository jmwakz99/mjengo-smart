<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="mt-0" fluid>
        <v-row align="center" v-if="error">
          <v-col cols="12" md="4" class="mx-auto">
            <alert-app :text="error" @dismissed="onClear"></alert-app>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class>
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar style="background-color:#bf1e2e;" dark flat>
                <v-toolbar-title class="text--center">Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="onSignIn">
                  <v-text-field
                    label="Mail"
                    type="email"
                    v-model="email"
                    id="email"
                    name="email"
                    prepend-icon="mdi-email"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    type="password"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    id="password"
                    required
                  ></v-text-field>
                  <v-card-actions>
                    <v-btn type="submit" to="/reset" text style="color: red">Forgot Password?</v-btn>
                    <v-spacer />
                    <v-btn
                      :disabled="loading"
                      :loading="loading"
                      type="submit"
                      color="white--text"
                      style="background-color: #bf1e2e"
                    >
                      Login
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>mdi-cached</v-icon>
                        </span>
                      </template>
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onSignIn() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password
      });
    },
    onClear() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>
<style scoped>
#inspire {
  background: url("../../assets/logo_two.jpeg") no-repeat;
  background-size: cover;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>