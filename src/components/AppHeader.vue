<script setup>
import { useAppStore } from '@/stores/app'
import LanguageSelector from '@/components/LanguageSelector.vue'
import ThemeSelector from '@/components/ThemeSelector.vue'
import NotificationsPanel from '@/components/NotificationsPanel.vue'
import UserPanel from '@/components/UserPanel.vue'

defineProps({
  title: { type: String, default: 'App Title' },
  tabs: { type: Array, default: () => [] },
  nav: { type: Array, default: () => [] },
})

const appStore = useAppStore()
</script>

<template>
  <v-app-bar app color="primary" density="compact">
    <v-app-bar-nav-icon tile variant="text" @click.stop="appStore.toggleNavigation()"></v-app-bar-nav-icon>
    <router-link to="/" class="d-flex align-center text-decoration-none" style="color: inherit">
      <img src="@/assets/logo.svg" />
      <v-toolbar-title>
        {{ appStore.appTitle || title }}
      </v-toolbar-title>
    </router-link>
    <v-spacer />
    <v-tabs align-with-title :items="tabs" center-active />
    <v-spacer />
    <v-btn tile icon="mdi-magnify" />
    <LanguageSelector />
    <ThemeSelector />
    <NotificationsPanel />
    <UserPanel />
  </v-app-bar>

  <v-navigation-drawer v-model="appStore.navigation" :location="$vuetify.display.mobile ? 'bottom' : undefined">
    <v-list color="primary" density="compact" slim class="py-0" :items="nav" />
  </v-navigation-drawer>
</template>
