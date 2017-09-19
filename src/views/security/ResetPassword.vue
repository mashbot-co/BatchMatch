<template>
  <v-layout row align-center>
    <v-flex sm6 md4 offset-sm3 offset-md4>
      <v-card>
        <v-alert error :value="failed" class="mb-3">
          Oh oh. We couldn't find your email address.
        </v-alert>
        <v-card-title primary-title>
          <div class="headline">Reset Password</div>
        </v-card-title>
        <v-card-text class="grey--text">
          After submitting your email, we will send you a link to update your password.
        </v-card-text>
        <v-container>
          <v-form v-model="valid">
            <v-text-field
              label="E-mail"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
          </v-form>
        </v-container>
        <v-card-actions>
          <v-btn flat :disabled="!valid">Reset Pasword</v-btn>
          <v-btn flat @click="$router.push({ path: '/sign-in' })">Sign In</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'reset-password',
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
  }
}
</script>

<style scoped>
</style>
