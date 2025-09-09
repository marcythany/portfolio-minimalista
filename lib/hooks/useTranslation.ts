'use client';

import { useLocale } from '../contexts/LocaleContext';
import { defaultLocale } from '../i18n';
import { translations } from '../translations';

type NestedKeyOf<ObjectType extends object> = {
	[Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
		? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
		: `${Key}`;
}[keyof ObjectType & (string | number)];

type TranslationKeys = NestedKeyOf<(typeof translations)['pt-BR']>;

export function useTranslation() {
	const { locale, switchLocale } = useLocale();

	const t = (key: TranslationKeys): string => {
		const keys = key.split('.');
		let value: Record<string, unknown> | string = translations[locale];

		for (const k of keys) {
			if (typeof value === 'object' && value !== null && k in value) {
				value = value[k] as Record<string, unknown> | string;
			} else {
				// Fallback to default locale if key not found
				value = translations[defaultLocale];
				for (const fallbackKey of keys) {
					if (
						typeof value === 'object' &&
						value !== null &&
						fallbackKey in value
					) {
						value = value[fallbackKey] as Record<string, unknown> | string;
					} else {
						return key; // Return key if not found in fallback
					}
				}
				break;
			}
		}

		return typeof value === 'string' ? value : key;
	};

	return { t, locale, switchLocale };
}
