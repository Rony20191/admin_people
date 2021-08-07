<template>
 <v-overlay
      :value="loading1"
    >
    <v-card>
        <v-card-text class="pa-2">
            <div class="d-flex flex-row wrap">
                <div class="mr-2 py-2 justify-center">
                    <v-progress-circular
                    :size="30"
                    color="primary"
                    indeterminate
                    ></v-progress-circular>
                </div>
                <div >
                    <div class="d-flex flex-column  justify-center">
                         <div>
                            <span>{{loading.title}}</span>
                        </div>
                        <div>
                            <span>{{loading.messagem}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </v-card-text>
    </v-card>
 </v-overlay>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      overlay: true,
      loading: {
        title: 'Aguarde',
        messagem: 'Carregando...'
      }
    }
  },
  computed: {
    loading1 () {
      return this.$store.state.loading
    }
  }

}
</script>

<style>

</style>
