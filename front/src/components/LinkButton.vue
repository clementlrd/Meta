<template>
  <router-link :to="to" class="item">
    <v-btn
      outlined
      rounded
      class="btn"
      :color="to != $route.path ? '#00bfff' : '#ff1493'"
      elevation="10"
    >
      <slot class="txt"></slot>
    </v-btn>
  </router-link>
</template>

<script>
export default {
  props: ["to"],
};
</script>

<style scoped>
.item {
  font-family: "hackedregular";
  margin-inline: 15px;
  margin-top: 5px;
}

.btn {
  background-color: rgba(211, 211, 211, 0.8);
  border-color: #ff1493;
  border-width: 1.25px;
}
</style>