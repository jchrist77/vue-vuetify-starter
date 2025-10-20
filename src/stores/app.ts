import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useTheme } from 'vuetify'
// import { useDark, useToggle } from '@vueuse/core'


export const useAppStore = defineStore('app', () => {
  const appTitle = 'Starter App'
  const currentUser = ref(null)
  const rememberPassword = ref(false)

  const navigation = ref(false)
  const toggleNavigation = () => navigation.value = !navigation.value
  const navigationItems = ref([
    { title: 'Home', props: { prependIcon: 'mdi-home', to: '/' } },
    { title: 'Users', props: { prependIcon: 'mdi-account-multiple', to: '/users' } },
    { title: 'About', props: { prependIcon: 'mdi-information', to: '/about' } },
  ])
  const tabItems = ref([
    { text: 'Home', prependIcon: 'mdi-home', to: '/' },
    { text: 'Users', prependIcon: 'mdi-account-multiple', to: '/users' },
    { text: 'About', prependIcon: 'mdi-information', to: '/about' },
  ])

  const themes = [
    { title: 'Light', value: 'light', icon: 'mdi-weather-sunny' },
    { title: 'Dark', value: 'dark', icon: 'mdi-weather-night' },
    { title: 'System', value: 'system', icon: 'mdi-theme-light-dark' },
  ]
  const $theme = useTheme()
  // const theme = computed(() => $theme.name.value)
  const theme = ref('system')
  const themeIcon = computed(() => theme.value === 'system' ? 'mdi-theme-light-dark' : theme.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night')
  const currentTheme = computed(() => theme.value === 'system' ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : theme.value)
  const setTheme = (_theme: string) => { $theme.change(_theme); theme.value = _theme }

  const languages = ref([
    { title: 'English', value: 'en', icon: 'circle-flags:us' },
    { title: 'Deutsch', value: 'de', icon: 'circle-flags:de' },
    { title: 'Français', value: 'fr', icon: 'circle-flags:fr' },
    { title: 'Español', value: 'es', icon: 'circle-flags:es' },
    { title: 'Italiano', value: 'it', icon: 'circle-flags:it' },
    { title: 'Русский', value: 'ru', icon: 'circle-flags:ru' },
  ])
  const language = ref('en')
  const languageIcon = computed(() => languages.value.find(lang => lang.value === language.value)?.icon || 'circle-flags:us')
  // const languageIcon = ref('mdi-translate')
  const setLanguage = (lang: string) => language.value = lang

  return {
    appTitle,
    currentUser,
    rememberPassword,
    // Navigation
    navigation,
    toggleNavigation,
    navigationItems,
    tabItems,
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
      pick: ['currentUser', 'rememberPassword', 'navigation', 'theme', 'language'],
    },
  })
