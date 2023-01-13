<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <v-main>
        <router-view />
      </v-main>

      <Footer></Footer>
    </v-app>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style>
#app {
  font-family: Roboto, "hackedregular", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height: 100%;
  background-image: url("assets/background.png");
  background-size: cover;
  background-position: top;
  background-repeat: repeat-y;
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