<template>
  <v-app id="services">
    <v-container class="mt-8">
      <v-row>
        <v-col cols="12" sm="8" md="4">
          <h1>Yeah, we offer:</h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
          <div>
            <div style="text-align: center; margin-bottom: 20px">
              <v-icon>mdi-home</v-icon>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi molestias, nemo dicta ipsum illo autem, totam voluptate voluptates iusto in aperiam excepturi. Quasi atque fugiat eveniet obcaecati vel ad minus</p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <div>
            <div style="text-align: center; margin-bottom: 20px">
              <v-icon>mdi-home-group</v-icon>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi molestias, nemo dicta ipsum illo autem, totam voluptate voluptates iusto in aperiam excepturi. Quasi atque fugiat eveniet obcaecati vel ad minus</p>
          </div>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
          <div>
            <div style="text-align: center; margin-bottom: 20px">
              <v-icon>mdi-lighthouse</v-icon>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi molestias, nemo dicta ipsum illo autem, totam voluptate voluptates iusto in aperiam excepturi. Quasi atque fugiat eveniet obcaecati vel ad minus</p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <div>
            <div style="text-align: center; margin-bottom: 20px">
              <v-icon>mdi-warehouse</v-icon>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi molestias, nemo dicta ipsum illo autem, totam voluptate voluptates iusto in aperiam excepturi. Quasi atque fugiat eveniet obcaecati vel ad minus</p>
          </div>
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
