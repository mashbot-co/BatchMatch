<template>
  <v-navigation-drawer
    temporary
    v-model="visibility"
    @input="trackChange"
    right
  >

    <v-toolbar fixed dark dense class="primary">
      <v-toolbar-title>Applications</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="closeChooser">
        <v-icon>chevron_right</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list dense class="mt-5">
      <v-subheader>VENDOR ONE</v-subheader>
      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Micro-App One</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="/#">
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Micro-App Two</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>

    <v-list dense>
      <v-subheader>VENDOR TWO</v-subheader>
      <v-list-tile href="#">
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Micro-App One</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="#">
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Micro-App Two</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>


    <v-list dense>
      <v-subheader>VENDOR THREE</v-subheader>
      <v-list-tile href="/">
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Micro-App One</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="/">
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Micro-App Two</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="/">
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Micro-App Three</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'chooser',
    methods: {
      ...mapActions([
        'closeChooser'
      ]),
      trackChange (e) {
        if (this.chooserVisible === true && e === false) {
          this.closeChooser()
        }
      }
    },
    computed: {
      ...mapGetters({
        chooserVisible: 'chooserVisible'
      }),
      visibility: {
        get () {
          return this.chooserVisible
        },
        set () {
          this.toggleChooser
        }
      }
    }
  }
</script>
