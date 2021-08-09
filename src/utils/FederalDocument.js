import Vue from 'vue'
const DocumentPersonBrFilter = {
  install (Vue, options) {
    Vue.filter('FederalDocument', (document) => {
      let documentId = document.toString()
      if (document.length > 11) {
        documentId = documentId.padStart(14, '0')
        documentId = documentId.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
      } else {
        documentId = documentId.padStart(11, '0')
        documentId = documentId.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
      }
      return documentId
    })
  }
}
Vue.use(DocumentPersonBrFilter)
