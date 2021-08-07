<template>
<v-container>
  <v-card>
      <v-card-text>
          <v-data-table :loading="loading" :items="people" :search="table.search" :headers="table.headers" dense>
            <template v-slot:top>
             <v-toolbar flat>
              <v-toolbar-title>Pessoas</v-toolbar-title>
              <v-spacer/>
                 <v-btn small color="primary" class="pl-2" @click="adicionar">
                  <v-icon left small>mdi-plus</v-icon>
                  Nova Pessoa
                </v-btn>
            </v-toolbar>
            </template>
            <template v-slot:item.name="{item}">
              <span>{{item.name.toUpperCase()}}</span>
            </template>
            <template v-slot:item.birthDate="{item}">
              <span>{{formartData (item)}}</span>
            </template>
            <template v-slot:item.actions="{item}">
              <v-btn icon small @click="$router.push({path: `person/${item.id}`})">
              <v-icon small title="Detalhar pessoa">mdi-account-details-outline</v-icon>
              </v-btn>
               <v-btn icon small>
              <v-icon small title="Editar pessoa">mdi-pencil-outline</v-icon>
               </v-btn>
               <v-btn icon small @click="remover">
               <v-icon small  title="Deleta pessoa">mdi-delete-outline</v-icon>
               </v-btn>
            </template>
          </v-data-table>
      </v-card-text>
  </v-card>
</v-container>
</template>

<script>

export default {
  name: 'ListPeople',
  data () {
    return {
      loading: true,
      table: {
        search: '',
        items: [],
        headers: [
          { text: 'id', value: 'id' },
          { text: 'Nome', value: 'name' },
          { text: 'Data nascimento', value: 'birthDate' },
          { text: 'Ações', value: 'actions' }
        ]
      }
    }
  },
  methods: {
    formartData (item) {
      return item.birthDate.split('-').reverse().join('/')
    },
    adicionar () {
      this.$swal.fire({ icon: 'info', text: 'Funcionalidade não disponível' })
    },
    remover () {
      this.$swal.fire({ icon: 'info', text: 'Funcionalidade não disponível' })
    }

  },
  computed: {
    people () {
      return this.$store.state.people
    }
  },
  mounted () {
    this.$store.dispatch('getPeople')
    this.loading = false
  }

}
</script>

<style>

</style>
