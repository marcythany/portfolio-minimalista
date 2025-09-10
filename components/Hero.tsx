'use client';

import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function Hero() {
	const { t } = useTranslation();
	const [imageError, setImageError] = useState(false);

	const scrollToContact = () => {
		const element = document.querySelector('#contact');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section
			id='home'
			className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16'
			aria-label={t('hero.name')}
		>
			<div className='max-w-4xl mx-auto text-center'>
				{/* Profile Image */}
				<div className='mb-8'>
					<div className='relative w-32 h-32 sm:w-40 sm:h-40 mx-auto'>
						{!imageError ? (
							<Image
								src='/images/profile/photo.jpg'
								alt={`${t('hero.name')} - Profile Photo`}
								fill
								className='rounded-full object-cover shadow-brasil border-4 border-white dark:border-gray-800'
								sizes='(max-width: 640px) 128px, 160px'
								onError={() => setImageError(true)}
								priority
							/>
						) : (
							<div className='w-full h-full rounded-full bg-gradient-brasil shadow-brasil flex items-center justify-center text-white text-4xl sm:text-5xl font-bold border-4 border-white dark:border-gray-800'>
								MS
							</div>
						)}
					</div>
				</div>

				{/* Main Content */}
				<div className='space-y-6'>
					<div>
						<p className='text-lg sm:text-xl text-muted-foreground mb-2'>
							{t('hero.greeting')}
						</p>
						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-brasil mb-4'>
							{t('hero.name')}
						</h1>
						<h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-2'>
							{t('hero.title')}
						</h2>
						<p className='text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto'>
							{t('hero.subtitle')}
						</p>
					</div>

					{/* Location */}
					<div className='flex items-center justify-center gap-2 text-muted-foreground'>
						<MapPin className='h-5 w-5' aria-hidden='true' />
						<span>{t('hero.location')}</span>
					</div>

					{/* CTA Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-6'>
						<Button
							variant='brasil'
							size='lg'
							onClick={scrollToContact}
							className='w-full sm:w-auto'
						>
							<Mail className='h-5 w-5' />
							{t('hero.cta')}
						</Button>
						<Button
							variant='outline'
							size='lg'
							className='w-full sm:w-auto'
							onClick={() => {
								// This would trigger CV download
								console.log('Download CV');
							}}
						>
							<Download className='h-5 w-5' />
							{t('hero.downloadCV')}
						</Button>
					</div>

					{/* Social Links */}
					<div className='flex justify-center gap-6 pt-8'>
						<a
							href='https://github.com/marcythany'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring rounded-md p-2'
							aria-label='GitHub Profile'
						>
							<Github className='h-6 w-6' />
						</a>
						<a
							href='https://www.linkedin.com/in/marcythany/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring rounded-md p-2'
							aria-label='LinkedIn Profile'
						>
							<Linkedin className='h-6 w-6' />
						</a>
						<a
							href='mailto:marcythany@gmail.com'
							className='text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring rounded-md p-2'
							aria-label='Send Email'
						>
							<Mail className='h-6 w-6' />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
