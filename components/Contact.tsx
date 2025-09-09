'use client';

import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/hooks/useTranslation';
import {
	AlertCircle,
	CheckCircle,
	Github,
	Linkedin,
	MapPin,
	Send,
} from 'lucide-react';
import { useState } from 'react';

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	subject?: string;
	message?: string;
}

export function Contact() {
	const { t } = useTranslation();
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		'idle' | 'success' | 'error'
	>('idle');

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		if (!formData.name.trim()) {
			newErrors.name =
				t('contact.form.validation.nameRequired') || 'Nome é obrigatório';
		} else if (formData.name.trim().length < 2) {
			newErrors.name =
				t('contact.form.validation.nameLength') ||
				'Nome deve ter pelo menos 2 caracteres';
		}

		if (!formData.email.trim()) {
			newErrors.email =
				t('contact.form.validation.emailRequired') || 'E-mail é obrigatório';
		} else if (!validateEmail(formData.email)) {
			newErrors.email =
				t('contact.form.validation.emailInvalid') || 'E-mail inválido';
		}

		if (!formData.subject.trim()) {
			newErrors.subject =
				t('contact.form.validation.subjectRequired') || 'Assunto é obrigatório';
		} else if (formData.subject.trim().length < 5) {
			newErrors.subject =
				t('contact.form.validation.subjectLength') ||
				'Assunto deve ter pelo menos 5 caracteres';
		}

		if (!formData.message.trim()) {
			newErrors.message =
				t('contact.form.validation.messageRequired') ||
				'Mensagem é obrigatória';
		} else if (formData.message.trim().length < 10) {
			newErrors.message =
				t('contact.form.validation.messageLength') ||
				'Mensagem deve ter pelo menos 10 caracteres';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (field: keyof FormData, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
		// Clear error when user starts typing
		if (errors[field]) {
			setErrors((prev) => ({ ...prev, [field]: undefined }));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			// Simulate form submission
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// In a real implementation, you would send the data to your backend
			console.log('Form submitted:', formData);

			setSubmitStatus('success');
			setFormData({ name: '', email: '', subject: '', message: '' });
		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	const contactInfo = [
		{
			icon: MapPin,
			label: t('contact.info.location'),
			value: 'Novo Hamburgo, RS, Brasil',
			href: 'https://maps.google.com/?q=Novo+Hamburgo,RS,Brasil',
			color: 'text-secondary-foreground',
		},
	];

	const socialLinks = [
		{
			icon: Linkedin,
			label: t('contact.info.linkedin'),
			href: 'https://www.linkedin.com/in/marcythany/',
			color: 'text-blue-600',
		},
		{
			icon: Github,
			label: t('contact.info.github'),
			href: 'https://github.com/marcythany',
			color: 'text-gray-800 dark:text-gray-200',
		},
	];

	return (
		<section
			id='contact'
			className='py-20 px-4 sm:px-6 lg:px-8 bg-muted/30'
			aria-labelledby='contact-title'
		>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2
						id='contact-title'
						className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-brasil mb-6'
					>
						{t('contact.title')}
					</h2>
					<p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto'>
						{t('contact.subtitle')}
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Contact Information */}
					<div className='space-y-8'>
						<div>
							<h3 className='text-2xl font-bold text-foreground mb-6'>
								{t('contactDetails.title')}
							</h3>

							<div className='space-y-4'>
								{contactInfo.map((info, index) => {
									const Icon = info.icon;
									return (
										<a
											key={index}
											href={info.href}
											target={
												info.href.startsWith('http') ? '_blank' : undefined
											}
											rel={
												info.href.startsWith('http')
													? 'noopener noreferrer'
													: undefined
											}
											className='flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-200 group'
										>
											<div
												className={`p-3 rounded-full bg-muted group-hover:bg-primary/10 transition-colors ${info.color}`}
											>
												<Icon className='h-5 w-5' />
											</div>
											<div>
												<div className='text-sm text-muted-foreground'>
													{info.label}
												</div>
												<div className='font-medium text-foreground'>
													{info.value}
												</div>
											</div>
										</a>
									);
								})}
							</div>
						</div>

						{/* Social Links */}
						<div>
							<h4 className='text-lg font-semibold text-foreground mb-4'>
								{t('contactDetails.socialMedia')}
							</h4>
							<div className='flex gap-4'>
								{socialLinks.map((social, index) => {
									const Icon = social.icon;
									return (
										<a
											key={index}
											href={social.href}
											target='_blank'
											rel='noopener noreferrer'
											className={`p-3 rounded-full bg-card border border-border hover:shadow-md transition-all duration-200 ${social.color} hover:scale-110`}
											aria-label={social.label}
										>
											<Icon className='h-6 w-6' />
										</a>
									);
								})}
							</div>
						</div>

						{/* Availability */}
						<div className='bg-gradient-brasil rounded-lg p-6 text-white'>
							<h4 className='text-lg font-semibold mb-3'>
								{t('contactDetails.availability')}
							</h4>
							<ul className='space-y-2 text-white/90'>
								<li>• {t('contactDetails.availabilityItems.0')}</li>
								<li>• {t('contactDetails.availabilityItems.1')}</li>
								<li>• {t('contactDetails.availabilityItems.2')}</li>
								<li>• {t('contactDetails.availabilityItems.3')}</li>
							</ul>
						</div>
					</div>

					{/* Contact Form */}
					<div className='bg-card rounded-lg p-8 shadow-lg border border-border'>
						<h3 className='text-2xl font-bold text-foreground mb-6'>
							{t('contactDetails.sendMessage')}
						</h3>

						{submitStatus === 'success' && (
							<div className='mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3'>
								<CheckCircle className='h-5 w-5 text-green-600' />
								<span className='text-green-800 dark:text-green-200'>
									{t('contact.form.successMessage') ||
										'Mensagem enviada com sucesso! Retornarei em breve.'}
								</span>
							</div>
						)}

						{submitStatus === 'error' && (
							<div className='mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3'>
								<AlertCircle className='h-5 w-5 text-red-600' />
								<span className='text-red-800 dark:text-red-200'>
									{t('contact.form.errorMessage') ||
										'Erro ao enviar mensagem. Tente novamente.'}
								</span>
							</div>
						)}

						<form onSubmit={handleSubmit} className='space-y-6'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-foreground mb-2'
								>
									{t('contact.form.name')} *
								</label>
								<input
									type='text'
									id='name'
									value={formData.name}
									onChange={(e) => handleInputChange('name', e.target.value)}
									className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
										errors.name ? 'border-red-500' : 'border-border'
									}`}
									placeholder={
										t('contact.form.namePlaceholder') || 'Seu nome completo'
									}
								/>
								{errors.name && (
									<p className='mt-1 text-sm text-red-600'>{errors.name}</p>
								)}
							</div>

							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-foreground mb-2'
								>
									{t('contact.form.email')} *
								</label>
								<input
									type='email'
									id='email'
									value={formData.email}
									onChange={(e) => handleInputChange('email', e.target.value)}
									className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
										errors.email ? 'border-red-500' : 'border-border'
									}`}
									placeholder={
										t('contact.form.emailPlaceholder') || 'seu@email.com'
									}
								/>
								{errors.email && (
									<p className='mt-1 text-sm text-red-600'>{errors.email}</p>
								)}
							</div>

							<div>
								<label
									htmlFor='subject'
									className='block text-sm font-medium text-foreground mb-2'
								>
									{t('contact.form.subject')} *
								</label>
								<input
									type='text'
									id='subject'
									value={formData.subject}
									onChange={(e) => handleInputChange('subject', e.target.value)}
									className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
										errors.subject ? 'border-red-500' : 'border-border'
									}`}
									placeholder={
										t('contact.form.subjectPlaceholder') ||
										'Assunto da mensagem'
									}
								/>
								{errors.subject && (
									<p className='mt-1 text-sm text-red-600'>{errors.subject}</p>
								)}
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-foreground mb-2'
								>
									{t('contact.form.message')} *
								</label>
								<textarea
									id='message'
									rows={5}
									value={formData.message}
									onChange={(e) => handleInputChange('message', e.target.value)}
									className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-vertical ${
										errors.message ? 'border-red-500' : 'border-border'
									}`}
									placeholder={
										t('contact.form.messagePlaceholder') || 'Sua mensagem...'
									}
								/>
								{errors.message && (
									<p className='mt-1 text-sm text-red-600'>{errors.message}</p>
								)}
							</div>

							<Button
								type='submit'
								variant='brasil'
								size='lg'
								className='w-full'
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<>
										<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white' />
										{t('contact.form.sending') || 'Enviando...'}
									</>
								) : (
									<>
										<Send className='h-4 w-4' />
										{t('contact.form.send')}
									</>
								)}
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
