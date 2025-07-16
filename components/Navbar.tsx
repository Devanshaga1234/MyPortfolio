'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

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
		<nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50">
			<div className="container-custom">
				<div className="flex items-center justify-between py-4">
					<Link
						href="/"
						className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
					>
						Aaryan Gusain
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<a
							href="#home"
							className="text-gray-300 hover:text-white transition-colors"
						>
							Home
						</a>
						<a
							href="#experience"
							className="text-gray-300 hover:text-white transition-colors"
						>
							Experience
						</a>
						<a
							href="#projects"
							className="text-gray-300 hover:text-white transition-colors"
						>
							Projects
						</a>
						<a
							href="#skills"
							className="text-gray-300 hover:text-white transition-colors"
						>
							Skills
						</a>
						<a
							href="#contact"
							className="text-gray-300 hover:text-white transition-colors"
						>
							Contact
						</a>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-gray-300 hover:text-white"
						>
							{isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t border-gray-700/50">
						<div className="flex flex-col space-y-4">
							<a
								href="#home"
								className="text-gray-300 hover:text-white transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Home
							</a>
							<a
								href="#experience"
								className="text-gray-300 hover:text-white transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Experience
							</a>
							<a
								href="#projects"
								className="text-gray-300 hover:text-white transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Projects
							</a>
							<a
								href="#skills"
								className="text-gray-300 hover:text-white transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Skills
							</a>
							<a
								href="#contact"
								className="text-gray-300 hover:text-white transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Contact
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}