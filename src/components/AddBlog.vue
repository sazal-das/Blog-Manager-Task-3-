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
            <input @change="onFileChoose" type="file" class="form-control-file" id="banar" />
          </div>
          <button class="btn btn-success justify-content-end" type="submit" value="Submit">Add Blog</button>
        </form>
      </div>
    </div>
    <Blog/>
  </div>

</template>

<script>
import { mapActions } from "vuex";
import Blog from './Blog.vue';
// import {resizeImage} from '../helpers/helpers'
export default {
  name: "AddBlog",
  components: {
      Blog
  },
  data() {
    return {
      title: "",
      body: "",
      imgData:''
    };
  },
  methods: {
    ...mapActions(["addBlog"]),
    onSubmit(e) {
      e.preventDefault();
      this.addBlog({title: this.title, body: this.body,imgData:this.imgData});
      
    },
     onFileChoose({target:{files}}){
      // console.log(files);
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        this.imgData = event.target.result;
      });
      // reader.readAsDataURL(await resizeImage({file:files[0],maxSize:100}));
      reader.readAsDataURL(files[0]);


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