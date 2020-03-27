<template>
  <div>
    <div class="row row--navbar">
      <div class="col-md-1"><img src="../assets/logo_bb_w.png" /></div>
      <div class="col-md-3"><h1>Bits and Bots</h1></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.row--navbar {
  padding: 10px;
  background-color: #193031;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.13);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
h1 {
  font-family: Roboto mono;
  font-size: 28px;
  font-weight: 600;
  color: #f0ec74;
}
</style>
