<script setup>
import { useAppStore } from '@/stores/app'
import ThemeSelector from '@/components/ThemeSelector.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'
import UserPanel from '@/components/UserPanel.vue'

defineProps({
  title: { type: String, default: 'App Title' },
  tabItems: { type: Array, default: () => [] },
  navItems: { type: Array, default: () => [] },
})

const appStore = useAppStore()
</script>

<template>
  <v-app-bar app color="primary" density="compact">
    <v-app-bar-nav-icon tile variant="text" @click.stop="appStore.toggleNav()"></v-app-bar-nav-icon>
    <router-link to="/" class="d-flex align-center text-decoration-none" style="color: inherit">
      <img src="@/assets/logo.svg" />
      <v-toolbar-title>
        {{ appStore.appTitle || title }}
      </v-toolbar-title>
    </router-link>
    <v-spacer />
    <v-tabs align-with-title :items="tabItems" center-active />
    <v-spacer />
    <ThemeSelector />
    <LanguageSelector />
    <UserPanel />
  </v-app-bar>

  <v-navigation-drawer v-model="appStore.navOpen" :location="$vuetify.display.mobile ? 'bottom' : undefined"
    :rail="appStore.navRail">
    <v-list color="primary" density="compact" slim class="py-0" :items="navItems" item-props />

    <template v-slot:append>
      <v-list density="compact" slim class="py-0">
        <v-list-item :prependIcon="appStore.navRail ? 'mdi-forwardburger' : 'mdi-backburger'"
          :title="appStore.navRail ? 'Expand' : 'Collapse'" @click.stop="appStore.toggleNavRail()" />
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
