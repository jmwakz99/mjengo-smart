<template>
  <v-app id="services">
    <v-container>
      <v-row>
        <!-- align="center" justify="center" -->
        <v-col cols="4" sm="6" md="4">
          <div id="brush">
            <v-icon>mdi-brush</v-icon>
          </div>
        </v-col>
        <v-col cols="4" sm="6" md="12">
          <h1>Projects</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" src="../../assets/contact.jpeg">
              <v-card-title>Project One</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--danger">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" src="../../assets/contact.jpeg">
              <v-card-title>Project Two</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--danger">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="6">
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" src="../../assets/contact.jpeg">
              <v-card-title>Project Three</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--danger">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" src="../../assets/contact.jpeg">
              <v-card-title>Project four</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--danger">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  }
};
</script>
<style scoped>
#brush {
  height: 40px;
  background-color: #bf1e2e;
  width: 40px;
  text-align: center;
  padding: 5px;
}
</style>
