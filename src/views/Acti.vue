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

    <v-card width="min(90%,900px)" class="mx-auto mt-12" color="#ffffff00" flat>
      <v-card-text> <strong class="hacked">Hotlines</strong> </v-card-text>
      <v-row justify="center">
        <v-col :cols="$vuetify.breakpoint.xs ? 12 : 6">
          <v-card
            width="min(90%,900px)"
            class="mx-auto mt-4 mb-2"
            color="rgb(39, 39, 39)"
            flat
          >
            <v-img src="@/assets/acti/affiche_hotlines_matin.png"></v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            href="https://docs.google.com/forms/d/e/1FAIpQLSf9LvO7zgRdyAZ9Cf86k_3PsVRWOFoMdciczmWwjDscUnQ1ZQ/viewform?usp=sf_link"
            color="#e400ff"
            outlined
            class="mt-2 mb-8 btn"
            target="_blank"
          >
            Commander
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-divider class="sep" dark></v-divider>

    <v-card width="min(90%,900px)" class="mx-auto" color="#ffffff00" flat>
      <v-row class="mt-2">
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
            light
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

<style scoped>
.hacked {
  font-family: "hackedregular";
  font-size: 2em;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.sep {
  border-width: 1.2px;
  border-color: #181818c7;
  color: white;
}

.btn {
  background-color: rgb(39, 39, 39);
}
</style>