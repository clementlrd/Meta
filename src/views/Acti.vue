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
      <v-img src="@/assets/EDT.png"></v-img>
    </v-card>

    <!--
    <v-card width="min(90%,900px)" class="mx-auto">
      <v-row class="mt-12">
        <v-col :cols="$vuetify.breakpoint.xs ? 12 : 6">
          <v-card width="min(90%,500px)" class="mx-auto">
            <v-img src="@/assets/meta 600x600.png"></v-img>
          </v-card>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.xs ? 12 : 6">
          <v-card width="min(90%,500px)" class="mx-auto">
            <v-img src="@/assets/meta 600x600.png"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    -->
  </v-container>
</template>

<script>
export default {
  name: "Acti",
};
</script>