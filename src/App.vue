<template>
  <v-app>
    <v-app-bar app color="#1E88E5" flat dark>
      <v-toolbar-title>
       <v-img
          :src="require('./assets/cerensa-logo.png')"
          contain
          width="100px"
          height="20"
        />
      </v-toolbar-title>
      <v-spacer/>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <drawer />
    <v-main class="main">
        <router-view />
    </v-main>
    <loading/>
  </v-app>
</template>

<script>
import Drawer from '@/components/core/Drawer.vue'
import Loading from '@/components/core/Loading.vue'

export default {
  name: 'App',
  components: {
    Drawer,
    Loading
  },
  data () {
    return {}
  }
}
</script>
<style>
.main {
 /* background-color: #1E88E5; */
  background-image: linear-gradient(to bottom, #1E88E5, #5C6BC0);
}

</style>
