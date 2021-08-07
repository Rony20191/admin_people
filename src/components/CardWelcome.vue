<template>
  <v-card>
    <v-card-text>
      <span>
        <h1 class="title font-weight-bold mb-3  rotated">
          {{ text }}
        </h1>
      </span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CardWelcome',
  data () {
    return {
      text: 'Olá, bem vindo'
    }
  }
}
</script>

<style>
.rotated {
  animation: loading 2s linear;
}
@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
