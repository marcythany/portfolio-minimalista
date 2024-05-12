export type Locale = 'pt-br' | 'en' | string

interface Fallback {
  [key: string]: string
}
type PathNames = {
  [key: string]: {
    [locale in Locale]: string
  }
}

export const defaultLocale: string = 'pt-br'
export const locales = ['pt-br', 'en']
export const fallback: Fallback = {
  en: 'pt-br',
}

export function getLocaleFromUrl(url: string | undefined): string {
  if (url === undefined) return defaultLocale
  const parts = url.split('/').filter(function (el) {
    return el !== ''
  })
  let match = ''
  parts.forEach(part => {
    if (locales.includes(part)) match = part
  })
  if (match) return match
  return defaultLocale
}
