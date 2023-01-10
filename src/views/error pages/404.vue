<template>
  <v-container fluid>
    <img
      class="mb-n12"
      alt="Meta logo"
      src="@/assets/meta_logo 600x600.png"
      style="height: auto; width: min(100%, 600px)"
    />
    <v-card class="message mx-auto mt-n12" max-width="700">
      <v-card-title class="justify-center Hacked-font">Error 404</v-card-title>
      <v-card-subtitle class="mt-1">
        Oupsss... Cette page n'existe pas.
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
.message {
  background-color: #129cc9a0;
}
</style>