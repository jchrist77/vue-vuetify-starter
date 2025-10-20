<script setup lang="ts">
// Root component - minimal setup
import AppHeader from '@/components/AppHeader.vue'
import { useAppStore } from './stores/app'

const appStore = useAppStore()
</script>

<template>
  <v-app :theme="appStore.currentTheme">
    <AppHeader title="Vue Starter App" :tabs="appStore.tabItems" :nav="appStore.navigationItems" />

    <v-main color="primary" transition="fade-transition">
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
/* Application-level styles go here */
</style>
