import Vue from 'vue'
import Rating from './components/Rating'

new Vue({
  el: '#app',
  template: '<Rating :grade="2"/>',
  components: { Rating }
})
