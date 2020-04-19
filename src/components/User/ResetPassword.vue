<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <p
              style="color:#6d6e71;"
            >Please enter your email address below and we will send you information to recover your account</p>
            <v-card class="elevation-12">
              <v-toolbar style="background-color:#bf1e2e;" dark flat>
                <v-toolbar-title class="text--center">Forget Password</v-toolbar-title>

                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="resetPassword">
                  <v-text-field
                    label="Mail"
                    type="email"
                    v-model="email"
                    id="email"
                    name="email"
                    prepend-icon="mdi-email"
                    required
                  ></v-text-field>

                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      type="submit"
                      color="white--text"
                      style="background-color: #bf1e2e"
                    >Reset Password</v-btn>
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
      email: ""
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
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
    resetPassword() {
      if (this.email !== "") {
        this.$store.dispatch("resetPassword", {
          email: this.email
        });
        this.email = "";
      }
    }
  }
};
</script>
<style scoped>
#inspire {
  background: url("../../assets/logo_two.jpeg") no-repeat;
  background-size: cover;
}
</style>