'use client';

import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import { Locale, defaultLocale } from '../constants/i18n';

interface LocaleContextType {
	locale: Locale;
	switchLocale: (newLocale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
	children: ReactNode;
	initialLocale?: Locale;
}

export function LocaleProvider({
	children,
	initialLocale = defaultLocale,
}: LocaleProviderProps) {
	const [locale, setLocale] = useState<Locale>(initialLocale);

	const switchLocale = (newLocale: Locale) => {
		setLocale(newLocale);
		if (typeof window !== 'undefined') {
			localStorage.setItem('preferred-locale', newLocale);
			// Dispatch custom event to notify other components
			window.dispatchEvent(
				new CustomEvent('localeChange', { detail: newLocale })
			);
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Load saved locale from localStorage on mount
			const savedLocale = localStorage.getItem('preferred-locale') as Locale;
			if (savedLocale && savedLocale !== locale) {
				setLocale(savedLocale);
			}

			// Listen for storage changes from other tabs
			const handleStorageChange = (e: StorageEvent) => {
				if (e.key === 'preferred-locale' && e.newValue) {
					setLocale(e.newValue as Locale);
				}
			};

			// Listen for custom locale change events
			const handleLocaleChange = (e: CustomEvent) => {
				setLocale(e.detail as Locale);
			};

			window.addEventListener('storage', handleStorageChange);
			window.addEventListener(
				'localeChange',
				handleLocaleChange as EventListener
			);

			return () => {
				window.removeEventListener('storage', handleStorageChange);
				window.removeEventListener(
					'localeChange',
					handleLocaleChange as EventListener
				);
			};
		}
	}, [locale]);

	return (
		<LocaleContext.Provider value={{ locale, switchLocale }}>
			{children}
		</LocaleContext.Provider>
	);
}

export function useLocale() {
	const context = useContext(LocaleContext);
	if (context === undefined) {
		throw new Error('useLocale must be used within a LocaleProvider');
	}
	return context;
}
