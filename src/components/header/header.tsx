import Image from 'next/image';import React from 'react';
import { Navigation } from './navigation';
import Link from 'next/link';

export const Header = () => {
	return (
		<header
			className='w-full flex justify-between items-center'
			aria-label='Main Header'
		>
			{/* Logo link to home */}
			<Link
				href='/'
				className='relative sm:w-16 sm:h-10 w-11 h-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-red'
				aria-label='Home'
			>
				<Image src='/logo.svg' alt='Company Logo' fill />
			</Link>

			{/* Navigation */}
			<Navigation />
		</header>
	);
};
