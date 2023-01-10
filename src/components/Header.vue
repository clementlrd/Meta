<template>
  <v-container class="pt-8">
    <link-button v-for="item in items" :to="item.route" :key="item.route">
      {{ item.title }}
    </link-button>
  </v-container>
</template>

<script>
import LinkButton from "./LinkButton";
export default {
  name: "Header",
  components: { LinkButton },
  data() {
    return {
      items: [
        {
          title: "ACCUEIL",
          route: "/",
        },
        {
          title: "LES MEMBRES",
          route: "/members",
        },
        {
          title: "CAMPAGNES",
          route: "/campaign",
        },
      ],
    };
  },
};
</script>