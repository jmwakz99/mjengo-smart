<template>
  <v-app>
    <v-container id="news" class="mt-12">
      <v-carousel :show-arrows="false">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" md="3">
          <div class="update">
            <p style="font-size: 16px">News One Update</p>
          </div>
        </v-col>
        <v-col cols="12" sm="8" md="3">
          <div class="update">
            <p style="font-size: 16px">News Two Update</p>
          </div>
        </v-col>
        <v-col cols="12" sm="8" md="3">
          <div class="update">
            <p style="font-size: 16px">News Three Update</p>
          </div>
        </v-col>
        <v-col cols="12" sm="8" md="3">
          <div class="update">
            <p style="font-size: 16px">News Four Update</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../../assets/contact.jpeg"),
          title: "News update title one"
        },
        {
          src: require("../../assets/contact.jpeg"),
          title: "News update title two"
        },
        {
          src: require("../../assets/contact.jpeg"),
          title: "News update title three"
        },
        {
          src: require("../../assets/contact.jpeg"),
          title: "News update title four"
        }
      ]
    };
  }
};
</script>
<style scoped>
#news {
  background: url("../../assets/logo_two.jpeg") no-repeat;
  background-size: cover;
  height: 600px;
}
.update {
  background-color: #6d6e71;
  padding: 1em;
  color: red;
  box-shadow: 2px 2px #6d6e71;
}
.update:hover {
  background-color: grey;
  color: white;
  cursor: pointer;
}
</style>    