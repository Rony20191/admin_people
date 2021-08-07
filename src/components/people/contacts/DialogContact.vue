<template>
  <v-dialog v-model="dialog.show" max-width="600" persistent>
      <v-card>
        <v-card-title class="pr-0 pl-0 pt-0">
          <v-toolbar color='primary'>
            <v-toolbar-title>
              <span class="white--text">{{title}}</span>
            </v-toolbar-title>
            <v-spacer/>
            <v-btn icon @click="close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card-title>
          <v-card-text>
              <v-form ref="formCadastroContact" lazy-validation v-model="form.valido">
                  <v-select label="Tipo de contato (*)" placeholder="Tipo de contato" v-model="contact.type" :items="types"  :rules="rules.required"></v-select>
                  <v-text-field label="Contato" v-mask="contact.type === 'PHONE'? '(##)# ####-####':''" v-model="contact.value" :rules="contact.type === 'PHONE'?rules.required:rules.email" />
                  <v-checkbox label="Ativo" v-model="contact.active" />
              </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn color='primary' @click="salvar()">Salvar</v-btn>
          </v-card-actions>
          </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DialogContact',
  data () {
    return {
      dialog: {
        show: false,
        edicao: false
      },
      form: {
        valido: true
      },
      contact: {
        type: '',
        value: '',
        active: false
      },
      contactDefault: {
        type: '',
        value: '',
        active: ''
      },
      types: [
        { text: 'Email', value: 'EMAIL' },
        { text: 'Telefone', value: 'PHONE' }
      ],
      rules: {
        required: [
          v => !!v || 'Campo é obrigatório'
        ],
        email: [
          v => !!v || 'E-mail é obrigatório',
          v => /.+@.+/.test(v) || 'E-mail não é válido'
        ]
      }
    }
  },
  methods: {
    show (item = null) {
      if (item) {
        Object.assign(this.contact, { ...item })
        this.dialog.edicao = true
      } else {
        this.dialog.edicao = false
      }
      this.dialog.show = true
    },
    close () {
      this.dialog.edicao = false
      this.dialog.show = false
      this.$nextTick(() => {
        this.contact = Object.assign({}, this.contactDefault)
        this.$refs.formCadastroContact.resetValidation()
      })
    },
    salvar () {
      if (!this.$refs.formCadastroContact.validate()) {
        return null
      }

      this.$emit('onSaved', Object.assign({}, this.contact))
      this.close()
    }
  },
  computed: {
    title () {
      return this.dialog.edicao ? 'Editar Contato' : 'Adicionar Contato'
    }
  }

}
</script>

<style>
.required label::after {
    content: "*";
}
</style>
