<template>
  <div>
    <h4>{{ name }}</h4>
    <h5>{{ category }}</h5>
    <h5>{{ popularity }}</h5>
    <img />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: [
    "name",
    "id",
    "game",
    "popularity",
    "summary",
    "category",
    "cover",
    "url"
  ]
};
</script>

<style scoped>
h4 {
  color: cadetblue;
}
</style>
