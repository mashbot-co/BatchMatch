<template>
    <v-toolbar dark dense fixed :class="theme">
      <v-toolbar-side-icon @click.stop="toggleNavigator"></v-toolbar-side-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <v-btn icon @click.stop="toggleChooser">
        <v-icon>apps</v-icon>
      </v-btn>
      <v-avatar size="36px">
        <img src="https://avatars0.githubusercontent.com/u/91428?v=4&s=460" alt="">
      </v-avatar>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'app-bar',
    methods: {
      ...mapActions([
        'toggleNavigator',
        'toggleChooser',
        'logOut'
      ]),
      signOut () {
        this.logOut()
        this.$router.push({ path: '/sign-in' })
      }
    },
    computed: {
      ...mapGetters({
        title: 'title',
        theme: 'theme'
      })
    }
  }
</script>

<style>
  .card--flex-toolbar {
    margin-top: -64px;
  }
</style>
