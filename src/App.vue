<script setup lang="ts">
// Root component - minimal setup
import AppHeader from '@/components/AppHeader.vue'
import { useAppStore } from './stores/app'

const appStore = useAppStore()
</script>

<template>
  <v-app :theme="appStore.currentTheme">
    <AppHeader :title="appStore.appTitle" :tabItems="appStore.tabItems" :navItems="appStore.navItems" />

    <v-main transition="fade-transition">
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
/* Application-level styles go here */
</style>
