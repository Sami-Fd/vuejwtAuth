<template>
  <div>
    <v-app-bar flat>
      <v-toolbar-title>Cars Showroom</v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-if="user.email">
        <span class="px-5">Welcome {{ user.email }}</span>
        <v-btn text @click="logout"> Logout </v-btn>
      </div>
      <div v-else-if="!user.email">
        <v-btn text to="/login"> Login </v-btn>
        <v-btn text to="/signup"> Sign up </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      api: "http://localhost:3000/api",
      user: {},
    };
  },
  created() {
    this.user = this.getUser();
    console.log("userNav: ", this.user.email);
  },
  methods: {
    ...mapGetters(["getUser"]),
    logout() {
      axios
        .get(`${this.api}/logout`)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log("error", e);
        });
    },
  },
};
</script>