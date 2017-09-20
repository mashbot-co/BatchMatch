<template>
  <v-container>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'documentation',
  components: {
  },
  methods: {
    ...mapActions([
      'setGeneric'
    ])
  },
  data () {
    return {
    }
  },
  mounted () {
    this.setGeneric('Documentation')
  }
}
</script>

<style scoped>
</style>
