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

                <v-tabs-items v-model="tab">
                  <v-tab-item  key='basico'>
                   <v-card class="elevation-0">
                  <p> <b> Id: </b>{{person.id}}&nbsp; <b> Nome: </b>   {{person.name}}&nbsp; <b> Tipo: </b> {{person.type}}</p>
                  <p> <b> Data Aniversário: </b>{{person.birthDate | DataFormart}}&nbsp; <b> CPF/CNPJ: </b>   {{person.federalDocument | FederalDocument}}&nbsp; <b> RG: </b> {{person.stateDocument}}</p>
                  <p><v-divider/></p>
                  <p><b>Endereço</b></p><br/>
                   <p><b>Cep:</b>&nbsp;{{person.address.zipCode}} <b>Logradouro:</b>&nbsp;{{person.address.street}}</p>
                   <p><b>Número:</b>&nbsp;{{person.address.number}} <b>Complemento:</b>&nbsp;{{person.address.complement}}</p>
                   <p><b>Bairro:</b>&nbsp;{{person.address.district}} <b>Cidade:</b>&nbsp;{{person.address.city}}<b>&nbsp;UF:</b>&nbsp;{{person.address.state}}</p>
                   </v-card>
                  </v-tab-item>
                  <v-tab-item  key='contacts'>
                    <card-contacts :items="person.contacts"/>
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
      person: {
        id: '',
        name: '',
        type: '',
        federalDocument: '',
        stateDocument: null,
        birthDate: '',
        address: {
          zipCode: '',
          street: '',
          number: '',
          complement: null,
          district: '',
          city: '',
          state: ''
        },
        anualBilling: 348288.65,
        contacts: []
      }

    }
  },
  methods: {
    close () {
      this.dialog.show = false
    },
    async getPerson () {
      const { data } = await PeopleService.get(`/people/${this.$route.params.id}`)
      Object.assign(this.person, { ...data })
      console.log(this.person)
    }

  },
  created () {
    this.getPerson()
  }
}
</script>

<style>

</style>
