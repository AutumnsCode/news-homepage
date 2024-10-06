'use client';import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useToggle } from 'react-use';

const MobileNavigation = () => {
	const [on, toggle] = useToggle(false);

	// Accessibility: Close the menu when "Escape" is pressed
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && on) {
				toggle(false);
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [on]);

	return (
		<>
			{/* Button to open the mobile menu */}
			{!on && (
				<button
					type='button'
					className='focus-visible:outline-offset-4 cursor-pointer'
					onClick={() => toggle(true)}
					aria-expanded={on} // ARIA: Tells screen readers if the menu is open
					aria-controls='mobile-menu' // ARIA: Associates with the menu
					aria-label='Open mobile navigation menu' // ARIA: Describes button purpose
				>
					<Image
						src='/icon-menu.svg'
						alt='menu open icon'
						width={40}
						height={17}
					/>
				</button>
			)}

			{/* Overlay and navigation */}
			<div
				className={`fixed inset-0 transition-all ease-in-out duration-300 overflow-hidden z-50 ${
					on
						? 'bg-black/50 pointer-events-auto'
						: 'bg-transparent pointer-events-none'
				}`}
				onClick={() => toggle(false)}
				aria-hidden={!on} // ARIA: Hides content from screen readers when closed
			>
				<nav
					id='mobile-menu' // ARIA: Associates with the button
					className={`w-3/4 bg-background h-full flex flex-col ml-auto transition-transform duration-300 ease-in-out px-5 xs:px-6 sm:px-7 pt-7 xs:pt-12 sm:pt-20 space-y-20 ${
						on ? 'translate-x-0' : 'translate-x-full'
					}`}
					onClick={(e) => e.stopPropagation()} // Prevents closing menu when clicked inside
				>
					{/* Button to close the mobile menu */}
					<button
						type='button'
						className={`focus-visible:outline-offset-4 cursor-pointer self-end ${
							on ? 'block' : 'hidden'
						}`}
						onClick={() => toggle(false)}
						aria-label='Close mobile navigation menu' // 
					>
						<Image
							src='/icon-menu-close.svg'
							alt='menu close icon'
							width={40}
							height={17}
						/>
					</button>

					{/* Navigation links */}
					<ul
						className={`flex-col gap-1.5 capitalize ${
							on ? 'flex' : 'hidden'
						}`}
					>
						{navLinks.map((link, index) => (
							<li key={`nav-${index}`}>
								<Link
									href={link.href}
									className='block w-fit py-3 p-1 text-lg hover:text-accent-red focus-visible:outline-none focus-visible:text-accent-red transition-transform duration-300 ease-in-out focus-visible:translate-x-2 hover:translate-x-2 focus-visible:underline underline-offset-2 hover:underline'
									onClick={() => toggle(false)} // Close menu when a link is clicked
									aria-label={`Navigate to ${link.label}`} // ARIA: Describes the destination of the link
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
};

export default MobileNavigation;
