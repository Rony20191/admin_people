<template>
  <v-row>
    <v-col>
      <v-text-field placeholder="pesquisar nome" v-model.lazy="filter.nome" ></v-text-field>
    </v-col>
    <v-col>
      <v-select label="Ordenar Por" v-model="filter.sort" :items="sorts" ></v-select>
    </v-col>
       <v-col>
      <v-select label="Ordem" v-model="filter.order" :items="orders" ></v-select>
    </v-col>
    <v-col>
      <v-btn color="primary" small rounded @click="getPerson">buscar</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FilterPerson',
  data () {
    return {
      orders: [
        { text: 'Crescente', value: 'asc' },
        { text: 'Decrescente', value: 'desc' }
      ],
      sorts: [
        { text: 'Nome', value: 'name' },
        { text: 'Data Nascimento', value: 'birthDate' }
      ],
      filter: {
        sort: 'name',
        order: 'asc',
        nome: ''
      }
    }
  },
  methods: {
    async getPerson () {
      const sort = `${this.filter.sort}:${this.filter.order ? this.filter.order : 'asc'}`

      const filter = {
        name: `%${this.filter.nome}%`,
        sort: sort
      }
      this.$store.dispatch('getPeople', filter)
    }
  }

}
</script>

<style>

</style>
