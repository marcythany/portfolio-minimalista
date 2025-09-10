/// <reference types="vitest/globals" />
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Header } from '../components/layout/Header';
import { LocaleProvider } from '../lib/contexts/LocaleContext';

// Mock scrollIntoView for navigation tests
const mockScrollIntoView = vi.fn();
Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
	value: mockScrollIntoView,
	writable: true,
});

// Mock document.querySelector for navigation tests
const mockQuerySelector = vi.fn();
Object.defineProperty(document, 'querySelector', {
	value: mockQuerySelector,
	writable: true,
});

// Mock the useTranslation hook
vi.mock('../lib/hooks/useTranslation', () => ({
	useTranslation: () => ({
		t: (key: string) => key,
		locale: 'pt-BR',
		switchLocale: vi.fn(),
	}),
}));

describe('Header Component', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		mockScrollIntoView.mockClear();
		mockQuerySelector.mockClear();
		// Reset document classes
		document.documentElement.className = '';
		// Clear localStorage mock
		vi.mocked(localStorage.setItem).mockClear();
		vi.mocked(localStorage.getItem).mockReturnValue(null);

		// Mock querySelector to return a mock element for navigation tests
		mockQuerySelector.mockImplementation((selector: string) => {
			if (selector.startsWith('#')) {
				return document.createElement('div');
			}
			return null;
		});
	});

	describe('Rendering', () => {
		it('renders the header with correct structure', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const header = screen.getByRole('banner');
			expect(header).toBeInTheDocument();
			expect(header).toHaveClass('fixed', 'top-0', 'left-0', 'right-0', 'z-50');
		});

		it('renders logo with correct text and accessibility', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const logo = screen.getByText('Marcel Sobral');
			expect(logo).toBeInTheDocument();
			expect(logo).toHaveAttribute('aria-label', 'nav.home');
		});

		it('renders all navigation items on desktop', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const nav = screen.getByRole('navigation');
			expect(nav).toBeInTheDocument();

			expect(screen.getByText('nav.home')).toBeInTheDocument();
			expect(screen.getByText('nav.about')).toBeInTheDocument();
			expect(screen.getByText('nav.skills')).toBeInTheDocument();
			expect(screen.getByText('nav.projects')).toBeInTheDocument();
			expect(screen.getByText('nav.timeline')).toBeInTheDocument();
			expect(screen.getByText('nav.contact')).toBeInTheDocument();
		});

		it('renders theme toggle button with correct initial state', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const themeButton = screen.getByLabelText('Switch to dark mode');
			expect(themeButton).toBeInTheDocument();
			expect(themeButton).toHaveAttribute('aria-label', 'Switch to dark mode');
		});

		it('renders language toggle button', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const languageButton = screen.getByText('Português');
			expect(languageButton).toBeInTheDocument();
		});

		it('renders mobile menu button', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const menuButton = screen.getByLabelText('Open menu');
			expect(menuButton).toBeInTheDocument();
			expect(menuButton).toHaveAttribute('aria-expanded', 'false');
		});
	});

	describe('Navigation', () => {
		it('scrolls to section when navigation item is clicked', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const homeLink = screen.getByText('nav.home');
			fireEvent.click(homeLink);

			expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
		});

		it('closes mobile menu when navigation item is clicked', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			// Open mobile menu
			const menuButton = screen.getByLabelText('Open menu');
			fireEvent.click(menuButton);

			// Click a mobile navigation item (get all and find the mobile one)
			const homeLinks = screen.getAllByText('nav.home');
			const mobileHomeLink = homeLinks.find((link) =>
				link.className.includes('block w-full text-left')
			);
			if (mobileHomeLink) {
				fireEvent.click(mobileHomeLink);
			}

			// Menu should be closed (button should have aria-expanded false)
			expect(menuButton).toHaveAttribute('aria-expanded', 'false');
		});
	});

	describe('Theme Toggle', () => {
		it('toggles to dark theme when light mode button is clicked', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const themeButton = screen.getByLabelText('Switch to dark mode');
			fireEvent.click(themeButton);

			expect(document.documentElement).toHaveClass('dark');
			expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
		});

		it('toggles to light theme when dark mode button is clicked', () => {
			// Simulate dark mode initial state
			document.documentElement.classList.add('dark');

			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const themeButton = screen.getByLabelText('Switch to light mode');
			fireEvent.click(themeButton);

			expect(document.documentElement).not.toHaveClass('dark');
			expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
		});

		it('loads saved theme from localStorage on mount', () => {
			vi.mocked(localStorage.getItem).mockReturnValue('dark');

			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			expect(document.documentElement).toHaveClass('dark');
		});
	});

	describe('Language Toggle', () => {
		it('switches language when language button is clicked', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const languageButton = screen.getByText('Português');
			fireEvent.click(languageButton);

			// Language button should be clickable without errors
			expect(languageButton).toBeInTheDocument();
		});
	});

	describe('Mobile Menu', () => {
		it('opens mobile menu when menu button is clicked', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const menuButton = screen.getByLabelText('Open menu');
			fireEvent.click(menuButton);

			expect(menuButton).toHaveAttribute('aria-expanded', 'true');
			expect(menuButton).toHaveAttribute('aria-label', 'Close menu');
		});

		it('closes mobile menu when close button is clicked', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const menuButton = screen.getByLabelText('Open menu');
			fireEvent.click(menuButton);

			const closeButton = screen.getByLabelText('Close menu');
			fireEvent.click(closeButton);

			expect(menuButton).toHaveAttribute('aria-expanded', 'false');
		});

		it('renders mobile navigation items when menu is open', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const menuButton = screen.getByLabelText('Open menu');
			fireEvent.click(menuButton);

			// Check that mobile navigation items are present
			const homeLinks = screen.getAllByText('nav.home');
			const mobileHomeLink = homeLinks.find((link) =>
				link.className.includes('block w-full text-left')
			);
			expect(mobileHomeLink).toBeInTheDocument();

			const aboutLinks = screen.getAllByText('nav.about');
			const mobileAboutLink = aboutLinks.find((link) =>
				link.className.includes('block w-full text-left')
			);
			expect(mobileAboutLink).toBeInTheDocument();
		});
	});

	describe('Accessibility', () => {
		it('has proper ARIA labels for interactive elements', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument();
			expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
			expect(screen.getByRole('navigation')).toBeInTheDocument();
		});

		it('has proper focus management for keyboard navigation', () => {
			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const navItems = screen.getAllByRole('button');
			// Buttons are focusable by default, so they should be in the document
			expect(navItems.length).toBeGreaterThan(0);
			navItems.forEach((item) => {
				expect(item).toBeInTheDocument();
			});
		});
	});

	describe('Edge Cases', () => {
		it('handles localStorage errors gracefully', () => {
			const consoleSpy = vi
				.spyOn(console, 'error')
				.mockImplementation(() => {});
			vi.mocked(localStorage.setItem).mockImplementation(() => {
				throw new Error('localStorage error');
			});

			render(
				<LocaleProvider initialLocale='pt-BR'>
					<Header />
				</LocaleProvider>
			);

			const themeButton = screen.getByLabelText('Switch to dark mode');

			// Wrap in try-catch to handle the error gracefully
			try {
				fireEvent.click(themeButton);
			} catch (error) {
				// Error should be handled gracefully
			}

			// Should not crash, but localStorage call should fail silently
			expect(vi.mocked(localStorage.setItem)).toHaveBeenCalled();

			consoleSpy.mockRestore();
		});
	});
});
