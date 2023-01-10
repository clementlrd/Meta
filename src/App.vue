<template>
  <div id="app">
    <v-app>
      <!--<v-navigation-drawer app></v-navigation-drawer>-->
      <!--<v-app-bar app> </v-app-bar>-->

      <!-- Sizes your content based upon application components -->
      <v-main>
        <router-view />
      </v-main>

      <!--<v-footer app> </v-footer>-->
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Roboto, Hacked, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height: 100%;
  background-image: url("assets/background 1.jpg");
  background-size: cover; /* Ajuste la taille de l'image pour qu'elle couvre tout l'écran */
  background-position: center; /* Centre l'image */
  background-repeat: no-repeat;
  background-color: rgb(39, 39, 39); /* Out of page (scrolling) color */
}

body {
  overflow: hidden; /* Prevent out of page scrolling (better for UIs with vertical bars: eg. outlook.com) */
}

.v-application,
.v-main {
  height: 100%;
}
</style>

<style scoped>
v-footer {
  background-color: aliceblue;
}
</style>
