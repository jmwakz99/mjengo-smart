<template>
  <v-app id="contact">
    <v-container id="contact" class="mt-12">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" src="../../assets/contact.jpeg">
              <v-card-title class="white--text">Meet us</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div class="red--text">
                <div>
                  <v-icon left class="orange--text">mdi-phone</v-icon>+25428930930
                </div>
                <div>
                  <v-icon left class="orange--text">mdi-email</v-icon>test@example.com
                </div>
                <div>
                  <v-icon left class="orange--text">mdi-navigation</v-icon>Nairobi St. no 254, 4th floor
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="8" md="4"></v-col>
        <v-col cols="12" sm="8" md="4"></v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {};
</script>
<style scoped>
#contact {
  background: url("../../assets/logo_two.jpeg") no-repeat;
  background-size: cover;
}
</style>    