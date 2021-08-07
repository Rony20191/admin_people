<template>
  <v-navigation-drawer permanent expand-on-hover color="primary" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
           <v-img
          :src="require('@/assets/cerensa-logo.png')"
          contain
          width="100px"
          height="20"
        />
        </v-list-item-title>
        <v-list-item-subtitle>  </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon color="white">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content class="pl-1 ml-1">
          <v-list-item-title>
            <span class="white--text">
            {{ item.title }}
            </span>
            </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home', to: '/' },
        { title: 'Pessoas', icon: 'mdi-account', to: '/people' },
        { title: 'About', icon: 'mdi-help', to: '/about' }
      ],
      right: null
    }
  }
}
</script>
