<template>
  <v-container fluid>
    <img
      alt="Meta logo"
      src="@/assets/meta_logo 600x600.png"
      style="height: auto; width: min(100%, 350px)"
      class="img_grow mt-4"
    />
    <v-card class="text-box mx-auto mt-6 pt-4" max-width="700">
      <v-card-title class="justify-center title"> Futur </v-card-title>
      <v-card-subtitle class="mt-1">
        <p class="message">
          Cette page n'est pas encore disponible, revenez bientôt pour la
          découvrir !
        </p>
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Futur",
};
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

<style scoped>
.text-box {
  background-color: #129cc9a0;
}

.title,
.message {
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.title {
  font-size: 2.5em !important;
  font-family: "hackedregular" !important;
}
</style>