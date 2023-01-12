<template>
  <v-container fluid>
    <v-row justify="center">
      <v-expansion-panels>
        <v-expansion-panel v-for="(member, i) in member" :key="i">
          <v-expansion-panel-header>
            <v-row align="center" no-gutters>
              <v-col>
                <v-avatar size="100" tile>
                  <img :src="member.picture" />
                </v-avatar>
              </v-col>

              <v-col>
                <strong v-html="message.name"></strong>
              </v-col>

              <v-col class="text-no-wrap" cols="5" sm="3">
                <v-chip
                  v-if="message.new"
                  :color="`${message.color} lighten-4`"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                  {{ message.new }} new
                </v-chip>
                <strong v-html="message.title"></strong>
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
  <!--
  <v-card :width="w" class="mt-6" color="#00f0ffe0">
    <v-avatar size="100" tile><v-img :src="member.picture"></v-img></v-avatar>
    <v-card-title class="role">{{ member.name }}</v-card-title>
    <v-card-subtitle>{{ member.role }}</v-card-subtitle>
    <v-card-text class="text-caption text-left">{{
      member.description
    }}</v-card-text>
  </v-card>
  -->
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
  data() {
    return {
      messages: [
        {
          avatar: this.member.picture,
          name: this.member.name,
          title: this.member.role,
          excerpt: "Thank you for joining our community...",
        },
        {
          color: "red",
          icon: "mdi-account-multiple",
          name: "Social",
          new: 1,
          total: 3,
          title: "Twitter",
        },
        {
          color: "teal",
          icon: "mdi-tag",
          name: "Promos",
          new: 2,
          total: 4,
          title: "Shop your way",
          exceprt: "New deals available, Join Today",
        },
      ],
      lorem:
        "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
    };
  },
};
</script>

<style scoped>
.role {
  font-family: "hackedregular";
  font-size: 2em;
}
</style>