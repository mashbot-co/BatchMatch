<template>
<v-container class="fill-height">
  <v-layout row align-center>
    <v-flex sm6 md4 offset-sm3 offset-md4>
      <v-card>
        <v-alert error :value="failed" class="mb-3">
          Invalid email or password. Please try again.
        </v-alert>
        <v-card-title primary-title>
          <div class="headline">Sign In</div>
        </v-card-title>
        <v-container>
          <v-form v-model="valid">
            <v-text-field
              prepend-icon="email"
              label="E-mail"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              prepend-icon="vpn_key"
              type="password"
              label="Password"
              v-model="password"
              :rules="passwordRules"
              required
            ></v-text-field>
          </v-form>
        </v-container>
        <v-card-actions>
          <v-btn flat :disabled="!valid" @click="signIn">Sign-In</v-btn>
          <v-btn flat @click="$router.push({ path: '/reset-password' })">Reset Password</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'sign-in',
  data () {
    return {
      failed: false,
      valid: false,
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    ...mapActions({
      logIn: 'logIn'
    }),
    signIn () {
      this.logIn()
      this.$router.push({ path: '/jobs' })
      return
    }
  }
}
</script>

<style scoped>
</style>
