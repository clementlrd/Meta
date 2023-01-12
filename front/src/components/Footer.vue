<template>
  <v-footer app padless absolute>
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      width="100%"
      height="100%"
    >
      <v-card-text class="white--text" no-gutters>
        <v-row dense align="center">
          <v-spacer />
          <v-col>
            <strong>Liste BDE </strong><span class="hacked">Meta</span>
            <strong> 2023 </strong>
          </v-col>
          <v-col>
            <v-btn class="mx-4 white--text" icon>
              <v-icon size="24px"> mdi-facebook </v-icon>
            </v-btn>
            <v-btn class="mx-4 white--text" icon>
              <v-icon size="24px"> mdi-instagram </v-icon>
            </v-btn>
          </v-col>
          <v-col> Développé par Clément Laroudie </v-col>
          <v-spacer />
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
