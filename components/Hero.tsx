'use client';

import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/hooks/useTranslation';
import {
	Download,
	Github,
	Linkedin,
	Mail,
	MapPin,
	Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Hero() {
	const { t, locale } = useTranslation();
	const [imageError, setImageError] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const handleMouseMove = (e: React.MouseEvent) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setMousePosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	const scrollToContact = () => {
		const element = document.querySelector('#contact');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section
			id='home'
			className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden'
			onMouseMove={handleMouseMove}
			aria-label={t('hero.name')}
		>
			{/* Enhanced Dynamic Background with Mouse Interaction */}
			<div
				className='absolute inset-0 opacity-40 dark:opacity-60'
				style={{
					background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.25) 0%, transparent 60%)`,
				}}
			/>

			{/* Enhanced Floating Elements with Better Visibility */}
			<div className='absolute top-20 left-10 w-20 h-20 bg-primary/20 dark:bg-primary/30 rounded-full blur-xl animate-pulse shadow-lg' />
			<div className='absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-xl animate-pulse delay-1000 shadow-lg' />
			<div className='absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 dark:bg-accent/30 rounded-full blur-lg animate-bounce delay-500 shadow-lg' />

			<div
				className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
				}`}
			>
				{/* Profile Image */}
				<div className='mb-8 relative'>
					<div className='relative w-32 h-32 sm:w-40 sm:h-40 mx-auto group'>
						{/* Animated Ring */}
						<div
							className='absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin opacity-20 group-hover:opacity-40 transition-opacity duration-300'
							style={{ padding: '4px' }}
						>
							<div className='w-full h-full rounded-full bg-background' />
						</div>

						{!imageError ? (
							<Image
								src='/images/profile/photo.jpg'
								alt={`${t('hero.name')} - Professional Profile Photo`}
								fill
								className='rounded-full object-cover shadow-2xl border-4 border-white/80 dark:border-gray-800/80 relative z-10 group-hover:scale-105 transition-all duration-300'
								sizes='(max-width: 640px) 128px, 160px'
								onError={() => setImageError(true)}
								priority
							/>
						) : (
							<div className='w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl flex items-center justify-center text-white text-4xl sm:text-5xl font-bold border-4 border-white/80 dark:border-gray-800/80 relative z-10'>
								MS
							</div>
						)}

						{/* Status Indicator */}
						<div className='absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 z-20 animate-pulse' />
					</div>

					{/* Enhanced Sparkle Effect with Better Contrast */}
					<Sparkles className='absolute -top-2 -right-2 h-6 w-6 text-yellow-500 dark:text-yellow-400 animate-bounce drop-shadow-lg' />
				</div>

				{/* Typography */}
				<div className='space-y-6'>
					<div>
						<p className='text-lg sm:text-xl text-muted-foreground mb-2 animate-fade-in-up'>
							{t('hero.greeting')}
						</p>
						<h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 animate-fade-in-up delay-200'>
							<span className='bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'>
								{t('hero.name')}
							</span>
						</h1>
						<h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-2 animate-fade-in-up delay-400'>
							{t('hero.title')}
						</h2>
						<p className='text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-600 leading-relaxed'>
							{t('hero.subtitle')}
						</p>
					</div>

					{/* Location with Styling */}
					<div className='flex items-center justify-center gap-2 text-muted-foreground animate-fade-in-up delay-800'>
						<MapPin className='h-5 w-5 text-primary' aria-hidden='true' />
						<span className='text-sm sm:text-base'>{t('hero.location')}</span>
					</div>

					{/* CTA Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in-up delay-1000'>
						<Button
							variant='brasil'
							size='lg'
							onClick={scrollToContact}
							className='w-full sm:w-auto group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'
						>
							<div className='absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300' />
							<Mail className='h-5 w-5 mr-2 group-hover:rotate-12 transition-transform' />
							{t('hero.cta')}
						</Button>
						<Button
							variant='outline'
							size='lg'
							className='w-full sm:w-auto group border-2 hover:border-primary transition-all duration-300'
							onClick={() => {
								const cvPath = locale.startsWith('pt')
									? '/cv-marcel-sobral-pt.pdf'
									: '/cv-marcel-sobral-en.pdf';
								window.open(cvPath, '_blank');
							}}
						>
							<Download className='h-5 w-5 mr-2 group-hover:animate-bounce' />
							{t('hero.downloadCV')}
						</Button>
					</div>

					{/* Social Links */}
					<div className='flex justify-center gap-6 pt-8 animate-fade-in-up delay-1200'>
						{[
							{
								href: 'https://github.com/marcythany',
								icon: Github,
								label: 'GitHub Profile',
								color: 'hover:text-gray-800 dark:hover:text-gray-200', // Better contrast
							},
							{
								href: 'https://www.linkedin.com/in/marcythany/',
								icon: Linkedin,
								label: 'LinkedIn Profile',
								color: 'hover:text-blue-700 dark:hover:text-blue-400', // Better contrast
							},
							{
								href: 'mailto:marcythany@gmail.com',
								icon: Mail,
								label: 'Send Email',
								color: 'hover:text-red-600 dark:hover:text-red-400', // Better contrast
							},
						].map(({ href, icon: Icon, label, color }) => (
							<a
								key={label}
								href={href}
								target='_blank'
								rel='noopener noreferrer'
								className={`group relative p-3 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary`}
								aria-label={label}
							>
								<Icon className='h-6 w-6 text-muted-foreground group-hover:text-current transition-colors duration-300' />
								<div className='absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
