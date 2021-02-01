<template>
  <v-app>
    <Navbar />
    <v-content class="my-5">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>


