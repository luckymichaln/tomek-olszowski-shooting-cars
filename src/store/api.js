import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export const apiSearchPosts = () =>
  axios.get('http://tom.stronazen.pl/wp-json/acf/v3/posts')
    .then(response => response)
