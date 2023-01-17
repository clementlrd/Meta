<template id="home">
  <v-container fluid justify-content>
    <img
      alt="Meta logo"
      src="@/assets/meta 600x600.png"
      style="height: auto; width: min(100%, 200px)"
      class="img_grow mt-4"
    />
    <v-card width="min(90%,900px)" class="mx-auto" color="#ffffff00" flat>
      <v-row class="mt-12 mb-4">
        <v-col
          :cols="$vuetify.breakpoint.xs ? 6 : 4"
          v-for="card in cards"
          :key="card.name"
        >
          <v-card width="min(90%,500px)" class="mx-auto" color="#ffffff00" flat>
            <v-img :src="card.card"></v-img>
            <strong class="hacked"> {{ card.place }} </strong>
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
        // unique
        {
          card: require("@/assets/goodies/reveal/stephane.png"),
          place: "Petite activite",
        },
        {
          card: require("@/assets/goodies/reveal/enceinte.png"),
          place: "Grosse activite",
        },
        {
          card: require("@/assets/goodies/reveal/disneyland.png"),
          place: "Grosse activite",
        },
        {
          card: require("@/assets/goodies/reveal/velo.png"),
          place: "Repas : Bingo",
        },
        // Légendaire
        {
          card: require("@/assets/goodies/reveal/pommeau.png"),
          place: "Petite et grosse activites",
        },
        {
          card: require("@/assets/goodies/reveal/calendrier.png"),
          place: "Petite activite - Jeux quotidiens",
        },
        // Rare
        {
          card: require("@/assets/goodies/reveal/affiches.png"),
          place: "Repas : Bingo",
        },
        {
          card: require("@/assets/goodies/reveal/sticker_collector.png"),
          place: "?",
        },
        {
          card: require("@/assets/goodies/reveal/stickers_collector_rect.png"),
          place: "?",
        },
        {
          card: require("@/assets/goodies/reveal/LED.png"),
          place: "Grosse activite",
        },
        // commun
        {
          card: require("@/assets/goodies/reveal/sticker.png"),
          place: "Stand",
        },
        {
          card: require("@/assets/goodies/reveal/bandana.png"),
          place: "Grosse activite",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hacked {
  font-family: "hackedregular";
  font-size: 1.25em;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>