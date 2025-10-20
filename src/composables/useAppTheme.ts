import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useTheme as useVuetifyTheme } from 'vuetify'

export type AppTheme = 'light' | 'dark' | 'system'

export function useAppTheme() {
  const vuetifyTheme = useVuetifyTheme()
  const theme = ref<AppTheme>('system')

  const applyTheme = (newTheme: AppTheme) => {
    let themeToApply: 'light' | 'dark'

    if (newTheme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      themeToApply = systemPrefersDark ? 'dark' : 'light'
    } else {
      themeToApply = newTheme
    }
    vuetifyTheme.global.name.value = themeToApply
  }

  const setTheme = (newTheme: AppTheme) => {
    theme.value = newTheme
    localStorage.setItem('app-theme', newTheme)
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const handleChange = () => {
    if (theme.value === 'system') {
      applyTheme('system')
    }
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('app-theme') as AppTheme
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      theme.value = savedTheme
    }

    mediaQuery.addEventListener('change', handleChange)
  })

  onUnmounted(() => {
    mediaQuery.removeEventListener('change', handleChange)
  })

  watch(theme, (newTheme) => {
    applyTheme(newTheme)
  }, { immediate: true })

  return {
    theme,
    setTheme,
    currentThemeName: vuetifyTheme.global.name,
  }
}
