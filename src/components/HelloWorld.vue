<template>
  <v-container fluid fill-height>
    <v-row class="text-center justify-center" >
      <v-col class="mb-4" md="4">
        <v-row>
          <v-col >
            <card-welcome/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardWelcome from './CardWelcome.vue'

export default {
  components: { CardWelcome },
  name: 'HelloWorld',
  data () {
    return {}
  }
}
</script>
