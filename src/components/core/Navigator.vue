<template>
  <v-navigation-drawer
    persistent
    v-model="visibility"
    enable-resize-watcher
    absolute
    clipped
    @input="trackChange"
    class="grey lighten-5 pt-0 navigator"
    >

    <!-- CATEGORY ONE (start) -->
    <v-list class="transparent pt-3">

      <v-subheader>D&B BATCH MATCH</v-subheader>


      <v-list-tile @click="$router.push({path: '/jobs'})">
        <v-list-tile-action>
          <v-icon medium primary>inbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Job Requests</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="$router.push({path: '/templates'})">
        <v-list-tile-action>
          <v-icon medium error>layers</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Templates</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click.stop="$router.push({path: '/downloads'})">
        <v-list-tile-action>
          <v-icon warning medium>cloud_download</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Downloads</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click.stop="$router.push({path: '/page-one'})">
        <v-list-tile-action>
          <v-icon medium class="green--text">timer</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Check Status</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click.stop="openSettings">
        <v-list-tile-action>
          <v-icon medium>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Settings</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
    <!-- CATEGORY ONE (end) -->



    <hr class="divider">

    <!-- CATEGORY THREE (start) -->
    <v-list class="transparent">
      <v-list-tile @click="$router.push({path: '/documentation'})">
        <v-list-tile-action>
          <v-icon medium>library_books</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Documentation</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon medium>headset_mic</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Support</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
    <!-- CATEGORY THREE (end) -->

    <hr class="divider">

    <!-- CATEGORY THREE (start) -->
    <v-list class="transparent">
      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon class="light-blue--text">cloud</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Return to mashbot Cloud</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'navigator',
    methods: {
      ...mapActions([
        'closeNavigator',
        'openSettings'
      ]),
      trackChange (e) {
        if (this.navigatorVisible === true && e === false) {
          this.closeNavigator()
        }
      }
    },
    computed: {
      ...mapGetters({
        navigatorVisible: 'navigatorVisible'
      }),
      visibility: {
        get () {
          return this.navigatorVisible
        },
        set () {

        }
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<style>
div.navigation-drawer__border {
  display: none !important;
}

</style>
