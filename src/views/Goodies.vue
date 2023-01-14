<template id="home">
  <v-container fluid justify-content>
    <img
      alt="Meta logo"
      src="@/assets/meta 600x600.png"
      style="height: auto; width: min(100%, 200px)"
      class="img_grow mt-4"
    />
    <v-card width="min(90%,900px)" class="mx-auto" color="#ffffff00" flat>
      <v-row class="mt-12">
        <v-col
          :cols="$vuetify.breakpoint.xs ? 6 : 4"
          v-for="card in cards"
          :key="card.name"
        >
          <v-card width="min(90%,500px)" class="mx-auto" color="#ffffff00" flat>
            <v-img :src="card.card"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Goodies",
  data() {
    return {
      // 3 unique | 2 legendaire | 2 rare | 3 commun
      cards: [
        {
          card: require("@/assets/goodies/reveal/stephane.png"),
          place: "",
        },
        {
          card: require("@/assets/goodies/cartes_goodies_reverse_unique.png"),
          place: "",
        },
        {
          card: require("@/assets/goodies/cartes_goodies_reverse_unique.png"),
          place: "",
        },
        {
          card: require("@/assets/goodies/reveal/pommeau.png"),
          place: "",
        },
        {
          card: require("@/assets/goodies/reveal/calendrier.png"),
          place: "",
        },
        {
          card: require("@/assets/goodies/cartes_goodies_reverse_rare.png"),
          place: "",
        },
        {
          card: require("@/assets/goodies/cartes_goodies_reverse_rare.png"),
          place: "",
        },
        {
          card: require("@/assets/goodies/reveal/sticker.png"),
          place: "",
        },
        {
          card: require("@/assets/goodies/reveal/sticker_collector.png"),
          place: "",
        },
        {
          card: require("@/assets/goodies/reveal/sticker_rect.png"),
          place: "",
        },
      ],
    };
  },
};
</script>

<style>
</style>