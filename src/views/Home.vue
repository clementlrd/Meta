<template id="home">
  <v-container fluid justify-content>
    <img
      alt="Meta logo"
      src="@/assets/meta 600x600.png"
      style="height: auto; width: min(100%, 470px)"
      class="img_grow mt-4"
    />
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
.test {
  display: none;
  font-family: "hackedregular", sans-serif;
  font-size: 2em;
}
</style>