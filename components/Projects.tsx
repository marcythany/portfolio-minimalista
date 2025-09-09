'use client';

import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/hooks/useTranslation';
import {
	ChevronLeft,
	ChevronRight,
	ExternalLink,
	Eye,
	Github,
	Smartphone,
	Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	tech: string[];
	features: string[];
	liveUrl?: string;
	githubUrl?: string;
	highlights: {
		performance?: string;
		accessibility?: string;
		responsive?: string;
	};
}

export function Projects() {
	const { t } = useTranslation();
	const [activeProject, setActiveProject] = useState(0);

	const projects: Project[] = [
		{
			id: 'nadiacosturas',
			title: t('projects.nadiacosturas.title'),
			description: t('projects.nadiacosturas.description'),
			image: '/images/projects/nadiacosturas/thumbnail.webp',
			tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
			features: [
				t('projects.nadiacosturas.features.0'),
				t('projects.nadiacosturas.features.1'),
				t('projects.nadiacosturas.features.2'),
				t('projects.nadiacosturas.features.3'),
				t('projects.nadiacosturas.features.4'),
			],
			liveUrl: 'https://nadiacosturas.vercel.app',
			githubUrl: 'https://github.com/marcythany/nadiacosturas',
			highlights: {
				performance: '92/100 Lighthouse',
				accessibility: 'WCAG 2.1 AA',
				responsive: 'Mobile-first',
			},
		},
		{
			id: 'nexcart',
			title: t('projects.nexcart.title'),
			description: t('projects.nexcart.description'),
			image: '/images/projects/nexcart-velocity/thumbnail.jpg',
			tech: ['React', 'TypeScript', 'Storybook', 'Design System'],
			features: [
				t('projects.nexcart.features.0'),
				t('projects.nexcart.features.1'),
				t('projects.nexcart.features.2'),
				t('projects.nexcart.features.3'),
				t('projects.nexcart.features.4'),
			],
			githubUrl: 'https://github.com/marcythany/nexcart-velocity',
			highlights: {
				performance: '89/100 Lighthouse',
				accessibility: 'WCAG 2.1 AA',
				responsive: 'Adaptive Design',
			},
		},
		{
			id: 'sacolaum',
			title: t('projects.sacolaum.title'),
			description: t('projects.sacolaum.description'),
			image: '/images/projects/sacolaum/thumbnail.jpg',
			tech: ['Next.js', 'TypeScript', 'Accessibility', 'Performance'],
			features: [
				t('projects.sacolaum.features.0'),
				t('projects.sacolaum.features.1'),
				t('projects.sacolaum.features.2'),
				t('projects.sacolaum.features.3'),
				t('projects.sacolaum.features.4'),
			],
			liveUrl: 'https://sacolaum.onrender.com/',
			githubUrl: 'https://github.com/marcythany/sacolaum',
			highlights: {
				performance: '95/100 Lighthouse',
				accessibility: 'WCAG 2.1 AAA',
				responsive: 'Progressive Enhancement',
			},
		},
		{
			id: 'sniplink',
			title: t('projects.sniplink.title'),
			description: t('projects.sniplink.description'),
			image: '/images/projects/sniplink/thumbnail.jpg',
			tech: ['HTML5', 'CSS3', 'JavaScript', 'is.gd API'],
			features: [
				t('projects.sniplink.features.0'),
				t('projects.sniplink.features.1'),
				t('projects.sniplink.features.2'),
				t('projects.sniplink.features.4'),
			],
			liveUrl: 'https://snip-link.vercel.app/',
			githubUrl: 'https://github.com/marcythany/SnipLink',
			highlights: {
				performance: '96/100 Lighthouse',
				accessibility: 'WCAG 2.1 AA',
				responsive: 'Mobile-first',
			},
		},
		{
			id: 'gfg',
			title: t('projects.gfg.title'),
			description: t('projects.gfg.description'),
			image: '/images/projects/gfg/thumbnail.jpg',
			tech: ['HTML5', 'CSS3', 'JavaScript', 'GamerPower API'],
			features: [
				t('projects.gfg.features.0'),
				t('projects.gfg.features.1'),
				t('projects.gfg.features.2'),
			],
			liveUrl: 'https://gfg-marcythany.vercel.app/',
			githubUrl: 'https://github.com/marcythany/GFG',
			highlights: {
				performance: '91/100 Lighthouse',
				accessibility: 'WCAG 2.1 AA',
				responsive: 'Responsive Design',
			},
		},
	];

	const nextProject = () => {
		setActiveProject((prev) => (prev + 1) % projects.length);
	};

	const prevProject = () => {
		setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
	};

	const currentProject = projects[activeProject];

	return (
		<section
			id='projects'
			className='py-20 px-4 sm:px-6 lg:px-8 bg-muted/30'
			aria-labelledby='projects-title'
		>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2
						id='projects-title'
						className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-brasil mb-6'
					>
						{t('projects.title')}
					</h2>
				</div>

				{/* Project Showcase */}
				<div className='bg-card rounded-lg shadow-xl border border-border overflow-hidden'>
					{/* Project Navigation */}
					<div className='flex items-center justify-between p-4 border-b border-border'>
						<button
							onClick={prevProject}
							className='p-2 rounded-full hover:bg-accent transition-colors'
							aria-label='Previous project'
						>
							<ChevronLeft className='h-5 w-5' />
						</button>

						<div className='flex gap-2'>
							{projects.map((_, index) => (
								<button
									key={index}
									onClick={() => setActiveProject(index)}
									className={`w-3 h-3 rounded-full transition-colors ${
										index === activeProject ? 'bg-primary' : 'bg-muted'
									}`}
									aria-label={`Go to project ${index + 1}`}
								/>
							))}
						</div>

						<button
							onClick={nextProject}
							className='p-2 rounded-full hover:bg-accent transition-colors'
							aria-label='Next project'
						>
							<ChevronRight className='h-5 w-5' />
						</button>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-2'>
						{/* Project Image */}
						<div className='relative bg-muted h-full overflow-hidden flex items-center justify-center'>
							<Image
								src={currentProject.image}
								alt={`${currentProject.title} - ${t(
									'projects.screenshotPreview'
								)}`}
								fill
								className='w-full h-auto object-cover transition-transform duration-300 hover:scale-105'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</div>

						{/* Project Details */}
						<div className='p-8'>
							<h3 className='text-2xl sm:text-3xl font-bold text-foreground mb-4'>
								{currentProject.title}
							</h3>

							<p className='text-muted-foreground leading-relaxed mb-6'>
								{currentProject.description}
							</p>

							{/* Tech Stack */}
							<div className='mb-6'>
								<h4 className='text-sm font-semibold text-foreground mb-3 uppercase tracking-wide'>
									{t('projectLabels.technologies')}
								</h4>
								<div className='flex flex-wrap gap-2'>
									{currentProject.tech.map((tech) => (
										<span
											key={tech}
											className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium'
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Key Features */}
							<div className='mb-6'>
								<h4 className='text-sm font-semibold text-foreground mb-3 uppercase tracking-wide'>
									{t('projectLabels.keyFeatures')}
								</h4>
								<ul className='space-y-2'>
									{currentProject.features.map((feature, index) => (
										<li
											key={index}
											className='flex items-start gap-2 text-sm text-muted-foreground'
										>
											<div className='w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0' />
											{feature}
										</li>
									))}
								</ul>
							</div>

							{/* Projects */}
							<div className='grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg'>
								{currentProject.highlights.performance && (
									<div className='text-center'>
										<Zap className='h-5 w-5 text-primary mx-auto mb-1' />
										<div className='text-xs font-medium text-foreground'>
											{t('projectLabels.performance')}
										</div>
										<div className='text-xs text-muted-foreground'>
											{currentProject.highlights.performance}
										</div>
									</div>
								)}
								{currentProject.highlights.accessibility && (
									<div className='text-center'>
										<Eye className='h-5 w-5 text-accent mx-auto mb-1' />
										<div className='text-xs font-medium text-foreground'>
											{t('projectLabels.accessibility')}
										</div>
										<div className='text-xs text-muted-foreground'>
											{currentProject.highlights.accessibility}
										</div>
									</div>
								)}
								{currentProject.highlights.responsive && (
									<div className='text-center'>
										<Smartphone className='h-5 w-5 text-secondary-foreground mx-auto mb-1' />
										<div className='text-xs font-medium text-foreground'>
											{t('projectLabels.responsive')}
										</div>
										<div className='text-xs text-muted-foreground'>
											{currentProject.highlights.responsive}
										</div>
									</div>
								)}
							</div>

							{/* Action Buttons */}
							<div className='flex flex-col sm:flex-row gap-3'>
								{currentProject.liveUrl && (
									<Button variant='brasil' className='flex-1' asChild>
										<a
											href={currentProject.liveUrl}
											target='_blank'
											rel='noopener noreferrer'
										>
											<ExternalLink className='h-4 w-4' />
											{t('projects.viewProject')}
										</a>
									</Button>
								)}
								{currentProject.githubUrl && (
									<Button variant='outline' className='flex-1' asChild>
										<a
											href={currentProject.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
										>
											<Github className='h-4 w-4' />
											{t('projects.viewCode')}
										</a>
									</Button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
