import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export const apiSearchPostsCollection = () =>
  axios.get('http://tomekolszowski.com/wp-json/acf/v3/posts?per_page=80')
    .then(response => response)

export const apiSearchPost = (id) =>
  axios.get(`http://tomekolszowski.com/wp-json/acf/v3/posts/${id}`)
    .then(response => response)

export const apiSearchPage = (id) =>
  axios.get(`http://tomekolszowski.com/wp-json/acf/v3/pages/${id}`)
    .then(response => response)
