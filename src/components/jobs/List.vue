<template>
  <v-container>
    <v-subheader class="grey--text darken-1">Today</v-subheader>
    <v-card class="mb-4">
      <v-list two-line>
        <template v-for="item in items">
          <v-divider v-if="item.divider" v-bind:inset="item.inset"></v-divider>
          <v-list-tile avatar v-else v-bind:key="item.title" @click="">
            <v-list-tile-avatar>
              <img v-bind:src="item.avatar"/>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon v-bind:class="[item.active ? 'teal--text' : 'grey--text']">more_vert</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </v-card>

    <v-subheader class="grey--text darken-1">Yesterday</v-subheader>
    <v-card class="mb-4">
      <v-list two-line>
        <template v-for="item in items">
          <v-divider v-if="item.divider" v-bind:inset="item.inset"></v-divider>
          <v-list-tile avatar v-else v-bind:key="item.title" @click="">
            <v-list-tile-avatar>
              <img v-bind:src="item.avatar"/>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon v-bind:class="[item.active ? 'teal--text' : 'grey--text']">more_vert</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </v-card>

    <v-subheader class="grey--text darken-1">This month</v-subheader>
    <v-card class="mb-4">
      <v-list two-line>
        <template v-for="item in items">
          <v-divider v-if="item.divider" v-bind:inset="item.inset"></v-divider>
          <v-list-tile avatar v-else v-bind:key="item.title" @click="">
            <v-list-tile-avatar>
              <img v-bind:src="item.avatar"/>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      <v-list two-line>
        <template v-for="item in items">
          <v-divider v-if="item.divider" v-bind:inset="item.inset"></v-divider>
          <v-list-tile avatar v-else v-bind:key="item.title" @click="">
            <v-list-tile-avatar>
              <img v-bind:src="item.avatar"/>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-card>

    <v-fab-transition>
      <v-btn
        dark
        info
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

export default {
  name: 'jobs-list',
  components: {
  },
  data () {
    return {
      items: [
        { avatar: '/static/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='grey--text text--darken-2'>Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { divider: true, inset: true },
        { avatar: '/static/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend." },
        { divider: true, inset: true },
        { avatar: '/static/3.jpg', title: 'Oui oui', subtitle: "<span class='grey--text text--darken-2'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?" },
        { divider: true, inset: true },
        { avatar: '/static/4.jpg', title: 'Birthday gift', subtitle: "<span class='grey--text text--darken-2'>Trevor Hansen</span> — Have any ideas about what we should get Heidi for her birthday?" },
        { divider: true, inset: true },
        { avatar: '/static/5.jpg', title: 'Recipe to try', subtitle: "<span class='grey--text text--darken-2'>Britta Holt</span> — We should eat this: Grate, Squash, Corn, and tomatillo Tacos." }
      ]
    }
  }
}
</script>

<style scoped>
</style>
