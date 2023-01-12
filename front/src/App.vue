<template>
  <div id="app">
    <v-app>
      <!--<v-navigation-drawer app></v-navigation-drawer>-->

      <Header></Header>
      <!-- Sizes your content based upon application components -->
      <v-main>
        <router-view />
      </v-main>

      <!--<v-footer app> </v-footer>-->
    </v-app>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: { Header },
};
</script>

<style>
#app {
  font-family: Roboto, "hackedregular", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height: 100%;
  background-image: url("assets/background 1_flou.jpg");
  background-size: auto; /* Ajuste la taille de l'image pour qu'elle couvre tout l'écran */
  background-position: top; /* Centre l'image */
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

.img_grow {
  transition: transform 0.8s ease-in-out;
}

.img_grow:hover {
  transform: scale(1.02);
}
</style>