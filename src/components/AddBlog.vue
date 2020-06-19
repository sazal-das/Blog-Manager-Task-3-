<template>
  <div>
    <div class="container">
      <div class="add">
        <h3>Add Blog</h3>
        <form @submit="onSubmit">
          <div class="form-group">
            <label for="title">Title:</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="title"
              placeholder="Title..."
            />
          </div>
          <div class="form-group">
            <label for="body">Body:</label>
            <input
              type="text"
              class="form-control form-control-lg"
              id="body"
              v-model="body"
              placeholder="Body..."
            />
          </div>
          <div class="form-group">
            <label for="banar">Banar:</label>
            <input type="file" class="form-control-file" id="banar" />
          </div>
          <button class="btn btn-success justify-content-end" type="submit" value="Submit">Add Blog</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions } from "vuex";
import Header from './Header.vue';
export default {
  name: "AddBlog",
  component: {
      Header
  },
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    ...mapActions(["addBlog"]),
    onSubmit(e) {
      e.preventDefault();
     /*  this.addBlog(this.title, this.body); */
      this.$store.state.blogs.title=this.title
      this.$store.state.blogs.body=this.body
    }
  }
};
</script>

<style scoped>
h3 {
  color: #4caf50;
  text-align: center;
}
.container {
  background-color: #eceff1;
  padding: 20px;
}
.add {
  background-color: white;
  padding: 20px;
}

</style>