'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/projects', label: 'Projects' },
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Close mobile menu when route changes
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
				scrolled
					? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-3'
					: 'bg-transparent py-5'
			)}
		>
			<div className="container-custom flex items-center justify-between">
				{/* Logo */}
				<Link
					href="/"
					className="text-xl md:text-2xl font-bold hover:text-primary transition-colors"
				>
					Aaryan Gusain
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-8">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={cn(
								'font-medium hover:text-primary transition-colors',
								pathname === link.href ? 'text-primary' : ''
							)}
						>
							{link.label}
						</Link>
					))}
					<ThemeToggle />
				</nav>

				{/* Mobile Navigation Toggle */}
				<div className="flex items-center md:hidden">
					<ThemeToggle />
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="ml-4 p-1 focus:outline-none"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 animate-fade-in">
					<nav className="container-custom flex flex-col space-y-4">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={cn(
									'py-2 px-4 font-medium hover:text-primary transition-colors',
									pathname === link.href ? 'text-primary' : ''
								)}
							>
							  {link.label}
							</Link>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}