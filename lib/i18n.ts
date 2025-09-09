export const defaultLocale = 'pt-BR' as const;
export const locales = ['pt-BR', 'en'] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
	'pt-BR': 'Português',
	en: 'English',
};

export function getLocaleFromPathname(pathname: string): Locale {
	const segments = pathname.split('/');
	const potentialLocale = segments[1] as Locale;

	if (locales.includes(potentialLocale)) {
		return potentialLocale;
	}

	return defaultLocale;
}

export function removeLocaleFromPathname(pathname: string): string {
	const segments = pathname.split('/');
	const potentialLocale = segments[1] as Locale;

	if (locales.includes(potentialLocale)) {
		return '/' + segments.slice(2).join('/');
	}

	return pathname;
}
