<template>
  <div class="head">
    <div class="mx-auto link">
      <router-link class="btn btn-success" style="margin: 5px"  to="/">Home</router-link>
      <router-link class="btn btn-success" style="margin: 5px" to="/addblog">Add Blog</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.head {
  background-color: #37474f;
  padding: 10px;
}
.link{
  width: max-content
}
</style>