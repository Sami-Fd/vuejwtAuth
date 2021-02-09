<template>
  <div class="sp d-flex justify-center align-center">
    <v-card width="500" class="pa-5">
      <h1 class="d-flex justify-center">Sign Up</h1>
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
        <v-btn color="primary" block @click="validate"> Sign up </v-btn>
      </v-form>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="4000" bottom color="red">
      <span>{{ error.email }}, {{ error.password }}</span>
      <v-btn text color="white" @click="snackbar = false">X</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  components: {},
  data: () => ({
    snackbar: false,
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
    newUser: {},
  }),

  methods: {
    ...mapMutations(["setUser"]),
    addUser() {
      axios
        .post(`${this.api}/api/signup`, this.user)
        .then((response) => {
          this.newUser = response.data;
          console.log(response.data.errors);
          if (this.newUser.errors) {
            this.error.email = this.newUser.errors.email;
            this.error.password = this.newUser.errors.password;
            this.snackbar = true;
          }
          if (this.newUser.user) {
            this.setUser(response.data);
            this.$router.push("/");
          }
        })
        .catch((e) => {
          console.log("error", e);
        });
    },

    validate() {
      if (this.$refs.form.validate()) {
        this.addUser();
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