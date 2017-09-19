<template>
  <v-app light toolbar>
    <navigator v-if="isLoggedIn" />
    <app-bar v-if="isLoggedIn" />
    <chooser v-if="isLoggedIn" />
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import AppBar from './components/core/AppBar'
import Chooser from './components/core/Chooser'
import Navigator from './components/core/Navigator'

export default {
  name: 'app',
  components: {
    AppBar,
    Chooser,
    Navigator
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    }),
    layoutClasses () {
      var cls = 'fluid'
      if (!this.isLoggedIn) {
        cls = 'fill-height'
      }
      return cls
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'

  .application--toolbar > main > .container {
    min-height: calc(100vh);
    padding-top: 64px;
  }

@media only screen and (max-width: 599px) {
  .container {
      padding: 24px 8px;
  }
}

.navigation-drawer--permanent.navigation-drawer--clipped, .navigation-drawer--persistent.navigation-drawer--clipped, .navigation-drawer--permanent.navigation-drawer--floating, .navigation-drawer--persistent.navigation-drawer--floating {
    margin-top: 48px;
    max-height: calc(100vh - 48px);
}

.icon.icon--medium {
    font-size: 1.8rem !important;
}
</style>
