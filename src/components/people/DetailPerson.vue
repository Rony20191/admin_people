<template>
  <v-container>
    <v-card>
            <v-card-title>{{dialog.title}}</v-card-title>
            <v-card-subtitle>
                <v-tabs   v-model="tab">
                    <v-tab key='basico'>Detalhes</v-tab>
                    <v-tab key='contacts'>Contatos</v-tab>
                </v-tabs>
            </v-card-subtitle>
            <v-card-text>
                {{person.name}}
                <v-tabs-items v-model="tab">
                  <v-tab-item  key='basico'></v-tab-item>
                  <v-tab-item  key='contacts'>
                    <card-contacts/>
                  </v-tab-item>
                </v-tabs-items>
            </v-card-text>
            <v-card-actions>
            </v-card-actions>
        </v-card>
  </v-container>
</template>

<script>
import { PeopleService } from '@/services'
import CardContacts from './contacts/CardContacts.vue'
export default {
  components: { CardContacts },
  name: 'DetailPerson',
  data () {
    return {
      tab: null,
      dialog: {
        show: false,
        title: 'Detalhes Pessoa'
      },
      person: null
    }
  },
  methods: {
    close () {
      this.dialog.show = false
    },
    async getPerson () {
      const { data } = await PeopleService.get(`/people/${this.$route.params.id}`)
      this.person = data
    }

  },
  created () {
    this.getPerson()
  }
}
</script>

<style>

</style>
