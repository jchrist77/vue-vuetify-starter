<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const email = ref('admin@demo.com')
const password = ref('admin')
const showPassword = ref(false)
const rememberMe = ref(false)
const router = useRouter()

const login = () => {
  if (email.value && password.value) {
    console.log('Logging in with:', email.value, password.value, 'Remember me:', rememberMe.value);
    router.push('/');
  }
};
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 pa-4">
          <v-card-title class="text-h5">Welcome to {{ appStore.appTitle }}! 👋</v-card-title>
          <v-card-subtitle>Please sign-in to your account and start the adventure</v-card-subtitle>

          <v-card-text>
            <v-alert color="primary" variant="tonal" class="mb-4">
              <div>Admin Email: <strong>admin@demo.com</strong> / Pass: <strong>admin</strong></div>
              <div>Client Email: <strong>client@demo.com</strong> / Pass: <strong>client</strong></div>
            </v-alert>

            <v-form @submit.prevent="login">
              <div class="text-subtitle-1 text-medium-emphasis">Email</div>
              <v-text-field v-model="email" density="compact" placeholder="Email address"
                variant="outlined"></v-text-field>

              <div class="d-flex align-center justify-space-between">
                <div class="text-subtitle-1 text-medium-emphasis">Password</div>
                <a class="text-caption text-decoration-none text-primary" href="#" rel="noopener noreferrer"
                  target="_blank">
                  Forgot Password?</a>
              </div>
              <v-text-field v-model="password" :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :type="showPassword ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                variant="outlined" @click:append-inner="showPassword = !showPassword"></v-text-field>

              <v-checkbox v-model="appStore.rememberPassword" label="Remember me" class="mt-n4"></v-checkbox>

              <v-btn block class="mb-4" color="primary" size="large" @click="login">
                Login
              </v-btn>

              <div class="text-center">
                New on our platform?
                <router-link to="/register" class="text-primary text-decoration-none">
                  Create an account
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

<style scoped>
.v-card-title {
  font-size: 1.5rem !important;
  font-weight: 500;
}

.v-card-subtitle {
  opacity: 0.7;
}

.v-btn {
  text-transform: none;
}
</style>
