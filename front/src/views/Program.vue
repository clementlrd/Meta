<template id="home">
  <v-container fluid justify-content>
    <img
      alt="Meta logo"
      src="@/assets/meta 600x600.png"
      style="height: auto; width: min(100%, 200px)"
      class="img_grow mt-4"
    />
    <v-card width="min(90%,900px)" class="mx-auto mt-2" elevation="10">
      <v-img src="@/assets/Programme_light_META.png"></v-img>
    </v-card>
    <v-card width="450px" class="mx-auto mt-6 mb-2" elevation="10">
      <v-img src="@/assets/meta 600x600.png"></v-img>
      <v-btn
        class="mt-6 mb-2"
        color="#e400ff"
        outlined
        href="Programme_complet_META.pdf"
        download
      >
        Télécharger
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Program",
  methods: {},
};
</script>
