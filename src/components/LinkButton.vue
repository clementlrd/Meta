<template>
  <router-link :to="to" class="item">
    <v-btn outlined rounded class="btn">
      <slot></slot>
    </v-btn>
  </router-link>
</template>

<script>
export default {
  props: ["to"],
};
</script>

<style scoped>
a {
  text-decoration: none;
}

a.router-link-exact-active {
  color: #42b983;
}

.item {
  font-family: "hackedregular";
  color: #2c3e50;
  width: 2000px;
}

.btn {
  background-color: lightgrey;
  border-color: yellow;
  margin-inline: 5px;
  margin-top: 5px;
}
</style>