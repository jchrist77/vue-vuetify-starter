import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAppStore } from '@/stores/app'

// Mock the 'vuetify' module
vi.mock('vuetify', () => ({
  useTheme: () => ({
    change: vi.fn(),
    name: { value: 'light' },
  }),
}));

describe('App Store', () => {
  beforeEach(() => {
    // Set up a fresh Pinia store for each test
    setActivePinia(createPinia())
  })

  it('should have correct initial state for theme and language', () => {
    const store = useAppStore()
    expect(store.theme).toBe('system')
    expect(store.language).toBe('en')
  })

  it('should have the correct navigation items', () => {
    const store = useAppStore()
    expect(store.navigationItems).toEqual([
      { title: 'Home', props: { prependIcon: 'mdi-home', to: '/' } },
      { title: 'Users', props: { prependIcon: 'mdi-account-multiple', to: '/users' } },
      { title: 'About', props: { prependIcon: 'mdi-information', to: '/about' } },
    ])
  })

  it('should toggle navigation', () => {
    const store = useAppStore()
    expect(store.navigation).toBe(false)
    store.toggleNavigation()
    expect(store.navigation).toBe(true)
    store.toggleNavigation()
    expect(store.navigation).toBe(false)
  })

  it('should update theme when setTheme is called', () => {
    const store = useAppStore()
    store.setTheme('dark')
    expect(store.theme).toBe('dark')
  })

  it('should update language when setLanguage is called', () => {
    const store = useAppStore()
    store.setLanguage('fr')
    expect(store.language).toBe('fr')
  })

  it('should return correct themeIcon based on theme', () => {
    const store = useAppStore()
    expect(store.themeIcon).toBe('mdi-theme-light-dark') // initial 'system'

    store.setTheme('light')
    expect(store.themeIcon).toBe('mdi-weather-sunny')

    store.setTheme('dark')
    expect(store.themeIcon).toBe('mdi-weather-night')
  })

  // Test for currentTheme computed property
  it('should return correct currentTheme', () => {
    const store = useAppStore();

    // Test with theme as 'light'
    store.setTheme('light');
    expect(store.currentTheme).toBe('light');

    // Test with theme as 'dark'
    store.setTheme('dark');
    expect(store.currentTheme).toBe('dark');
  });
})
