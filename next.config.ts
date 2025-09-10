import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// Performance optimizations

	// Optimize images
	images: {
		formats: ['image/webp', 'image/avif'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},

	// Performance optimizations
	experimental: {
		optimizeCss: true,
		scrollRestoration: true,
	},

	// Bundle analyzer for debugging
	webpack: (config, { dev, isServer }) => {
		// Optimize bundle splitting
		if (!dev && !isServer) {
			config.optimization.splitChunks.chunks = 'all';
			config.optimization.splitChunks.cacheGroups = {
				...config.optimization.splitChunks.cacheGroups,
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
					priority: 10,
				},
				radix: {
					test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
					name: 'radix-ui',
					chunks: 'all',
					priority: 20,
				},
			};
		}

		return config;
	},

	// Headers for performance
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
				],
			},
		];
	},
};

export default nextConfig;
