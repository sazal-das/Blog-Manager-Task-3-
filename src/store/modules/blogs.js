import axios from 'axios';

const state = {
    blogs: []
};

const getters = {
    allBlogs: state => state.blogs
};

const actions = {
    async fetchBlogs( {commit} ){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        commit('setBlogs', response.data); 
    },
    // Add Blog
    async addBlog( {commit}, {title , body, imgData} ) {


        // **** Getting new added blogs id ****
        //let lastId = Math.max(...state.blogs.map(b=>b.id));
        // **** Getting new added blogs id ****
        let lastId = state.blogs.length;
        // ***  Commiting before posting data on server... Using it for server loading problem ***
        commit('newBlog', {id:lastId+1, title, body, imgData});      

        const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{title, body});
        console.log(response.data);

        // commit('newBlog', {...response.data, imgData});
        

    },
    // Delete Blog
    async deleteBlog( {commit}, id ){
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        commit('removeBlog', id);
    }
};

const mutations = {
    setBlogs: (state, blogs) => {state.blogs = blogs},
    newBlog: (state, blog) => {state.blogs.unshift(blog)},
    removeBlog: (state, id) => {state.blogs = state.blogs.filter(blog => blog.id !== id)}
};


export default{
    state,
    getters,
    actions,
    mutations
}