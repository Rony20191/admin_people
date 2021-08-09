<template>
<v-container>
  <v-card>
    <v-card-title>
      <filter-person/>
    </v-card-title>
      <v-card-text>
          <v-data-table  :items="people" :search="table.search" :headers="table.headers"
           :options.sync="options"
           :server-items-length="table.totalItems" dense>
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
import FilterPerson from './FilterPerson.vue'

export default {
  components: { FilterPerson },
  name: 'ListPeople',
  data () {
    return {
      options: {},
      loading: true,
      table: {
        search: '',
        items: [],
        headers: [
          { text: 'id', value: 'id' },
          { text: 'Nome', value: 'name' },
          { text: 'Data nascimento', value: 'birthDate' },
          { text: 'Ações', value: 'actions' }
        ],
        totalItems: 0
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
    },
    async fakeApiCall () {
      const { sortBy, sortDesc, page, itemsPerPage } = this.options
      let items = []
      let total = 0
      // call api
      await this.$store.dispatch('getPeople', {
        pageNumber: page,
        pageSize: itemsPerPage
      }).then(data => {
        items = data.results
        total = data.totalElements

        if (sortBy.length === 1 && sortDesc.length === 1) {
          items = items.sort((a, b) => {
            const sortA = a[sortBy[0]]
            const sortB = b[sortBy[0]]

            if (sortDesc[0]) {
              if (sortA < sortB) return 1
              if (sortA > sortB) return -1
              return 0
            } else {
              if (sortA < sortB) return -1
              if (sortA > sortB) return 1
              return 0
            }
          })
        }

        if (itemsPerPage > 0) {
          items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage)
        }
      })

      return {
        items,
        total
      }
    },
    getDataFromApi () {
      this.fakeApiCall().then(data => {
        this.table.items = data.items
        this.table.totalItems = data.total
      })
    }

  },
  computed: {
    people () {
      return this.$store.state.people
    }
  },
  watch: {
    options: {
      handler () {
        this.getDataFromApi()
      },
      deep: true
    }
  },
  mounted () {
    this.getDataFromApi()
  }

}
</script>

<style>

</style>
