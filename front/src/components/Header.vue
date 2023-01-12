<template>
  <v-container class="pt-8">
    <v-row dense>
      <v-col
        v-for="item in items"
        :key="item.route"
        :cols="$vuetify.breakpoint.xs ? 12 : undefined"
      >
        <link-button :to="item.route">
          <span class="txt">{{ item.title }}</span>
        </link-button>
      </v-col>
    </v-row>
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
          title: "PROGRAMME",
          route: "/program",
        },
        {
          title: "ACTIVITES",
          route: "/acti",
        },
        {
          title: "GOODIES",
          route: "/goodies",
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