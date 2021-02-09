<template>
  <v-container>
    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      bottom
      :color="snackbarColor"
    >
      <span>{{ snackbarMsg }}</span>
      <v-btn text color="white" @click="snackbar = false">X</v-btn>
    </v-snackbar>
    <v-card flat>
      <v-row>
        <v-col v-for="car in cars" :key="car.mileage" cols="12" md="3" sm="3">
          <v-card class="mx-auto my-5" max-width="374" height="350">
            <v-img height="150" :src="car.imageUrl" />
            <v-card-title>{{ car.vehicle }}</v-card-title>
            <v-card-text>
              <div>
                {{ car.year }}
              </div>
              <div>Mileage: {{ car.mileage }} HP</div>
              <div>Price: {{ car.sellingPrice }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      api: "http://localhost:3000",
      cars: [],
      snackbar: false,
      snackbarMsg: "",
      snackbarColor: "error",
    };
  },
  mounted() {
    this.getCars();
  },
  methods: {
    getCars() {
      axios
        .get(`${this.api}/api/cars`)
        .then((response) => {
          this.cars = response.data;
        })
        .catch((e) => {
          console.log(e);
          this.snackbarMsg = "Erreur interne";
          this.snackbar = true;
          this.snackbarColor = "error";
        })
        .finally(() => {});
    },
  },
};
</script>