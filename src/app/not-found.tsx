import Link from 'next/link';import Image from 'next/image';

const Custom404 = () => {
	return (
		<main className='flex flex-col items-center justify-center h-screen bg-background text-dark-foreground px-6'>
			<div className='text-center space-y-6'>

				{/* Error message */}
				<h1 className='text-6xl font-extrabold text-accent-red'>404</h1>
				<p className='text-lg sm:text-xl font-medium'>
					Sorry, the page you’re looking for doesn’t exist yet.
				</p>

				{/* Call to action */}
				<Link
					href='/'
					className='inline-block mt-4 px-8 py-3 bg-accent-red text-background text-lg font-bold uppercase rounded-md shadow-md transition-colors duration-300 hover:bg-dark hover:text-background focus-visible:outline-dark focus-visible:outline-offset-4'
				>
					Go Home
				</Link>
			</div>
		</main>
	);
};

export default Custom404;
