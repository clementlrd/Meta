<template>
  <v-container class="pt-8">
    <link-button v-for="item in items" :to="item.route" :key="item.route">
      <span class="txt">{{ item.title }}</span>
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

<style scoped>
.txt {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>