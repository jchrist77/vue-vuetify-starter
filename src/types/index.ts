export interface AppTheme {
  id: string
  title: string
  icon: string
}

export interface AppNavItem {
  title: string
  prependIcon?: string
  appendIcon?: string
  to?: string
}

export interface AppTabItem {
  text: string
  prependIcon?: string
  appendIcon?: string
  to?: string
}
