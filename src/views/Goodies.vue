<template id="home">
  <v-container fluid justify-content>
    <img
      alt="Meta logo"
      src="@/assets/meta 600x600.png"
      style="height: auto; width: min(100%, 200px)"
      class="img_grow mt-4"
    />
    <v-card width="min(90%,900px)" class="mx-auto">
      <v-row class="mt-12">
        <v-col cols="6" v-for="card in cards" :key="card.name">
          <v-card width="min(90%,500px)" class="mx-auto">
            <v-img :src="require(card_path + card_name + '.png')"></v-img>
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
      hidden_card_pattern: "@/assets/goodies/carte_goodies_reverse_",
      card_path: "@/assets/goodies/reveal/",
      // 3 unique | 2 legendaire | 2 rare | 3 commun
      cards: [
        {
          card_name: "stephane",
          rarity: "unique",
          reveal: false,
          place: "",
        },
        {
          card_name: "",
          rarity: "unique",
          reveal: false,
          place: "",
        },
        {
          card_name: "",
          rarity: "unique",
          reveal: false,
          place: "",
        },
        {
          card_name: "pommeau",
          rarity: "legendaire",
          reveal: false,
          place: "",
        },
        {
          card_name: "calendrier",
          rarity: "legendaire",
          reveal: false,
          place: "",
        },
        {
          card_name: "",
          rarity: "rare",
          reveal: false,
          place: "",
        },
        {
          card_name: "",
          rarity: "rare",
          reveal: false,
          place: "",
        },
        {
          card_name: "sticker",
          rarity: "commun",
          reveal: false,
          place: "",
        },
        {
          card_name: "sticker_collector",
          rarity: "commun",
          reveal: false,
          place: "",
        },
        {
          card_name: "sticker_rect",
          rarity: "commun",
          reveal: false,
          place: "",
        },
      ],
    };
  },
};
</script>

<style>
</style>