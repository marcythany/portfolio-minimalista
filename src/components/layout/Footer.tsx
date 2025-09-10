'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
	const { t } = useTranslation();

	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			icon: Github,
			href: 'https://github.com/marcythany',
			label: 'GitHub',
		},
		{
			icon: Linkedin,
			href: 'https://www.linkedin.com/in/marcythany/',
			label: 'LinkedIn',
		},
	];

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className='bg-card border-t border-border'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{/* Brand */}
					<div className='space-y-4'>
						<button
							onClick={scrollToTop}
							className='text-2xl font-bold text-gradient-brasil focus:outline-none focus:ring-2 focus:ring-ring rounded-md px-2 py-1'
						>
							Marcel Sobral
						</button>
						<p className='text-muted-foreground leading-relaxed'>
							{t('footer.description')}
						</p>
					</div>

					{/* Quick Links & Social */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold text-foreground'>
							{t('footer.quickLinks')}
						</h3>
						<nav className='flex flex-col space-y-2'>
							{[
								{ key: 'nav.about', href: '#about' },
								{ key: 'nav.skills', href: '#skills' },
								{ key: 'nav.projects', href: '#projects' },
								{ key: 'nav.timeline', href: '#timeline' },
								{ key: 'nav.contact', href: '#contact' },
							].map((item) => (
								<button
									key={item.key}
									onClick={() => {
										const element = document.querySelector(item.href);
										if (element) {
											element.scrollIntoView({ behavior: 'smooth' });
										}
									}}
									className='text-muted-foreground hover:text-primary transition-colors duration-200 text-left focus:outline-none focus:ring-2 focus:ring-ring rounded-md px-2 py-1'
								>
									{t(item.key as 'nav.about')}
								</button>
							))}
						</nav>

						<div className='flex space-x-4 pt-4'>
							{socialLinks.map((social) => {
								const Icon = social.icon;
								return (
									<a
										key={social.label}
										href={social.href}
										target='_blank'
										rel='noopener noreferrer'
										className='p-2 text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring rounded-md'
										aria-label={social.label}
									>
										<Icon className='h-5 w-5' />
									</a>
								);
							})}
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className='mt-12 pt-8 border-t border-border'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
						<div className='text-muted-foreground text-sm'>
							© {currentYear} Marcel Sobral. {t('footer.rights')}
						</div>

						<div className='flex items-center gap-2 text-muted-foreground text-sm'>
							<span>{t('footer.madeWith')}</span>
							<span className='text-primary font-medium'>
								{t('footer.kiloCodeAgent')}
							</span>
							<span>{t('footer.and')}</span>
							<span className='text-primary font-medium'>
								{t('techStack.nextjs')}
							</span>
						</div>
					</div>
				</div>

				{/* Accessibility Statement */}
				<div className='mt-8 pt-6 border-t border-border'>
					<div className='text-center'>
						<p className='text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
							{t('footer.accessibilityStatement')}
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
