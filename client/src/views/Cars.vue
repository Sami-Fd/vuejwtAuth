<template>
  <v-container>
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
export default {
  data() {
    return {
      cars: [
        {
          vehicle: "BMW 116i (E87)",
          color: "White",
          sellingPrice: "R 120 000,00",
          year: 2014,
          mileage: 175640,
          imageUrl:
            "https://amcdn.co.za/cars/bmw-1-series-116i-5-door-exclusive-2011-id-53210078-type-main.jpg?width=800",
          description: "Enter vehicle description here",
        },
        {
          vehicle: "VOLKSWAGEN GOLF VI 1.4 TSi COMFORTLINE",
          color: "White",
          sellingPrice: "R 359 999,99",
          year: 2018,
          mileage: 70020,
          imageUrl:
            "https://amcdn.co.za/cars/vw-golf-vi-1-4-tsi-comfortline-dsg-id-50093544-type-main.jpg?width=800",
          description: "Enter vehicle description here",
        },
        {
          vehicle: "KIA RIO 1.4 5DR",
          color: "White",
          sellingPrice: "R 150 000,00",
          year: 2017,
          mileage: 64880,
          imageUrl:
            "https://apex4-production.s3.eu-west-1.amazonaws.com/tenant_3fd34c9d-07c2-4832-9600-eb2699b8208d/media/87398/conversions/medium.jpg",
          description: "Enter vehicle description here",
        },
        {
          vehicle: "FORD FIESTA 1.4i AMBIENTE 5Dr",
          color: "Silver",
          sellingPrice: "R 124 999,99",
          year: 2015,
          mileage: 102558,
          imageUrl:
            "https://storage.googleapis.com/cdn.callacar.co.za/vehicles/used/640/044514299316/1/044514299316-1.jpg?973",
          description: "Enter vehicle description here",
        },
        {
          vehicle: "HYUNDAI ELANTRA 1.6 GLS/PREMIUM",
          color: "Silver",
          sellingPrice: "R 194 999,99",
          year: 2014,
          mileage: 66400,
          imageUrl:
            "https://img-ik.cars.co.za/legacy//uploads/2014/10/tr:n-news_large/DSC_5162.jpg",
          description: "Enter vehicle description here",
        },
        {
          vehicle: "VOLKSWAGEN POLO 1.4 COMFORTLINE 5DR",
          color: "White",
          sellingPrice: "R 180 000,00",
          year: 2017,
          mileage: 89750,
          imageUrl:
            "https://dealercontrol.co.za/cars-for-sale/RTM/1512/VOLKSWAGEN-POLO_1_4_COMFORTLINE_5DR-89500.jpg",
          description: "Enter vehicle description here",
        },
        {
          vehicle: "CHEVROLET SONIC 1.6 LS 5DR",
          color: "White",
          sellingPrice: "R 120 000,00",
          year: 2017,
          mileage: 173200,
          imageUrl:
            "https://img-ik.cars.co.za/carsimages/tr:n-stock_large/5202651.jpg?v=3245173779",
          description: "Enter vehicle description here",
        },
        {
          vehicle: "AUDI A3 1.8 T",
          color: "Silver",
          sellingPrice: "R 260 000,00",
          year: 2019,
          mileage: 5400,
          imageUrl:
            "https://amcdn.co.za/cars/audi-a3-1-8t-hatchback-2012-id-33868700-type-main.jpg?width=800",
          description: "Enter vehicle description here",
        },
        {
          vehicle: "CHEVROLET AVEO 1.5 LS A/T",
          color: "Black",
          sellingPrice: "R 100 000,00",
          year: 2017,
          mileage: 75000,
          imageUrl:
            "https://img-ik.cars.co.za/carsimages/tr:n-stock_med/5230683.jpg?v=3351304038",
          description: "Enter vehicle description here",
        },
        {
          vehicle: "OPEL CORSA 1.0T ECOFLEX ESSENTIA 5DR",
          color: "Yellow",
          sellingPrice: "R 135 999,99",
          year: 2016,
          mileage: 130000,
          imageUrl:
            "https://cars-for-u.com/files/dynamicContent/sites/b3faae/images/en/webpage_35/kffahibr/element_604/0/253200.jpeg",
          description: "Enter vehicle description here",
        },
      ],
    };
  },
  mounted() {
    // this.getCars();
  },
  methods: {},
};
</script>