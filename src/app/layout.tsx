import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const inter = localFont({
	src: [
		{
			path: './fonts/inter-400.woff2',
			weight: '400',
		},
		{
			path: './fonts/inter-700.woff2',
			weight: '700',
		},
		{
			path: './fonts/inter-800.woff2',
			weight: '800',
		},
	],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'Frontend Mentor | News homepage',
	description: 'FrontendMentor solution of the News homepage challenge',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.png' sizes='any' />
			</head>
			<body className={`${inter.variable} font-sans antialiased `}>
				{children}
			</body>
		</html>
	);
}
