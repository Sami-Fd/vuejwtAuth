<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <template v-slot:activator="{ on, attrs }">
      <!-- <v-btn
          :color="modal.iconColor"
          dark
          v-bind="attrs"
          v-on="on"
        >
          
        </v-btn>-->

      <v-btn
        v-bind="attrs"
        :title="modal.actionTitle"
        v-on="on"
        :color="modal.iconColor"
        icon
        text
        :disabled="btnDisabled"
      >
        <v-icon>{{ modal.icon }}</v-icon></v-btn
      >
    </template>
    <v-card>
      <v-card-title class="headline">{{ modal.title }}</v-card-title>
      <v-card-text>{{ modal.msg }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary darken-1" text @click="dialog = false"
          >Annuler</v-btn
        >
        <v-btn color="primary darken-1" text @click="gotModalRes()">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    modal: Object,
    btnDisabled: Boolean,
  },
  methods: {
    gotModalRes() {
      this.dialog = false;
      this.$emit("confirmed");
    },
  },
};
</script>