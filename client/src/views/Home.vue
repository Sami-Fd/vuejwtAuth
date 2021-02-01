<template>
  <v-card flat class="sp">
    <v-row class="sp d-flex justify-center align-center">
      <v-col cols="12" md="8" sm="8" class="pl-15">
        <h1>Cars Showroom</h1>
        <p>By Car Lover</p>
        <v-btn color="#A9A5BB" to="/cars">Visit Showroom</v-btn>
        <v-img src="../../public/car.png" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
// @ is an alias to /src
//import axios from "axios";
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style>
.sp {
  height: 100%;
}
</style>