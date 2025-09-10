import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async headers() {
		return [
			{
				// Apply to all routes
				source: '/(.*)',
				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value:
							process.env.NODE_ENV === 'production'
								? 'https://marcelsobral-portfolio.vercel.app'
								: 'http://localhost:3000',
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET, POST, PUT, DELETE, OPTIONS',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value: 'Content-Type, Authorization',
					},
				],
			},
		];
	},
};

export default nextConfig;
