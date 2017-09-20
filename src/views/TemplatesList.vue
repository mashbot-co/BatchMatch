<template>
  <v-container>
    <v-subheader class="grey--text darken-1">Today</v-subheader>
    <v-card class="mb-4">
      <v-card-title>Hello Motto</v-card-title>
      <v-divider></v-divider>
      <v-card-title>Hello Motto</v-card-title>
      <v-divider></v-divider>
      <v-card-title>Hello Motto</v-card-title>
      <v-divider></v-divider>
      <v-card-title>Hello Motto</v-card-title>
    </v-card>

    <v-fab-transition>
      <v-btn
        dark
        error
        fab
        fixed
        bottom
        right
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'templates-list',
  components: {
  },
  methods: {
    ...mapActions([
      'setTemplates'
    ])
  },
  data () {
    return {
    }
  },
  mounted () {
    this.setTemplates()
  }
}
</script>

<style scoped>
</style>
