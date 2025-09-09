'use client';

import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { localeNames } from '@/lib/i18n';
import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
	const { t, locale, switchLocale } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => {
		setIsDark(!isDark);
		document.documentElement.classList.toggle('dark');
	};

	const toggleLanguage = () => {
		const newLocale = locale === 'pt-BR' ? 'en' : 'pt-BR';
		switchLocale(newLocale);
	};

	const navItems = [
		{ key: 'nav.home', href: '#home' },
		{ key: 'nav.about', href: '#about' },
		{ key: 'nav.skills', href: '#skills' },
		{ key: 'nav.projects', href: '#projects' },
		{ key: 'nav.timeline', href: '#timeline' },
		{ key: 'nav.contact', href: '#contact' },
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsMenuOpen(false);
		}
	};

	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}
					<div className='flex-shrink-0'>
						<button
							onClick={() => scrollToSection('#home')}
							className='text-xl font-bold text-gradient-brasil focus:outline-none focus:ring-2 focus:ring-ring rounded-md px-2 py-1'
							aria-label={t('nav.home')}
						>
							Marcel Sobral
						</button>
					</div>

					{/* Desktop Navigation */}
					<nav
						className='hidden md:flex items-center space-x-8'
						role='navigation'
					>
						{navItems.map((item) => (
							<button
								key={item.key}
								onClick={() => scrollToSection(item.href)}
								className='text-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring rounded-md px-2 py-1'
							>
								{t(item.key as 'nav.home')}
							</button>
						))}
					</nav>

					{/* Desktop Controls */}
					<div className='hidden md:flex items-center space-x-4'>
						<Button
							variant='ghost'
							size='icon'
							onClick={toggleTheme}
							aria-label={
								isDark ? 'Switch to light mode' : 'Switch to dark mode'
							}
						>
							{isDark ? (
								<Sun className='h-4 w-4' />
							) : (
								<Moon className='h-4 w-4' />
							)}
						</Button>

						<Button
							variant='ghost'
							size='sm'
							onClick={toggleLanguage}
							className='flex items-center gap-2'
							aria-label={`Switch to ${
								locale === 'pt-BR' ? 'English' : 'Portuguese'
							}`}
						>
							<Globe className='h-4 w-4' />
							{localeNames[locale]}
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<div className='md:hidden'>
						<Button
							variant='ghost'
							size='icon'
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={isMenuOpen}
						>
							{isMenuOpen ? (
								<X className='h-6 w-6' />
							) : (
								<Menu className='h-6 w-6' />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className='md:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border'>
							{navItems.map((item) => (
								<button
									key={item.key}
									onClick={() => scrollToSection(item.href)}
									className='block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200'
								>
									{t(item.key as 'nav.home')}
								</button>
							))}

							<div className='flex items-center justify-between pt-4 border-t border-border mt-4'>
								<Button
									variant='ghost'
									size='sm'
									onClick={toggleTheme}
									className='flex items-center gap-2'
								>
									{isDark ? (
										<Sun className='h-4 w-4' />
									) : (
										<Moon className='h-4 w-4' />
									)}
									{isDark ? 'Light' : 'Dark'}
								</Button>

								<Button
									variant='ghost'
									size='sm'
									onClick={toggleLanguage}
									className='flex items-center gap-2'
								>
									<Globe className='h-4 w-4' />
									{localeNames[locale]}
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
