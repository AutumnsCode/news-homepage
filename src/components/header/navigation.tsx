'use client';import React, { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import MobileNavigation from './mobile-navigation';
import { navLinks } from '@/constants';
import Link from 'next/link';

export const Navigation = () => {
	const [mounted, setMounted] = useState(false);
	const isMobileView = useMedia('(max-width: 45rem)', false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<>
			{isMobileView ? (
				<MobileNavigation />
			) : (
				<nav
					aria-label='Main Navigation'
					className='flex gap-x-8 lg:gap-10'
				>
					{navLinks.map((link, index) => (
						<Link
							href={link.href}
							key={`nav-${index}`}
							className='capitalize cursor-pointer hover:text-accent-red focus:text-accent-red focus-visible:outline-accent-red focus-visible:outline-offset-4'
							aria-label={link.label}
						>
							{link.label}
						</Link>
					))}
				</nav>
			)}
		</>
	);
};
