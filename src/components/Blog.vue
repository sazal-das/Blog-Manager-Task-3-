<template>
  <div>
    <div class="container">
      <div class="blogs">
        <div v-for="blog in allBlogs" :key="blog.id" class="blog">
          <div class="element">
            <div class="row">
              <div class="col-2">
                <img v-if="blog.imgData" :src="blog.imgData" alt />
              </div>
              <div class="col-10 text-left">
                <h4>{{blog.title}}</h4>
                <p>{{blog.body}}</p>
              </div>
            </div>
            <button @click="deleteBlog(blog.id)" class="btn btn-danger">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Blog",
  methods: {
    ...mapActions(["fetchBlogs", "deleteBlog"])
  },
  computed: mapGetters(["allBlogs"]),
  created() {
    this.fetchBlogs();
  }
};
</script>

<style scoped>
.container {
  background-color: #eceff1;
  padding: 20px;
}
.blogs {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
}
.blog {
  border: 1px solid #ccc;
  background: white;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
img {
  width: 70px;
  height: 100px;
}
@media (max-width: 500px) {
  .blogs {
    grid-template-columns: 1fr;
  }
}
</style>