<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 pa-4">
          <v-card-title class="text-h5">Adventure starts here 🚀</v-card-title>
          <v-card-subtitle>Make your app management easy and fun!</v-card-subtitle>

          <v-card-text>
            <v-form @submit.prevent="register">
              <div class="text-subtitle-1 text-medium-emphasis">Username</div>
              <v-text-field v-model="name" density="compact" placeholder="Enter your username"
                variant="outlined"></v-text-field>

              <div class="text-subtitle-1 text-medium-emphasis">Email</div>
              <v-text-field v-model="email" density="compact" placeholder="Enter your email"
                variant="outlined"></v-text-field>

              <div class="text-subtitle-1 text-medium-emphasis">Password</div>
              <v-text-field v-model="password" :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :type="showPassword ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                variant="outlined" @click:append-inner="showPassword = !showPassword"></v-text-field>

              <v-checkbox v-model="agreeToTerms" class="mt-n4">
                <template v-slot:label>
                  I agree to
                  <a href="#" class="text-primary text-decoration-none"> privacy policy & terms</a>
                </template>
              </v-checkbox>

              <v-btn block class="mb-4" color="primary" size="large" @click="register">
                Sign Up
              </v-btn>

              <div class="text-center">
                Already have an account?
                <router-link to="/login" class="text-primary text-decoration-none">
                  Sign in instead
                </router-link>
              </div>

            </v-form>
          </v-card-text>

          <v-card-text class="d-flex align-center justify-center flex-wrap">
            <v-divider class="flex-grow-1 mx-2"></v-divider>
            <span class="mx-2">or</span>
            <v-divider class="flex-grow-1 mx-2"></v-divider>
          </v-card-text>

          <v-card-text class="d-flex justify-center">
            <v-btn class="ma-1" icon="mdi-facebook" color="#4267B2" variant="text"></v-btn>
            <v-btn class="ma-1" icon="mdi-twitter" color="#1DA1F2" variant="text"></v-btn>
            <v-btn class="ma-1" icon="mdi-github" color="#333" variant="text"></v-btn>
            <v-btn class="ma-1" icon="mdi-google" color="#DB4437" variant="text"></v-btn>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const agreeToTerms = ref(false)
const router = useRouter()

const register = () => {
  if (name.value && email.value && password.value && agreeToTerms.value) {
    console.log('Registering with:', name.value, email.value, password.value)
    router.push('/')
  }
}
</script>

<style scoped>
.v-card-title {
  font-size: 1.5rem !important font-weight: 500
}

.v-card-subtitle {
  opacity: 0.7
}

.v-btn {
  text-transform: none
}
</style>