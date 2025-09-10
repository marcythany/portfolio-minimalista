import { LocaleProvider } from '@/lib/contexts/LocaleContext';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Marcel Sobral - Desenvolvedor Frontend Júnior',
	description:
		"Portfolio de Marcel 'Marcy' Sobral, desenvolvedor frontend júnior especializado em React, TypeScript e Next.js. Focado em acessibilidade e excelência técnica.",
	keywords: [
		'Marcel Sobral',
		'Marcy',
		'desenvolvedor frontend',
		'frontend developer',
		'Junior Front End developer',
		'desenvolvedor junior',
		'React',
		'TypeScript',
		'Next.js',
		'acessibilidade',
		'WCAG',
		'Novo Hamburgo',
		'RS',
		'Brasil',
		'portfolio',
		'neurodiversidade',
		'TEA',
	],
	authors: [{ name: 'Marcel Sobral', url: 'https://github.com/marcythany' }],
	creator: 'Marcel Sobral',
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		alternateLocale: 'en_US',
		url: 'https://marcy-miniportfolio.vercel.app/',
		siteName: 'Marcel Sobral - Portfolio',
		title: 'Marcel Sobral - Desenvolvedor Frontend Júnior',
		description:
			"Portfolio de Marcel 'Marcy' Sobral, desenvolvedor frontend júnior especializado em React, TypeScript e Next.js.",
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Marcel Sobral - Frontend Developer',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Marcel Sobral - Desenvolvedor Frontend Júnior',
		description:
			"Portfolio de Marcel 'Marcy' Sobral, desenvolvedor frontend júnior especializado em React, TypeScript e Next.js.",
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR' className='scroll-smooth'>
			<head>
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
				<link rel='manifest' href='/manifest.json' />
				<meta name='theme-color' content='#2D5A27' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, viewport-fit=cover'
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
			>
				<LocaleProvider initialLocale='pt-BR'>
					<div className='relative'>{children}</div>

					{/* Skip to main content link for accessibility */}
					<a
						href='#main-content'
						className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-ring'
					>
						Skip to main content
					</a>
				</LocaleProvider>
			</body>
		</html>
	);
}
