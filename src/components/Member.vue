<template>
  <v-card :width="smallScreen ? `min(90%, ${w})` : w" class="mt-6" align="left">
    <v-row no-gutters align="center">
      <v-col fill-height cols="3">
        <v-img class="img" :src="member.picture"></v-img>
      </v-col>
      <v-col>
        <v-container>
          <v-row no-gutters>
            <v-col>
              <v-card-title class="pb-0 pt-1 text-h5">{{
                member.name
              }}</v-card-title>
            </v-col>
            <v-col cols="4">
              <span class="role"> {{ member.role }} </span>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-card-text class="pt-0">
              {{ member.description }}
            </v-card-text>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Member",
  props: ["w", "h", "member"],
  computed: {
    smallScreen() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    path() {
      return "../assets/pp/" + this.member.picture + ".png";
    },
  },
};
</script>

<style scoped>
.role {
  font-family: "hackedregular";
  font-size: 2em;
}
</style>