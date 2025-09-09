'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';
import { Briefcase, Calendar, Code, GraduationCap, Target } from 'lucide-react';

interface TimelineItem {
	year: string;
	title: string;
	description: string;
	type: 'education' | 'project' | 'work' | 'goal';
	icon: React.ComponentType<{ className?: string }>;
}

export function Timeline() {
	const { t } = useTranslation();

	const timelineItems: TimelineItem[] = [
		{
			year: t('timeline.items.0.year'),
			title: t('timeline.items.0.title'),
			description: t('timeline.items.0.description'),
			type: 'education',
			icon: GraduationCap,
		},
		{
			year: t('timeline.items.1.year'),
			title: t('timeline.items.1.title'),
			description: t('timeline.items.1.description'),
			type: 'project',
			icon: Code,
		},
		{
			year: t('timeline.items.2.year'),
			title: t('timeline.items.2.title'),
			description: t('timeline.items.2.description'),
			type: 'education',
			icon: GraduationCap,
		},
		{
			year: t('timeline.items.3.year'),
			title: t('timeline.items.3.title'),
			description: t('timeline.items.3.description'),
			type: 'project',
			icon: Code,
		},
		{
			year: t('timeline.items.4.year'),
			title: t('timeline.items.4.title'),
			description: t('timeline.items.4.description'),
			type: 'goal',
			icon: Target,
		},
	];

	const getTypeColor = (type: TimelineItem['type']) => {
		switch (type) {
			case 'education':
				return 'bg-primary text-primary-foreground';
			case 'project':
				return 'bg-accent text-accent-foreground';
			case 'work':
				return 'bg-secondary text-secondary-foreground';
			case 'goal':
				return 'bg-gradient-brasil text-white';
			default:
				return 'bg-muted text-muted-foreground';
		}
	};

	const getConnectorColor = (type: TimelineItem['type']) => {
		switch (type) {
			case 'education':
				return 'border-primary';
			case 'project':
				return 'border-accent';
			case 'work':
				return 'border-secondary';
			case 'goal':
				return 'border-primary';
			default:
				return 'border-muted';
		}
	};

	return (
		<section
			id='timeline'
			className='py-20 px-4 sm:px-6 lg:px-8'
			aria-labelledby='timeline-title'
		>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-16'>
					<h2
						id='timeline-title'
						className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-brasil mb-6'
					>
						{t('timeline.title')}
					</h2>
				</div>

				{/* Timeline */}
				<div className='relative'>
					{/* Vertical Line */}
					<div
						className='absolute left-8 top-0 bottom-0 w-0.5 bg-border'
						aria-hidden='true'
					/>

					<div className='space-y-12'>
						{timelineItems.map((item, index) => {
							const Icon = item.icon;
							const isLast = index === timelineItems.length - 1;

							return (
								<div key={index} className='relative flex items-start gap-6'>
									{/* Icon */}
									<div
										className={`
                    relative z-10 flex items-center justify-center w-16 h-16 rounded-full shadow-lg
                    ${getTypeColor(item.type)}
                  `}
									>
										<Icon className='h-6 w-6' aria-hidden='true' />
									</div>

									{/* Content */}
									<div className='flex-1 min-w-0 pb-8'>
										<div className='bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-brasil transition-shadow duration-300'>
											{/* Year Badge */}
											<div className='flex items-center gap-3 mb-4'>
												<span
													className={`
                          inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
                          ${getTypeColor(item.type)}
                        `}
												>
													<Calendar className='h-3 w-3' />
													{item.year}
												</span>
											</div>

											{/* Title */}
											<h3 className='text-xl sm:text-2xl font-bold text-foreground mb-3'>
												{item.title}
											</h3>

											{/* Description */}
											<p className='text-muted-foreground leading-relaxed'>
												{item.description}
											</p>

											{/* Type indicator */}
											<div className='mt-4 flex items-center gap-2'>
												<div
													className={`w-2 h-2 rounded-full ${
														getTypeColor(item.type)
															.replace('text-', 'bg-')
															.split(' ')[0]
													}`}
												/>
												<span className='text-xs uppercase tracking-wide text-muted-foreground font-medium'>
													{item.type === 'education' &&
														t('timelineTypes.education')}
													{item.type === 'project' &&
														t('timelineTypes.project')}
													{item.type === 'work' && t('timelineTypes.work')}
													{item.type === 'goal' && t('timelineTypes.goal')}
												</span>
											</div>
										</div>
									</div>

									{/* Connector Line */}
									{!isLast && (
										<div
											className={`absolute left-8 top-16 w-0.5 h-12 ${getConnectorColor(
												item.type
											)}`}
											aria-hidden='true'
										/>
									)}
								</div>
							);
						})}
					</div>
				</div>

				{/* Current Status */}
				<div className='mt-16 text-center'>
					<div className='bg-gradient-brasil rounded-lg p-8 sm:p-12 text-white'>
						<div className='max-w-2xl mx-auto'>
							<h3 className='text-2xl sm:text-3xl font-bold mb-4'>
								{t('timelineExtras.currentStatus')}
							</h3>
							<p className='text-lg leading-relaxed mb-6'>
								{t('timelineExtras.currentStatusDescription')}
							</p>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
								<div className='text-center'>
									<Briefcase className='h-8 w-8 mx-auto mb-2' />
									<div className='font-semibold'>
										{t('timelineExtras.experience')}
									</div>
									<div className='text-white/90 text-sm'>
										{t('timelineExtras.experienceRole')}
									</div>
								</div>
								<div className='text-center'>
									<Target className='h-8 w-8 mx-auto mb-2' />
									<div className='font-semibold'>
										{t('timelineExtras.objective')}
									</div>
									<div className='text-white/90 text-sm'>
										{t('timelineExtras.objectiveRole')}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Skills Evolution */}
				<div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
					<div className='text-center p-6 bg-card rounded-lg border border-border'>
						<div className='text-3xl font-bold text-primary mb-2'>5+</div>
						<div className='text-sm text-muted-foreground'>
							{t('timelineExtras.yearsStudy')}
						</div>
					</div>
					<div className='text-center p-6 bg-card rounded-lg border border-border'>
						<div className='text-3xl font-bold text-accent mb-2'>10+</div>
						<div className='text-sm text-muted-foreground'>
							{t('timelineExtras.projectsCount')}
						</div>
					</div>
					<div className='text-center p-6 bg-card rounded-lg border border-border'>
						<div className='text-3xl font-bold text-secondary-foreground mb-2'>
							100%
						</div>
						<div className='text-sm text-muted-foreground'>
							{t('timelineExtras.qualityDedication')}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
