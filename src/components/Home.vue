<template>
  <v-app>
    <v-container class="mt-12" id="home">
      <v-row>
        <v-col cols="12" sm="8" md="4">
          <v-card class="mt-8 p-5" style="padding: 10px; background-color: rgba(160, 25,38, 1)">
            <v-row class="text--center">
              <v-col cols="12" sm="12" md="12">
                <h1 class="white--text">About Us</h1>
                <p
                  class="white--text"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi molestias, nemo dicta ipsum illo autem, totam voluptate voluptates iusto in aperiam excepturi. Quasi atque fugiat eveniet obcaecati vel ad minus?</p>
              </v-col>
            </v-row>
            <v-row>
              <v-btn to="/contact" text class="green--text">Meet Us</v-btn>
            </v-row>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="8"
          md="4"
          class="ml-12"
          style="color: grey"
        >This should be a video background</v-col>
      </v-row>
    </v-container>
    <Services></Services>
    <Projects></Projects>
  </v-app>
</template>  
<script>
import Services from "../components/shared/Services.vue";
import Projects from "../components/shared/Projects.vue";
export default {
  components: {
    Services,
    Projects
  }
};
</script>
<style>
#home {
  background-color: #9d9894;
  height: 450px;
}
</style>