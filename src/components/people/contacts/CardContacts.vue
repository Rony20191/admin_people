<template>
<v-card>
    <v-card-text>
      <v-data-table :items="this.table.items" :headers="table.headers" :search="table.search">
        <template v-slot:top>
          <v-toolbar flat>
             <v-toolbar-title>
               <v-text-field v-model="table.search" />
             </v-toolbar-title>
         <v-spacer/>
         <v-btn text color="primary" @click="$refs.dialogContact.show()">
           Novo Contato
         </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{item}">
          <v-btn>
            <v-icon small title="Editar pessoa" icon>mdi-pencil-outline</v-icon>
               </v-btn>
               <v-btn icon small @click="remover(item)">
               <v-icon small  title="Deleta pessoa">mdi-delete-outline</v-icon>
               </v-btn>
        </template>
        <template v-slot:item.active="{item}">
          <v-icon :color="item.active?'green':'red'">{{item.active?'mdi-check':'mdi-minus-circle'}}</v-icon>
        </template>
      </v-data-table>
    </v-card-text>
    <dialog-contact ref="dialogContact" @onSaved="adicionar($event)"/>
</v-card>
</template>

<script>
import DialogContact from './DialogContact.vue'
export default {
  components: { DialogContact },
  name: 'CardContacts',
  data () {
    return {
      table: {
        search: '',
        headers: [
          { text: 'Tipo do Contato', value: 'type' },
          { text: 'Contato', value: 'value' },
          { text: 'Ativo', value: 'active' },
          { text: 'Ações', value: 'actions' }
        ],
        items: []
      },
      editedIndex: -1
    }
  },
  methods: {
    remover (item) {
      const editedIndex = this.table.items.indexOf(item)
      this.$swal.fire({ title: 'Deseja Remove o item', icon: 'question' }).then(() => {
        this.table.items.splice(editedIndex, 1)
      })
    },
    adicionar (item) {
      console.log(item)
      this.table.items.push({ ...item })
    }
  }

}
</script>

<style>

</style>
