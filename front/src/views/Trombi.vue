<template>
  <v-container fluid justify-content>
    <img
      alt="Meta logo"
      src="@/assets/meta 600x600.png"
      style="height: auto; width: min(100%, 200px)"
      class="img_grow mt-4 mb-12"
    />
    <v-card width="min(90%,700px)" class="mx-auto">
      <v-row justify="center">
        <v-expansion-panels>
          <v-expansion-panel v-for="(member, i) in members" :key="i">
            <v-expansion-panel-header class="pa-0">
              <v-row align="center" no-gutters>
                <v-avatar size="125" tile>
                  <img :src="member.picture" />
                </v-avatar>
                <v-col v-if="$vuetify.breakpoint.xs" class="pl-4">
                  <v-card-title class="hacked-small">
                    {{ member.name }}
                  </v-card-title>
                  <v-card-subtitle class="text-h6">{{
                    member.role
                  }}</v-card-subtitle>
                </v-col>
                <template v-else>
                  <v-col align="center">
                    <strong class="hacked"> {{ member.name }} </strong>
                  </v-col>
                  <v-col align="center">
                    <strong class="hacked"> {{ member.role }} </strong>
                  </v-col>
                </template>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-divider></v-divider>
              <v-card-text class="text-left">
                {{ member.description }}
              </v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Trombi",
  data() {
    return {
      members: [
        {
          name: "Thomas",
          role: "President",
          picture: require("@/assets/pp/thomas.png"),
          description:
            "On ne le présente plus : Thomas, notre prez préféré. Au-delà de sa carrure insane et de son charisme incontestable, Thomas est avant tout un gros nounours qui fera tout son possible pour assurer le bien-être de tous. Très investi dans la vie associative, il a les épaules (littéralement) pour diriger le BDE d'une main de maître et améliorer la vie à l'ENSTA. Grâce à son expérience de prez BDA, il connaît déjà tous les rouages d'une présidence de bureau et sait comment gérer chaque situation en gardant la bonne humeur.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hacked {
  font-family: "hackedregular";
  font-size: 3em;
}
.hacked-small {
  font-family: "hackedregular";
  font-size: 2em;
}
</style>