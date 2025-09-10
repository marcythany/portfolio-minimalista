'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';
import {
	CheckCircle,
	Code,
	ExternalLink,
	Lightbulb,
	Palette,
} from 'lucide-react';
import { useState } from 'react';

interface Skill {
	name: string;
	level: number;
	category: 'frontend' | 'tools' | 'concepts';
	description?: string;
	certificationUrl?: string;
}

export function Skills() {
	const { t } = useTranslation();
	const [activeCategory, setActiveCategory] = useState<
		'frontend' | 'tools' | 'concepts'
	>('frontend');

	const skills: Skill[] = [
		// Frontend
		{
			name: t('skills.items.react'),
			level: 85,
			category: 'frontend',
			description: 'Hooks, Context API, Performance optimization',
		},
		{
			name: t('skills.items.typescript'),
			level: 80,
			category: 'frontend',
			description: 'Type safety, Generics, Advanced patterns',
		},
		{
			name: t('skills.items.nextjs'),
			level: 75,
			category: 'frontend',
			description: 'SSR, SSG, App Router, API Routes',
		},
		{
			name: t('skills.items.tailwind'),
			level: 90,
			category: 'frontend',
			description: 'Custom design systems, Responsive design',
		},

		// Tools
		{
			name: t('skills.items.git'),
			level: 70,
			category: 'tools',
			description: 'Version control, Branching strategies',
		},
		{
			name: t('skills.items.figma'),
			level: 65,
			category: 'tools',
			description: 'Design systems, Prototyping',
		},
		{
			name: t('skills.items.storybook'),
			level: 75,
			category: 'tools',
			description: 'Component documentation, Testing',
		},

		// Concepts
		{
			name: t('skills.items.accessibility'),
			level: 85,
			category: 'concepts',
			description: 'WCAG 2.1 AA compliance, Screen readers',
		},
		{
			name: t('skills.items.responsive'),
			level: 90,
			category: 'concepts',
			description: 'Mobile-first, Flexible layouts',
		},
		{
			name: t('skills.items.performance'),
			level: 75,
			category: 'concepts',
			description: 'Core Web Vitals, Optimization',
		},
		{
			name: t('skills.items.seo'),
			level: 70,
			category: 'concepts',
			description: 'Meta tags, Structured data',
		},
	];

	const categories = [
		{ key: 'frontend' as const, icon: Code, color: 'text-primary' },
		{ key: 'tools' as const, icon: Palette, color: 'text-accent' },
		{
			key: 'concepts' as const,
			icon: Lightbulb,
			color: 'text-secondary-foreground',
		},
	];

	const filteredSkills = skills.filter(
		(skill) => skill.category === activeCategory
	);

	return (
		<section
			id='skills'
			className='py-20 px-4 sm:px-6 lg:px-8'
			aria-labelledby='skills-title'
		>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2
						id='skills-title'
						className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-brasil mb-6'
					>
						{t('skills.title')}
					</h2>
				</div>

				{/* Category Tabs */}
				<div className='flex flex-wrap justify-center gap-4 mb-12'>
					{categories.map(({ key, icon: Icon, color }) => (
						<button
							key={key}
							onClick={() => setActiveCategory(key)}
							className={`
                flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-200
                ${
									activeCategory === key
										? 'bg-primary text-primary-foreground shadow-lg'
										: 'bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground border border-border'
								}
              `}
							aria-pressed={activeCategory === key}
						>
							<Icon
								className={`h-5 w-5 ${
									activeCategory === key ? 'text-primary-foreground' : color
								}`}
							/>
							{t(`skills.categories.${key}` as 'skills.categories.frontend')}
						</button>
					))}
				</div>

				{/* Skills Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{filteredSkills.map((skill, index) => (
						<div
							key={skill.name}
							className='bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-brasil transition-all duration-300'
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className='flex items-center justify-between mb-4'>
								<h3 className='text-lg font-semibold text-foreground'>
									{skill.name}
								</h3>
								<span className='text-sm font-medium text-muted-foreground'>
									{skill.level}%
								</span>
							</div>

							{/* Progress Bar */}
							<div className='w-full bg-muted rounded-full h-2 mb-4 overflow-hidden'>
								<div
									className='h-full bg-gradient-brasil rounded-full transition-all duration-1000 ease-out'
									style={{
										width: `${skill.level}%`,
										animationDelay: `${index * 150}ms`,
									}}
								/>
							</div>

							{skill.description && (
								<p className='text-sm text-muted-foreground leading-relaxed'>
									{skill.description}
								</p>
							)}

							{skill.certificationUrl && (
								<a
									href={skill.certificationUrl}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center gap-2 mt-3 text-sm text-primary hover:text-primary/80 transition-colors'
								>
									<CheckCircle className='h-4 w-4' />
									{t('projects.certification')}
									<ExternalLink className='h-3 w-3' />
								</a>
							)}
						</div>
					))}
				</div>

				{/* Skills Summary */}
				<div className='mt-16 bg-gradient-brasil rounded-lg p-8 sm:p-12 text-white'>
					<div className='text-center'>
						<h3 className='text-2xl sm:text-3xl font-bold mb-6'>
							{t('skillsSummary.title')}
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div className='text-center'>
								<div className='text-3xl font-bold mb-2'>
									{t('skillsSummary.wcag')}
								</div>
								<div className='text-white/90'>
									{t('skillsSummary.complianceAA')}
								</div>
							</div>
							<div className='text-center'>
								<div className='text-3xl font-bold mb-2'>100%</div>
								<div className='text-white/90'>
									{t('skillsSummary.lighthouseScore')}
								</div>
							</div>
							<div className='text-center'>
								<div className='text-3xl font-bold mb-2'>
									{t('skillsSummary.mobileFirst')}
								</div>
								<div className='text-white/90'>
									{t('skillsSummary.responsiveDesign')}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
