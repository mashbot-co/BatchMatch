<template>
  <v-layout row justify-center>
    <v-dialog v-model="settingsVisible" persistent width="60%">
      <v-card>
        <v-card-title class="subheading">Settings</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 400px;">
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat="flat" @click.native="closeSettings">Done</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'settings',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      settingsVisible: 'settingsVisible'
    })
  },
  methods: {
    ...mapActions([
      'closeSettings'
    ])
  }
}
</script>

<style scoped>
.settings-dialog {
  max-width: 480px !important;
  width: 95vh !important;
}
</style>
