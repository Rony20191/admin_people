import store from '../store'

function setLoading (show) {
  store.state.loading = show
}

export {
  setLoading
}
