<template>
  <v-layout row align-center>
    <v-flex sm6 md4 offset-sm3 offset-md4>
      <v-card>
        <v-alert error :value="failed" class="mb-3">
          Oh oh. We couldn't find your email address.
        </v-alert>
        <v-card-title primary-title>
          <div class="headline">Update Password</div>
        </v-card-title>
        <v-card-text class="grey--text">
          After submitting your email, we will send you a link to update your password.
        </v-card-text>
        <v-container>
          <v-form v-model="valid">
            <v-text-field
              type="password"
              label="Password"
              v-model="password"
              :rules="passwordRules"
              required
            ></v-text-field>
            <v-text-field
              type="password"
              label="Confirm Password"
              v-model="passwordConfirmation"
              :rules="passwordRules"
              required
            ></v-text-field>
          </v-form>
        </v-container>
        <v-card-actions>
          <v-btn flat class="blue--text">Update Pasword</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'update-password',
  data () {
    return {
      failed: false,
      valid: false,
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required'
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
