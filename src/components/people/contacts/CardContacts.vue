<template>
<v-card>
    <v-card-text>
      <v-data-table :items="table.items" :headers="table.headers" :search="table.search">
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
        <template v-slot:item.type="{item}">
          <span>{{item.type === 'PHONE' ?'Telefone' :'E-Mail'}}</span>
        </template>
        <template v-slot:item.value="{item}">
          <span>{{item.type === 'PHONE'? (item.value) : item.value | TelefoneFormart }}</span>
        </template>
        <template v-slot:item.actions="{item}">
          <v-btn title="Editar pessoa" @click="editar (item)" icon>
            <v-icon small >mdi-pencil-outline</v-icon>
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
    <dialog-contact ref="dialogContact" @onSaved="adicionar($event)" @onSavedEdit="update($event)"/>
</v-card>
</template>

<script>
import DialogContact from './DialogContact.vue'
export default {
  components: { DialogContact },
  name: 'CardContacts',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
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
    },
    editar (item) {
      this.editedIndex = this.table.items.indexOf(item)
      this.$refs.dialogContact.show(item)
    },
    update (item) {
      Object.assign(this.table.items[this.editedIndex], { ...item })
      this.editedIndex = -1
    }
  },
  watch: {
    items: {
      immediate: true,
      handler (val, oldVal) {
        this.table.items = val
      },
      deep: true
    }
  }

}
</script>

<style>

</style>
