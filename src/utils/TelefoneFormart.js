import Vue from 'vue'

Vue.filter('TelefoneFormart', function (value) {
  let phone = value.toString()
  if (!value) {
    return ''
  }
  phone = phone.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  return phone
})
