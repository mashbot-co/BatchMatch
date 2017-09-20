<template>
  <v-container>
    <v-subheader class="grey--text darken-1">Today</v-subheader>
    <v-card class="mb-4">
      <v-card-title>Hello Motto</v-card-title>
    </v-card>

    <v-subheader class="grey--text darken-1">This Month</v-subheader>
    <v-card class="mb-4">
      <v-card-title>Hello Motto</v-card-title>
      <v-divider></v-divider>
      <v-card-title>Hello Motto</v-card-title>
      <v-divider></v-divider>
      <v-card-title>Hello Motto</v-card-title>
      <v-divider></v-divider>
      <v-card-title>Hello Motto</v-card-title>
    </v-card>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'downloads-list',
  components: {
  },
  methods: {
    ...mapActions([
      'setDownloads'
    ])
  },
  data () {
    return {
    }
  },
  mounted () {
    this.setDownloads()
  }
}
</script>

<style scoped>
</style>
