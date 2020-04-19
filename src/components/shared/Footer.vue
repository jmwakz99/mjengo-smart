<template>
  <v-container id="footer" fluid>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <p
          style="color: red; text-align: center; margin-top: 90px; margin-bottom: 0"
        >Copyright &copy; {{ date }} Mjengo Smart</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  computed: {
    date() {
      return new Date().getFullYear();
    }
  }
};
</script>
<style scoped>
#footer {
  background-color: black;
  height: 150px;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>    