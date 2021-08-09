import Vue from 'vue'

Vue.filter('DataFormart', function (value) {
  if (!value) {
    return ''
  }
  return value.split('-').reverse().join('/')
})
