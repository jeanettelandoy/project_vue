<template>
  <div>
    <h1>Events Listing</h1>
    <router-link :to="{ name: 'card-show', params: { id: '1' } }"
      >Show Event #1</router-link
    >
  </div>
</template>

<script>
import Card from "@/components/CardComponent.vue";

export default {};
</script>

<style scoped></style>
