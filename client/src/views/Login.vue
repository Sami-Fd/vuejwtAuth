<template>
  <div class="sp d-flex justify-center align-center">
    <v-card width="500" class="pa-5">
      <h1 class="d-flex justify-center">Login</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="user.email"
          :rules="emailRules"
          label="E-mail"
          prepend-icon="mdi-account"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          :rules="[rules.required, rules.min]"
          type="password"
          label="Password"
          prepend-icon="mdi-lock"
          class="input-group--focused"
        ></v-text-field>
        <v-btn color="primary" @click="validate" block> Log In </v-btn>
      </v-form>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="4000" bottom color="Red">
      <p>{{ error.email }}</p>
      <p>{{ error.password }}</p>
      <v-btn text color="white" @click="snackbar = false">X</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data: () => ({
    snackbar: false,
    invalid: true,
    valid: true,
    api: "http://localhost:3000",
    user: { email: "", password: "" },
    error: {},
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    rules: {
      required: (v) => !!v || "Required.",
      min: (v) => v.length >= 6 || "Min 6 characters",
    },
  }),
  mounted() {},

  methods: {
    userin() {
      axios
        .post(`${this.api}/login`, this.user)
        .then((response) => {
          console.log(response);
          if (response.data.errors) {
            this.error.email = this.newUser.errors.email;
            this.error.password = this.newUser.errors.password;
            this.snackbar = true;
          }
          if (response.data.user) {
            this.$router.push("/");
          }
        })
        .catch((e) => {
          console.log("error", e);
        });
    },

    validate() {
      if (this.$refs.form.validate()) {
        this.disable = false;
        this.userin();
      }
    },
  },
};
</script>
<style>
.sp {
  height: "100%";
}
</style>