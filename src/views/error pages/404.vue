<template>
  <v-container fluid>
    <img
      alt="Meta logo"
      src="@/assets/meta_logo 600x600.png"
      style="height: auto; width: min(100%, 350px)"
      class="mt-n4"
    />
    <v-card class="text-box mx-auto mt-n12 pt-4" max-width="700">
      <v-card-title class="justify-center title"> Error 404 </v-card-title>
      <v-card-subtitle class="mt-1"
        ><p class="message">Oupsss... Cette page n'existe pas.</p>
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",
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