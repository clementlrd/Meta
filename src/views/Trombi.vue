<template id="home">
  <v-container fluid justify-content>
    <img
      alt="Meta logo"
      src="@/assets/meta 600x600.png"
      style="height: auto; width: min(100%, 200px)"
      class="img_grow mt-4"
    />
    <v-row dense>
      <v-col
        align="center"
        cols="12"
        v-for="member in members"
        :key="member.name"
      >
        <Member w="800px" h="100px" :member="member"></Member>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Member from "@/components/Member";

export default {
  name: "Trombi",
  components: { Member },
  data() {
    return {
      members: [
        {
          name: "Thomas",
          role: "President",
          picture: require("@/assets/pp/thomas.png"),
          description:
            "On ne le présente plus : Thomas, notre prez préféré. Au-delà de sa carrure insane et de son charisme incontestable, Thomas est avant tout un gros nounours qui fera tout son possible pour assurer le bien-être de tous. Très investi dans la vie associative, il a les épaules (littéralement) pour diriger le BDE d’une main de maître et améliorer la vie à l’ENSTA. Grâce à son expérience de prez BDA, il connaît déjà tous les rouages d’une présidence de bureau et sait comment gérer chaque situation en gardant la bonne humeur. ",
        },
      ],
    };
  },
};
</script>
