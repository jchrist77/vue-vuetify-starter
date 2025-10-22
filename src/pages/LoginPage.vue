<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const appStore = useAppStore()

const email = ref('admin@demo.com')
const password = ref('admin')
const showPassword = ref(false)
const rememberMe = ref(false)

const login = () => {
  if (email.value && password.value) {
    console.log('Logging in with:', email.value, password.value, 'Remember me:', rememberMe.value)

    const user = email.value === 'admin@demo.com' ? {
      id: 1,
      name: 'John Doe',
      email: email.value,
      avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
      role: 'Admin'
    } : {
      id: 2,
      name: 'Jane Doe',
      email: email.value,
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      role: 'User'
    }
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
          <v-card-title class="text-h5">Welcome to {{ appStore.appTitle }}! 👋</v-card-title>
          <v-card-subtitle>Login with your account and start the adventure</v-card-subtitle>

          <v-card-text>
            <v-alert color="primary" variant="tonal" class="mb-4">
              <div @click="email = 'admin@demo.com'; password = 'admin'" class="cursor-pointer">
                Admin email: <strong>admin@demo.com</strong> / Password: <strong>admin</strong>
              </div>
              <div @click="email = 'user@demo.com'; password = 'user'" class="cursor-pointer">
                User email: <strong>user@demo.com</strong> / Password: <strong>user</strong>
              </div>
            </v-alert>

            <v-form @submit.prevent="login">
              <div class="text-subtitle-1 text-medium-emphasis">Email</div>
              <v-text-field v-model="email" density="compact" placeholder="Email address" variant="outlined" />

              <div class="d-flex align-center justify-space-between">
                <div class="text-subtitle-1 text-medium-emphasis">Password</div>
                <a class="text-decoration-none text-primary" href="#" rel="noopener noreferrer" target="_blank">
                  Forgot Password?</a>
              </div>
              <v-text-field v-model="password" :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :type="showPassword ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                variant="outlined" @click:append-inner="showPassword = !showPassword" />

              <v-checkbox v-model="appStore.rememberPassword" label="Remember me" class="mt-n4" />

              <v-btn block class="mb-4" color="primary" size="large" @click="login" text="Login"
                :disabled="!email || !password" />

              <div class="text-center">
                No account yet?
                <router-link to="/register" class="text-primary text-decoration-none"> Register </router-link>
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