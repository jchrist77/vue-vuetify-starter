import { defineConfig, mergeConfig } from 'vitest/config'
import vitestConfig from './vitest.config'

export default mergeConfig(vitestConfig, defineConfig({
  test: {
    include: [
      'tests/e2e/**/*.{test,spec}.ts',
    ],
    browser: {
      enabled: true,
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
}))