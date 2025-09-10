export const translations = {
	'pt-BR': {
		// Navigation
		nav: {
			home: 'Início',
			about: 'Sobre',
			skills: 'Habilidades',
			projects: 'Projetos',
			timeline: 'Trajetória',
			contact: 'Contato',
		},

		// Hero Section
		hero: {
			greeting: 'Olá, eu sou',
			name: 'Marcel "Marcy" Sobral',
			title: 'Desenvolvedor Frontend Júnior',
			subtitle: 'Especializado em React, TypeScript e Next.js',
			location: 'Novo Hamburgo, RS, Brasil',
			cta: 'Vamos conversar',
			downloadCV: 'Baixar CV',
		},

		// About Section
		about: {
			title: 'Sobre Mim',
			intro:
				'Desenvolvedor frontend em transição de carreira, com foco em acessibilidade e excelência técnica.',
			neurodiversity: {
				title: 'Neurodiversidade',
				description:
					'Sou uma pessoa no espectro autista (TEA Nível 1), o que me proporciona atenção excepcional aos detalhes, pensamento estruturado e dedicação à qualidade do código.',
			},
			transition: {
				title: 'Transição de Carreira',
				description:
					'Atualmente trabalho como operador de caixa no Atacadão, onde desenvolvo habilidades de atendimento ao cliente e gestão de alta pressão. Estou em transição para a área de tecnologia, buscando oportunidades remotas em regime CLT 5x2.',
			},
			preferences: {
				title: 'Preferências de Trabalho',
				items: [
					'Ambientes estruturados com comunicação clara',
					'Trabalho remoto ou híbrido',
					'Funções técnicas sem atendimento ao público',
					'Rotinas organizadas e previsíveis',
				],
			},
			quote:
				'Minha neurodiversidade não é uma limitação, mas sim uma perspectiva única que me permite criar soluções técnicas excepcionais com atenção meticulosa aos detalhes e foco na acessibilidade para todos os usuários.',
			quoteAuthor: 'Marcel "Marcy" Sobral',
			strengthsList: [
				'Atenção excepcional aos detalhes',
				'Pensamento estruturado e lógico',
				'Dedicação à qualidade do código',
			],
			experienceList: [
				'Gestão de alta pressão',
				'Atendimento ao cliente',
				'Reconciliação de caixa',
			],
		},

		// Skills Section
		skills: {
			title: 'Habilidades Técnicas',
			categories: {
				frontend: 'Frontend',
				tools: 'Ferramentas',
				concepts: 'Conceitos',
			},
			items: {
				react: 'React & Hooks',
				typescript: 'TypeScript',
				nextjs: 'Next.js',
				tailwind: 'Tailwind CSS',
				framer: 'Motion',
				storybook: 'Storybook',
				git: 'Git & GitHub',
				figma: 'Figma',
				accessibility: 'Acessibilidade (WCAG)',
				responsive: 'Design Responsivo',
				performance: 'Otimização de Performance',
				seo: 'SEO',
			},
		},

		// Skills Summary
		skillsSummary: {
			title: 'Foco em Acessibilidade e Qualidade',
			wcag: 'WCAG 2.1 AA',
			complianceAA: 'Conformidade AA',
			lighthouseScore: 'Pontuação Lighthouse',
			mobileFirst: 'Mobile First',
			responsiveDesign: 'Design Responsivo',
		},

		// Projects Section
		projects: {
			title: 'Projetos',
			viewProject: 'Ver Projeto',
			viewCode: 'Ver Código',
			certification: 'Certificação',
			screenshotPreview: 'Screenshot Preview',
			nadiacosturas: {
				title: 'NadiaCosturas',
				description:
					'Cartão de visita virtual responsivo com animações Motion e sistema de design tokens.',
				tech: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
				features: [
					'Design responsivo mobile-first',
					'Animações suaves com Motion',
					'Sistema de design tokens customizado',
					'Otimização para Core Web Vitals',
					'Acessibilidade WCAG 2.1 AA',
				],
			},
			nexcart: {
				title: 'Nexcart-Velocity',
				description:
					'Sistema de design abrangente com componentes reutilizáveis documentados no Storybook.',
				tech: ['React', 'TypeScript', 'Storybook', 'Design System'],
				features: [
					'Componentes reutilizáveis documentados',
					'Storybook para desenvolvimento isolado',
					'Testes automatizados com Jest',
					'Design tokens consistentes',
					'Documentação interativa',
				],
			},
			sacolaum: {
				title: 'Sacolaum',
				description:
					'Projeto frontend demonstrando otimização de performance e recursos de acessibilidade.',
				tech: ['Next.js', 'TypeScript', 'Acessibilidade', 'Performance'],
				features: [
					'Server-side rendering otimizado',
					'Navegação por teclado completa',
					'Suporte a leitores de tela',
					'Lazy loading inteligente',
					'PWA capabilities',
				],
			},
			sniplink: {
				title: 'SnipLink',
				description:
					'Encurtador de URLs temático com interface inspirada em Legend of Zelda.',
				tech: ['HTML5', 'CSS3', 'JavaScript', 'is.gd API'],
				features: [
					'UI temático de Zelda: Esquema de cores ouro e verde Hylian com estilização autêntica',
					'API is.gd: Serviço de encurtamento de URL rápido e confiável',
					'Design Responsivo: Funciona perfeitamente em todos os dispositivos',
					'Feedback Animado: Animações suaves para confirmação de cópia e estados de carregamento',
					'Padrões Web Modernos: Construído com HTML puro, CSS e JavaScript (sem frameworks)',
				],
			},
			gfg: {
				title: 'GFG - Game Freebie Grabber',
				description:
					'Aplicação web para descobrir jogos gratuitos em múltiplas plataformas.',
				tech: ['HTML5', 'CSS3', 'JavaScript', 'GamerPower API'],
				features: [
					'Navegue pelas promoções mais recentes de várias plataformas de jogos',
					'Mantenha-se informado sobre as ofertas de jogos mais recentes e promoções',
					'Interface de usuário simples e intuitiva para navegação fácil',
				],
			},
		},

		// Timeline Section
		timeline: {
			title: 'Minha Trajetória',
			items: [
				{
					year: '2020',
					title: 'Início dos Estudos',
					description:
						'Comecei a estudar desenvolvimento web de forma autodidata.',
				},
				{
					year: '2022',
					title: 'Primeiros Projetos',
					description:
						'Desenvolvi meus primeiros projetos pessoais em HTML, CSS e JavaScript.',
				},
				{
					year: '2023',
					title: 'React & TypeScript',
					description:
						'Aprofundei conhecimentos em React e TypeScript, obtendo certificações.',
				},
				{
					year: '2024',
					title: 'Projetos Avançados',
					description:
						'Criei projetos complexos com Next.js, Storybook e foco em acessibilidade.',
				},
				{
					year: '2025',
					title: 'Transição de Carreira',
					description:
						'Buscando oportunidades como desenvolvedor frontend júnior.',
				},
			],
		},

		// Timeline Types
		timelineTypes: {
			education: 'Educação',
			project: 'Projeto',
			work: 'Trabalho',
			goal: 'Objetivo',
		},

		// Timeline Extras
		timelineExtras: {
			currentStatus: 'Status Atual',
			currentStatusDescription:
				'Atualmente trabalhando como operador de caixa enquanto busco oportunidades como desenvolvedor frontend júnior.',
			experience: 'Experiência',
			experienceRole: 'Operador de Caixa',
			objective: 'Objetivo',
			objectiveRole: 'Desenvolvedor Frontend Jr.',
			yearsStudy: 'Anos de Estudo',
			projectsCount: 'Projetos Desenvolvidos',
			qualityDedication: 'Dedicação à Qualidade',
		},

		// Contact Section
		contact: {
			title: 'Vamos Conversar',
			subtitle: 'Estou disponível para oportunidades remotas em regime CLT 5x2',
			form: {
				name: 'Nome',
				email: 'E-mail',
				subject: 'Assunto',
				message: 'Mensagem',
				send: 'Enviar Mensagem',
				sending: 'Enviando...',
				successMessage: 'Mensagem enviada com sucesso! Retornarei em breve.',
				errorMessage: 'Erro ao enviar mensagem. Tente novamente.',
				namePlaceholder: 'Seu nome completo',
				emailPlaceholder: 'seu@email.com',
				subjectPlaceholder: 'Assunto da mensagem',
				messagePlaceholder: 'Sua mensagem...',
				validation: {
					nameRequired: 'Nome é obrigatório',
					nameLength: 'Nome deve ter pelo menos 2 caracteres',
					emailRequired: 'E-mail é obrigatório',
					emailInvalid: 'E-mail inválido',
					subjectRequired: 'Assunto é obrigatório',
					subjectLength: 'Assunto deve ter pelo menos 5 caracteres',
					messageRequired: 'Mensagem é obrigatória',
					messageLength: 'Mensagem deve ter pelo menos 10 caracteres',
				},
			},
			info: {
				email: 'marcythany@gmail.com',
				phone: '(51) 98115-8271',
				location: 'Novo Hamburgo, RS, Brasil',
				linkedin: 'LinkedIn',
				github: 'GitHub',
			},
		},

		// Contact Details
		contactDetails: {
			title: 'Informações de Contato',
			socialMedia: 'Redes Sociais',
			availability: 'Disponibilidade',
			availabilityItems: [
				'Disponível para oportunidades remotas',
				'Regime CLT 5x2',
				'Trabalho em equipe estruturado',
				'Comunicação clara e objetiva',
			],
			sendMessage: 'Envie uma Mensagem',
		},

		// Footer
		footer: {
			rights: 'Todos os direitos reservados.',
			madeWith: 'Feito em colaboração com',
			kiloCodeAgent: 'Kilo Code Agent',
			and: 'e',
			description:
				'Desenvolvedor Frontend Júnior especializado em React, TypeScript e Next.js. Focado em acessibilidade e excelência técnica.',
			quickLinks: 'Links Rápidos',
			accessibilityStatement:
				'Este site foi desenvolvido com foco em acessibilidade, seguindo as diretrizes WCAG 2.1 AA. Compatível com leitores de tela e navegação por teclado. Para sugestões de melhorias de acessibilidade, entre em contato.',
			contactTitle: 'Contato',
		},

		// Projects Additional
		projectLabels: {
			technologies: 'Tecnologias',
			keyFeatures: 'Principais Recursos',
			performance: 'Performance',
			accessibility: 'Acessibilidade',
			responsive: 'Responsivo',
		},

		// Tech Stack Items
		techStack: {
			react: 'React',
			typescript: 'TypeScript',
			tailwind: 'Tailwind CSS',
			motion: 'Motion',
			storybook: 'Storybook',
			designSystem: 'Design System',
			nextjs: 'Next.js',
			accessibility: 'Acessibilidade',
			performance: 'Performance',
			html5: 'HTML5',
			css3: 'CSS3',
			javascript: 'JavaScript',
			isGdApi: 'is.gd API',
			gamerPowerApi: 'GamerPower API',
		},

		// Performance Scores
		performanceScores: {
			lighthouse92: '92/100 Lighthouse',
			lighthouse89: '89/100 Lighthouse',
			lighthouse95: '95/100 Lighthouse',
			lighthouse96: '96/100 Lighthouse',
			lighthouse91: '91/100 Lighthouse',
		},

		// Accessibility Levels
		accessibilityLevels: {
			wcag21AA: 'WCAG 2.1 AA',
			wcag21AAA: 'WCAG 2.1 AAA',
		},

		// Responsive Design Terms
		responsiveTerms: {
			mobileFirst: 'Mobile-first',
			adaptiveDesign: 'Adaptive Design',
			progressiveEnhancement: 'Progressive Enhancement',
			responsiveDesign: 'Responsive Design',
		},

		// Metadata
		metadata: {
			title: 'Marcel Sobral - Desenvolvedor Frontend Júnior',
			description:
				'Portfolio de Marcel "Marcy" Sobral, desenvolvedor frontend júnior especializado em React, TypeScript e Next.js. Focado em acessibilidade e excelência técnica.',
			ogTitle: 'Marcel Sobral - Desenvolvedor Frontend Júnior',
			ogDescription:
				'Portfolio de Marcel "Marcy" Sobral, desenvolvedor frontend júnior especializado em React, TypeScript e Next.js.',
			ogAlt: 'Marcel Sobral - Desenvolvedor Frontend',
		},
	},

	en: {
		// Navigation
		nav: {
			home: 'Home',
			about: 'About',
			skills: 'Skills',
			projects: 'Projects',
			timeline: 'Timeline',
			contact: 'Contact',
		},

		// Hero Section
		hero: {
			greeting: "Hello, I'm",
			name: 'Marcel "Marcy" Sobral',
			title: 'Junior Frontend Developer',
			subtitle: 'Specialized in React, TypeScript and Next.js',
			location: 'Novo Hamburgo, RS, Brazil',
			cta: "Let's talk",
			downloadCV: 'Download CV',
		},

		// About Section
		about: {
			title: 'About Me',
			intro:
				'Frontend developer in career transition, focused on accessibility and technical excellence.',
			neurodiversity: {
				title: 'Neurodiversity',
				description:
					"I'm on the autism spectrum (ASD Level 1), which provides me with exceptional attention to detail, structured thinking, and dedication to code quality.",
			},
			transition: {
				title: 'Career Transition',
				description:
					"Currently working as a cashier at Atacadão, where I develop customer service skills and high-pressure management. I'm transitioning to the technology sector, seeking remote opportunities with CLT 5x2 schedule.",
			},
			preferences: {
				title: 'Work Preferences',
				items: [
					'Structured environments with clear communication',
					'Remote or hybrid work',
					'Technical roles without public-facing responsibilities',
					'Organized and predictable routines',
				],
			},
			quote:
				'My neurodiversity is not a limitation, but rather a unique perspective that allows me to create exceptional technical solutions with meticulous attention to detail and focus on accessibility for all users.',
			quoteAuthor: 'Marcel "Marcy" Sobral',
			strengthsList: [
				'Exceptional attention to detail',
				'Structured and logical thinking',
				'Dedication to code quality',
			],
			experienceList: [
				'High-pressure management',
				'Customer service',
				'Cash reconciliation',
			],
		},

		// Skills Section
		skills: {
			title: 'Technical Skills',
			categories: {
				frontend: 'Frontend',
				tools: 'Tools',
				concepts: 'Concepts',
			},
			items: {
				react: 'React & Hooks',
				typescript: 'TypeScript',
				nextjs: 'Next.js',
				tailwind: 'Tailwind CSS',
				framer: 'Motion',
				storybook: 'Storybook',
				git: 'Git & GitHub',
				figma: 'Figma',
				accessibility: 'Accessibility (WCAG)',
				responsive: 'Responsive Design',
				performance: 'Performance Optimization',
				seo: 'SEO',
			},
		},

		// Skills Summary
		skillsSummary: {
			title: 'Focus on Accessibility and Quality',
			wcag: 'WCAG 2.1 AA',
			complianceAA: 'AA Compliance',
			lighthouseScore: 'Lighthouse Score',
			mobileFirst: 'Mobile First',
			responsiveDesign: 'Responsive Design',
		},

		// Projects Section
		projects: {
			title: 'Projects',
			viewProject: 'View Project',
			viewCode: 'View Code',
			certification: 'Certification',
			screenshotPreview: 'Screenshot Preview',
			nadiacosturas: {
				title: 'NadiaCosturas',
				description:
					'Responsive virtual business card with Motion animations and design token system.',
				tech: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
				features: [
					'Mobile-first responsive design',
					'Smooth Motion animations',
					'Custom design token system',
					'Core Web Vitals optimization',
					'WCAG 2.1 AA accessibility',
				],
			},
			nexcart: {
				title: 'Nexcart-Velocity',
				description:
					'Comprehensive design system with reusable components documented in Storybook.',
				tech: ['React', 'TypeScript', 'Storybook', 'Design System'],
				features: [
					'Documented reusable components',
					'Storybook for isolated development',
					'Automated testing with Jest',
					'Consistent design tokens',
					'Interactive documentation',
				],
			},
			sacolaum: {
				title: 'Sacolaum',
				description:
					'Frontend project demonstrating performance optimization and accessibility features.',
				tech: ['Next.js', 'TypeScript', 'Accessibility', 'Performance'],
				features: [
					'Optimized server-side rendering',
					'Complete keyboard navigation',
					'Screen reader support',
					'Smart lazy loading',
					'PWA capabilities',
				],
			},
			sniplink: {
				title: 'SnipLink',
				description:
					'Legend of Zelda-themed URL shortener with authentic gaming aesthetics.',
				tech: ['HTML5', 'CSS3', 'JavaScript', 'is.gd API'],
				features: [
					'Zelda-themed UI: Hylian gold and green color scheme with authentic styling',
					'is.gd API: Fast and reliable URL shortening service',
					'Responsive Design: Works flawlessly on all devices',
					'Animated Feedback: Smooth animations for copy confirmation and loading states',
					'Modern Web Standards: Built with pure HTML, CSS, and JavaScript (no frameworks)',
				],
			},
			gfg: {
				title: 'GFG - Game Freebie Grabber',
				description:
					'Web application for discovering free game giveaways across multiple platforms.',
				tech: ['HTML5', 'CSS3', 'JavaScript', 'GamerPower API'],
				features: [
					'Browse the latest giveaways from various gaming platforms',
					'Stay informed about the newest game offers and promotions',
					'Simple and intuitive user interface for easy navigation',
				],
			},
		},

		// Timeline Section
		timeline: {
			title: 'My Journey',
			items: [
				{
					year: '2020',
					title: 'Started Learning',
					description:
						'Began studying web development as a self-taught learner.',
				},
				{
					year: '2022',
					title: 'First Projects',
					description:
						'Developed my first personal projects in HTML, CSS, and JavaScript.',
				},
				{
					year: '2023',
					title: 'React & TypeScript',
					description:
						'Deepened knowledge in React and TypeScript, obtaining certifications.',
				},
				{
					year: '2024',
					title: 'Advanced Projects',
					description:
						'Created complex projects with Next.js, Storybook, and accessibility focus.',
				},
				{
					year: '2025',
					title: 'Career Transition',
					description: 'Seeking opportunities as a junior frontend developer.',
				},
			],
		},

		// Timeline Types
		timelineTypes: {
			education: 'Education',
			project: 'Project',
			work: 'Work',
			goal: 'Goal',
		},

		// Timeline Extras
		timelineExtras: {
			currentStatus: 'Current Status',
			currentStatusDescription:
				'Currently working as a cashier while seeking opportunities as a junior frontend developer.',
			experience: 'Experience',
			experienceRole: 'Cashier Operator',
			objective: 'Objective',
			objectiveRole: 'Junior Frontend Developer',
			yearsStudy: 'Years of Study',
			projectsCount: 'Projects Developed',
			qualityDedication: 'Quality Dedication',
		},

		// Contact Section
		contact: {
			title: "Let's Talk",
			subtitle: "I'm available for remote opportunities with CLT 5x2 schedule",
			form: {
				name: 'Name',
				email: 'Email',
				subject: 'Subject',
				message: 'Message',
				send: 'Send Message',
				sending: 'Sending...',
				successMessage: "Message sent successfully! I'll get back to you soon.",
				errorMessage: 'Error sending message. Please try again.',
				namePlaceholder: 'Your full name',
				emailPlaceholder: 'your@email.com',
				subjectPlaceholder: 'Message subject',
				messagePlaceholder: 'Your message...',
				validation: {
					nameRequired: 'Name is required',
					nameLength: 'Name must be at least 2 characters',
					emailRequired: 'Email is required',
					emailInvalid: 'Invalid email',
					subjectRequired: 'Subject is required',
					subjectLength: 'Subject must be at least 5 characters',
					messageRequired: 'Message is required',
					messageLength: 'Message must be at least 10 characters',
				},
			},
			info: {
				email: 'marcythany@gmail.com',
				phone: '(51) 98115-8271',
				location: 'Novo Hamburgo, RS, Brazil',
				linkedin: 'LinkedIn',
				github: 'GitHub',
			},
		},

		// Footer
		footer: {
			rights: 'All rights reserved.',
			madeWith: 'Made in collaboration with',
			kiloCodeAgent: 'Kilo Code Agent',
			and: 'and',
			description:
				'Junior Frontend Developer specialized in React, TypeScript and Next.js. Focused on accessibility and technical excellence.',
			quickLinks: 'Quick Links',
			accessibilityStatement:
				'This site was developed with a focus on accessibility, following WCAG 2.1 AA guidelines. Compatible with screen readers and keyboard navigation. For accessibility improvement suggestions, please contact us.',
			contactTitle: 'Contact',
		},

		// Projects Additional
		projectLabels: {
			technologies: 'Technologies',
			keyFeatures: 'Key Features',
			performance: 'Performance',
			accessibility: 'Accessibility',
			responsive: 'Responsive',
		},

		// Tech Stack Items
		techStack: {
			react: 'React',
			typescript: 'TypeScript',
			tailwind: 'Tailwind CSS',
			motion: 'Motion',
			storybook: 'Storybook',
			designSystem: 'Design System',
			nextjs: 'Next.js',
			accessibility: 'Accessibility',
			performance: 'Performance',
			html5: 'HTML5',
			css3: 'CSS3',
			javascript: 'JavaScript',
			isGdApi: 'is.gd API',
			gamerPowerApi: 'GamerPower API',
		},

		// Performance Scores
		performanceScores: {
			lighthouse92: '92/100 Lighthouse',
			lighthouse89: '89/100 Lighthouse',
			lighthouse95: '95/100 Lighthouse',
			lighthouse96: '96/100 Lighthouse',
			lighthouse91: '91/100 Lighthouse',
		},

		// Accessibility Levels
		accessibilityLevels: {
			wcag21AA: 'WCAG 2.1 AA',
			wcag21AAA: 'WCAG 2.1 AAA',
		},

		// Responsive Design Terms
		responsiveTerms: {
			mobileFirst: 'Mobile-first',
			adaptiveDesign: 'Adaptive Design',
			progressiveEnhancement: 'Progressive Enhancement',
			responsiveDesign: 'Responsive Design',
		},

		// Metadata
		metadata: {
			title: 'Marcel Sobral - Junior Frontend Developer',
			description:
				'Portfolio of Marcel "Marcy" Sobral, junior frontend developer specialized in React, TypeScript and Next.js. Focused on accessibility and technical excellence.',
			ogTitle: 'Marcel Sobral - Junior Frontend Developer',
			ogDescription:
				'Portfolio of Marcel "Marcy" Sobral, junior frontend developer specialized in React, TypeScript and Next.js.',
			ogAlt: 'Marcel Sobral - Frontend Developer',
		},
	},
} as const;

export type TranslationKey = keyof (typeof translations)['pt-BR'];
