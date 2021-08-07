<template>
    <v-dialog>
        <v-card>
            <v-card-text>
                <v-tabs-items>
                    <v-tab-item>
                        <v-form ref="cadBasico" v-model="form.valido1">

                        </v-form>
                    </v-tab-item>
                </v-tabs-items>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'DialogPerson',
  data () {
    return {
      form: {
        valido1: true,
        valido2: true,
        valido3: true
      },
      person: {
        name: '',
        type: '',
        federalDocument: '',
        stateDocument: '',
        bithDate: '',
        address: {
          zipCode: '',
          street: '',
          number: '',
          complement: '',
          district: '',
          city: '',
          state: ''
        },
        anualBilling: 0.0,
        contacts: []
      }
    }
  }

}
</script>

<style>

</style>
