<template>
  <v-footer app padless absolute v-if="$vuetify.breakpoint.xs">
    <v-card tile class="indigo lighten-1 white--text text-center" width="100%">
      <v-card-text class="white--text pa-1 pb-0 text-caption">
        <strong>Liste BDE </strong><span class="hacked">Meta</span>
        <strong> 2023 </strong>
        <v-btn
          class="white--text"
          href="https://www.facebook.com/profile.php?id=100089037207608"
          target="_blank"
          icon
        >
          <v-icon size="14px"> mdi-facebook </v-icon>
        </v-btn>
        <v-btn
          class="white--text"
          href="https://www.instagram.com/listebdemeta/"
          target="_blank"
          icon
        >
          <v-icon size="14px"> mdi-instagram </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pa-1 pt-0 text-caption">
        Dev - Clément Laroudie
      </v-card-text>
    </v-card>
  </v-footer>
  <v-footer app padless absolute v-else>
    <v-card tile class="indigo lighten-1 white--text text-center" width="100%">
      <v-card-text class="white--text" no-gutters>
        <v-row dense align="center" justify="center">
          <v-col class="text-right">
            <strong>Liste BDE </strong><span class="hacked">Meta</span>
            <strong> 2023 </strong>
          </v-col>
          <v-col cols="2">
            <v-btn
              class="white--text"
              href="https://www.facebook.com/profile.php?id=100089037207608"
              target="_blank"
              icon
            >
              <v-icon size="24px"> mdi-facebook </v-icon>
            </v-btn>
            <v-btn
              class="white--text"
              href="https://www.instagram.com/listebdemeta/"
              target="_blank"
              icon
            >
              <v-icon size="24px"> mdi-instagram </v-icon>
            </v-btn>
          </v-col>
          <v-col class="text-left"> Développé par Clément Laroudie </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.hacked {
  font-family: "hackedregular";
}
</style>
