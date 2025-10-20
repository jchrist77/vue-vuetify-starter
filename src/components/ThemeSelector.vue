<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn tile :icon="appStore.themeIcon" v-bind="props" />
    </template>

    <v-list density="compact" class="py-0" :value="appStore.theme">
      <v-list-item v-for="theme in appStore.themes" :key="theme.value" color="primary" slim
        :active="appStore.theme === theme.value" @click="appStore.setTheme(theme.value)">
        <template #prepend>
          <v-icon>{{ theme.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ theme.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
