import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useTheme } from 'vuetify'
import type { AppNavItem, AppTabItem, AppTheme } from '@/types'

export const useAppStore = defineStore('app', () => {
  const appTitle = 'Starter App'

  // Navigation
  const navOpen = ref(false)
  const navRail = ref(false)
  const toggleNav = () => navOpen.value = !navOpen.value
  const toggleNavRail = () => navRail.value = !navRail.value
  const navItems: Ref<AppNavItem[]> = ref([
    { title: 'Home', prependIcon: 'mdi-home', to: '/' },
    { title: 'About', prependIcon: 'mdi-information', to: '/about' },
  ])
  const tabItems: Ref<AppTabItem[]> = ref([
    { text: 'Home', prependIcon: 'mdi-home', to: '/' },
    { text: 'About', prependIcon: 'mdi-information', to: '/about' },
  ])

  // Themes
  const themes: AppTheme[] = [
    { id: 'light', title: 'Light', icon: 'mdi-weather-sunny' },
    { id: 'dark', title: 'Dark', icon: 'mdi-weather-night' },
    { id: 'system', title: 'System', icon: 'mdi-theme-light-dark' },
  ]
  const $theme = useTheme()
  const theme = ref('system')
  const themeIcon = computed(() => theme.value === 'system' ? 'mdi-theme-light-dark' : theme.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night')
  const currentTheme = computed(() => theme.value === 'system' ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : theme.value)
  const setTheme = (_theme: string) => { $theme.change(_theme); theme.value = _theme }

  return {
    appTitle,
    // Navigation
    navItems,
    tabItems,
    navOpen,
    navRail,
    toggleNav,
    toggleNavRail,

    // Themes
    themes,
    theme,
    themeIcon,
    currentTheme,
    setTheme,
  }
},
  {
    persist: {
      storage: sessionStorage,
      pick: ['navOpen', 'navRail', 'theme'],
    },
  })
