'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';
import { Brain, Briefcase, CheckCircle, Heart } from 'lucide-react';

export function About() {
	const { t } = useTranslation();

	const preferences = [
		t('about.preferences.items.0'),
		t('about.preferences.items.1'),
		t('about.preferences.items.2'),
		t('about.preferences.items.3'),
	];

	return (
		<section
			id='about'
			className='py-20 px-4 sm:px-6 lg:px-8 bg-muted/30'
			aria-labelledby='about-title'
		>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2
						id='about-title'
						className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-brasil mb-6'
					>
						{t('about.title')}
					</h2>
					<p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto'>
						{t('about.intro')}
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
					{/* Neurodiversity Card */}
					<div className='bg-card rounded-lg p-6 sm:p-8 shadow-lg border border-border hover:shadow-brasil transition-shadow duration-300'>
						<div className='flex items-center gap-4 mb-6'>
							<div className='p-3 bg-primary/10 rounded-full'>
								<Brain className='h-6 w-6 text-primary' aria-hidden='true' />
							</div>
							<h3 className='text-xl sm:text-2xl font-semibold text-foreground'>
								{t('about.neurodiversity.title')}
							</h3>
						</div>
						<p className='text-muted-foreground leading-relaxed'>
							{t('about.neurodiversity.description')}
						</p>

						{/* Strengths */}
						<div className='mt-6 space-y-3'>
							<div className='flex items-center gap-3 text-sm text-muted-foreground'>
								<CheckCircle className='h-4 w-4 text-primary flex-shrink-0' />
								<span>{t('about.strengthsList.0')}</span>
							</div>
							<div className='flex items-center gap-3 text-sm text-muted-foreground'>
								<CheckCircle className='h-4 w-4 text-primary flex-shrink-0' />
								<span>{t('about.strengthsList.1')}</span>
							</div>
							<div className='flex items-center gap-3 text-sm text-muted-foreground'>
								<CheckCircle className='h-4 w-4 text-primary flex-shrink-0' />
								<span>{t('about.strengthsList.2')}</span>
							</div>
						</div>
					</div>

					{/* Career Transition Card */}
					<div className='bg-card rounded-lg p-6 sm:p-8 shadow-lg border border-border hover:shadow-brasil transition-shadow duration-300'>
						<div className='flex items-center gap-4 mb-6'>
							<div className='p-3 bg-accent/10 rounded-full'>
								<Briefcase className='h-6 w-6 text-accent' aria-hidden='true' />
							</div>
							<h3 className='text-xl sm:text-2xl font-semibold text-foreground'>
								{t('about.transition.title')}
							</h3>
						</div>
						<p className='text-muted-foreground leading-relaxed'>
							{t('about.transition.description')}
						</p>

						{/* Current Role Highlights */}
						<div className='mt-6 space-y-3'>
							<div className='flex items-center gap-3 text-sm text-muted-foreground'>
								<CheckCircle className='h-4 w-4 text-accent flex-shrink-0' />
								<span>{t('about.experienceList.0')}</span>
							</div>
							<div className='flex items-center gap-3 text-sm text-muted-foreground'>
								<CheckCircle className='h-4 w-4 text-accent flex-shrink-0' />
								<span>{t('about.experienceList.1')}</span>
							</div>
							<div className='flex items-center gap-3 text-sm text-muted-foreground'>
								<CheckCircle className='h-4 w-4 text-accent flex-shrink-0' />
								<span>{t('about.experienceList.2')}</span>
							</div>
						</div>
					</div>

					{/* Work Preferences Card */}
					<div className='bg-card rounded-lg p-6 sm:p-8 shadow-lg border border-border hover:shadow-brasil transition-shadow duration-300'>
						<div className='flex items-center gap-4 mb-6'>
							<div className='p-3 bg-secondary/10 rounded-full'>
								<Heart
									className='h-6 w-6 text-secondary-foreground'
									aria-hidden='true'
								/>
							</div>
							<h3 className='text-xl sm:text-2xl font-semibold text-foreground'>
								{t('about.preferences.title')}
							</h3>
						</div>

						<ul className='space-y-4' role='list'>
							{preferences.map((preference, index) => (
								<li key={index} className='flex items-start gap-3'>
									<CheckCircle className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
									<span className='text-muted-foreground leading-relaxed'>
										{preference}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Professional Statement */}
				<div className='mt-16 text-center'>
					<div className='bg-gradient-brasil rounded-lg p-8 sm:p-12 text-white'>
						<blockquote className='text-lg sm:text-xl italic leading-relaxed max-w-4xl mx-auto'>
							&ldquo;{t('about.quote')}&rdquo;
						</blockquote>
						<cite className='block mt-6 text-white/90 font-medium'>
							— {t('about.quoteAuthor')}
						</cite>
					</div>
				</div>
			</div>
		</section>
	);
}
