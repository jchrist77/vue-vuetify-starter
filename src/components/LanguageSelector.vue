<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <!-- <v-btn tile :icon="appStore.languageIcon" v-bind="props" /> -->
      <v-btn tile icon v-bind="props">
        <v-avatar density="compact" border size="small">
          <Icon :icon="appStore.languageIcon" height="24" />
        </v-avatar>
      </v-btn>
    </template>

    <v-list density="compact" class="py-0" :value="appStore.language">
      <v-list-item v-for="language in appStore.languages" :key="language.value" color="primary" slim
        :active="appStore.language === language.value" @click="appStore.setLanguage(language.value)">
        <template #prepend>
          <Icon :icon="language.icon" class="mr-6" />
        </template>
        <v-list-item-title>{{ language.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
