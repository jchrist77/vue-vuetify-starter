import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useTheme } from 'vuetify'
import type { AppNavItem, AppTabItem, AppTheme, User } from '@/types'

export const useAppStore = defineStore('app', () => {
  const appTitle = 'Starter App'

  // User
  const user = ref(null as User | null)
  const rememberPassword = ref(false)
  const userInitials = computed(() => user.value?.name.split(' ').map(name => name[0]).join('') || '')
  const setUser = (_user: User | null) => user.value = _user
  // onAuthStateChanged(auth, (_user => user.value = _user)

  // Navigation
  const navOpen = ref(false)
  const navRail = ref(false)
  const toggleNav = () => navOpen.value = !navOpen.value
  const toggleNavRail = () => navRail.value = !navRail.value
  const navItems: AppNavItem[] = [
    { title: 'Home', prependIcon: 'mdi-home', to: '/' },
    { title: 'About', prependIcon: 'mdi-information', to: '/about' },
  ]
  const tabItems: AppTabItem[] = [
    { text: 'Home', prependIcon: 'mdi-home', to: '/' },
    { text: 'About', prependIcon: 'mdi-information', to: '/about' },
  ]

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

  // Languages
  const languages = ref([
    { id: 'en', title: 'English', icon: 'circle-flags:us' },
    { id: 'de', title: 'Deutsch', icon: 'circle-flags:de' },
    { id: 'fr', title: 'Français', icon: 'circle-flags:fr' },
    { id: 'es', title: 'Español', icon: 'circle-flags:es' },
    { id: 'it', title: 'Italiano', icon: 'circle-flags:it' },
    { id: 'ru', title: 'Русский', icon: 'circle-flags:ru' },
  ])
  const language = ref('en')
  const languageIcon = computed(() => languages.value.find(lang => lang.id === language.value)?.icon || 'circle-flags:us')
  const setLanguage = (lang: string) => language.value = lang

  return {
    appTitle,
    // User
    user,
    rememberPassword,
    userInitials,
    setUser,
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
    // Languages
    languages,
    language,
    languageIcon,
    setLanguage,
  }
},
  {
    persist: {
      storage: sessionStorage,
      pick: ['navOpen', 'navRail', 'theme', 'language', 'user'],
    },
  })
