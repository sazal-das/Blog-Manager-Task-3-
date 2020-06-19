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
    async addBlog( {commit}, title ,body ) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{title, body});
        console.log(response.data);
        
        commit('newBlog', response.data);

    },
    // Delete Blog
    async deleteBlog( {commit}, id ){
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        commit('removeBlog', id);
    }
};

const mutations = {
    setBlogs: (state, blogs) => (state.blogs = blogs),
    newBlog: (state, blog) => state.blogs.unshift(blog),
    removeBlog: (state, id) => state.blogs = state.blogs.filter(blog => blog.id !== id)
};


export default{
    state,
    getters,
    actions,
    mutations
}