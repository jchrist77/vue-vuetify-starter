<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const appStore = useAppStore()


const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const acceptTerms = ref(false)

const register = () => {
  if (name.value && email.value && password.value && acceptTerms.value && password.value === confirmPassword.value) {
    console.log('Registering with:', name.value, email.value, password.value)
    const user = { id: 1, name: name.value, email: email.value, password: password.value }
    appStore.setUser(user)
    router.push('/')
  }
}
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 pa-4">
          <v-card-title class="text-h5">Register 🚀</v-card-title>
          <v-card-subtitle>Create your new account and start the adventure</v-card-subtitle>

          <v-card-text>
            <v-form @submit.prevent="register">
              <div class="text-subtitle-1 text-medium-emphasis">Username</div>
              <v-text-field v-model="name" density="compact" placeholder="Enter your username" variant="outlined" />

              <div class="text-subtitle-1 text-medium-emphasis">Email</div>
              <v-text-field v-model="email" density="compact" placeholder="Enter your email" variant="outlined" />

              <div class="text-subtitle-1 text-medium-emphasis">Password</div>
              <v-text-field v-model="password" :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :type="showPassword ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                variant="outlined" @click:append-inner="showPassword = !showPassword" />
              <v-text-field v-model="confirmPassword"
                :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :type="showConfirmPassword ? 'text' : 'password'" density="compact" placeholder="Confirm your password"
                variant="outlined" @click:append-inner="showConfirmPassword = !showConfirmPassword"
                :rules="[() => password === confirmPassword || 'Passwords do not match']" />


              <v-checkbox v-model="acceptTerms" class="mt-n4">
                <template v-slot:label>
                  I agree to the
                  <router-link to="#" class="text-primary text-decoration-none mx-1">
                    Privacy Policy & Terms of Use
                  </router-link>
                </template>
              </v-checkbox>

              <v-btn block class="mb-4" color="primary" size="large" @click="register" text="Register"
                :disabled="!name || !email || !password || !acceptTerms || password !== confirmPassword" />

              <div class="text-center">
                Already have an account?
                <router-link to="/login" class="text-primary text-decoration-none"> Login </router-link>
              </div>

            </v-form>
          </v-card-text>

          <v-card-text class="d-flex align-center">
            <v-divider />
            <span class="text-caption text-uppercase mx-2"> or </span>
            <v-divider />
          </v-card-text>

          <v-card-text class="d-flex justify-center">
            <v-btn density="compact" size="x-large" class="ma-1" icon="mdi-facebook" color="#4267B2" variant="text" />
            <v-btn density="compact" size="x-large" class="ma-1" icon="mdi-twitter" color="#1DA1F2" variant="text" />
            <v-btn density="compact" size="x-large" class="ma-1" icon="mdi-github" color="#333" variant="text" />
            <v-btn density="compact" size="x-large" class="ma-1" icon="mdi-google" color="#DB4437" variant="text" />
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>