<template>
  <v-container fluid justify-content>
    <v-card width="min(90%,550px)" class="mx-auto" color="#ffffff00" flat>
      <v-img src="@/assets/arbre_postesV1_fond_noir.png"></v-img>
    </v-card>
    <v-card width="min(90%,700px)" class="mx-auto mt-12 mb-6" color="#ffffff00">
      <v-row justify="center">
        <v-expansion-panels v-model="panel">
          <v-expansion-panel v-for="(member, i) in members" :key="i">
            <v-expansion-panel-header class="pa-0" hide-actions>
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
      panel: 0,
      members: [
        {
          name: "Thomas",
          role: "President",
          picture: require("@/assets/pp/thomas.png"),
          description:
            "On ne le présente plus : Thomas, notre prez préféré. Au-delà de sa carrure insane et de son charisme incontestable, Thomas est avant tout un gros nounours qui fera tout son possible pour assurer le bien-être de tous. Très investi dans la vie associative, il a les épaules (littéralement) pour diriger le BDE d'une main de maître et améliorer la vie à l'ENSTA. Grâce à son expérience de prez BDA, il connaît déjà tous les rouages d'une présidence de bureau et sait comment gérer chaque situation en gardant la bonne humeur.",
        },
        {
          name: "Sebastien",
          role: "Vice-President",
          picture: require("@/assets/pp/seb.png"),
          description: "",
        },
        {
          name: "Ayoub",
          role: "Sec-Ge",
          picture: require("@/assets/pp/ayoub.png"),
          description: "",
        },
        {
          name: "Achraf",
          role: "Tresorier",
          picture: require("@/assets/pp/achraf.png"),
          description: "",
        },
        {
          name: "Odile",
          role: "Vice-Trez 1",
          picture: require("@/assets/pp/odile.png"),
          description: "",
        },
        {
          name: "Cyprien",
          role: "Vice-Trez 2",
          picture: require("@/assets/pp/cyprien.png"),
          description: "",
        },
        {
          name: "Fabien",
          role: "Com Interieur",
          picture: require("@/assets/pp/fabien.png"),
          description: "",
        },
        {
          name: "Paul",
          role: "Com Exterieur",
          picture: require("@/assets/pp/paul.png"),
          description: "",
        },
        {
          name: "Laroudie",
          role: "Assos 2A",
          picture: require("@/assets/pp/laroudie.png"),
          description: "",
        },
        {
          name: "Tadeusz",
          role: "Assos 1A",
          picture: require("@/assets/pp/tade.png"),
          description: "",
        },
        {
          name: "Bastaert",
          role: "Scolarite 2A",
          picture: require("@/assets/pp/bastaert.png"),
          description: "",
        },
        {
          name: "Melanie",
          role: "Scolarite 1A",
          picture: require("@/assets/pp/melanie.png"),
          description: "",
        },
        {
          name: "Margaux",
          role: "VSS",
          picture: require("@/assets/pp/margaux.png"),
          description: "",
        },
        {
          name: "Jonas",
          role: "Dev Durable",
          picture: require("@/assets/pp/jonas.png"),
          description: "",
        },
        {
          name: "Oskar",
          role: "Entreprise 2A",
          picture: require("@/assets/pp/oskar.png"),
          description: "",
        },
        {
          name: "Alexandre",
          role: "Entreprise 1A",
          picture: require("@/assets/pp/alex.png"),
          description: "",
        },
        {
          name: "Bernerd",
          role: "Integration",
          picture: require("@/assets/pp/bernerd.png"),
          description: "",
        },
        {
          name: "Vincent",
          role: "Integration",
          picture: require("@/assets/pp/vincent.png"),
          description: "",
        },
        {
          name: "Andre",
          role: "AST",
          picture: require("@/assets/pp/andre.png"),
          description: "",
        },
        {
          name: "Amaury",
          role: "Alumnis",
          picture: require("@/assets/pp/amaury.png"),
          description: "",
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