<template id="home">
  <v-container fluid justify-content>
    <img
      alt="Meta logo"
      src="@/assets/meta 600x600.png"
      style="height: auto; width: min(100%, 200px)"
      class="img_grow mt-4"
    />

    <v-card
      width="min(90%,900px)"
      class="mx-auto mt-4 mb-2"
      color="#ffffff00"
      flat
    >
      <v-img src="@/assets/acti/EDT.png"></v-img>
    </v-card>

    <v-card width="min(90%,900px)" class="mx-auto" color="#ffffff00" flat>
      <v-row class="mt-12">
        <v-col :cols="$vuetify.breakpoint.xs ? 12 : 6">
          <v-card
            width="min(90%,900px)"
            class="mx-auto mt-4 mb-2"
            color="rgb(39, 39, 39)"
            flat
          >
            <v-img src="@/assets/acti/affiche_repas.png"></v-img>
          </v-card>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.xs ? 12 : 6">
          <v-card
            width="min(90%,900px)"
            class="mx-auto mt-4 mb-2"
            color="rgb(39, 39, 39)"
            flat
          >
            <v-img src="@/assets/acti/affiche_grosse_acti.png"></v-img>
            <!---
            <v-btn
              href="https://doodle.com/meeting/participate/id/epZQ1N1b"
              color="#e400ff"
              outlined
              class="mt-2 mb-2"
              target="_blank"
              >S'inscrire</v-btn
            > -->
          </v-card>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.xs ? 12 : 6">
          <v-card
            width="min(90%,900px)"
            class="mx-auto mt-4 mb-2"
            color="#ffffff00"
            flat
          >
            <v-img src="@/assets/acti/affiche petite acti.jpg"></v-img>
          </v-card>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.xs ? 12 : 6">
          <v-card
            width="min(90%,900px)"
            class="mx-auto mt-4 mb-2"
            color="#ffffff00"
            flat
          >
            <v-img src="@/assets/acti/affiche_soirée_bde_meta.jpg"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Acti",
};
</script>