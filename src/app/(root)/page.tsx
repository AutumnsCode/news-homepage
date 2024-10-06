import { MostReadArticle } from '@/components/sections/most-read-article';
import { NewsArticle } from '@/components/sections/news-article';
import {
	heroLinkLabel,
	heroSummary,
	heroTitle,
	mostReadArticles,
	newArticles,
	newTitle,
} from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home = () => {
	return (
		<main
			className='w-full grid lg:grid-cols-3 gap-y-16 tablet:gap-x-6 lg:gap-x-7.5'
		>
			{/* hero */}
			<section
				className='lg:col-span-2 flex flex-col gap-7 sm:gap-8 lg:gap-9'
				aria-labelledby='hero-heading'
			>
				<div className='relative w-full h-[300px] z-0'>
					<Image
						src='/image-web-3-mobile.jpg'
						alt='Retro themed mobile image'
						fill
						className='lg:hidden object-cover z-0'
					/>
					<Image
						src='/image-web-3-desktop.jpg'
						alt='Retro themed desktop image'
						fill
						className='hidden lg:block object-cover z-0'
					/>
				</div>
				<div className='flex flex-col xs:flex-row tablet:flex-col md:flex-row gap-6'>
					<h1
						id='hero-heading'
						className='flex-1 font-title-h1 text-dark font-extrabold'
					>
						{heroTitle}
					</h1>
					<div className='flex-1 space-y-7.5'>
						<p className='text-[15px]'>{heroSummary}</p>
						<Link
							href='#'
							className='block w-fit py-[18px] pl-7.5 pr-8 bg-accent-red text-dark uppercase tracking-widest font-bold hover:bg-dark focus-visible:bg-dark focus:bg-dark hover:text-background focus-visible:text-background focus:text-background transition-colors duration-300 ease-in-out text-lg sm:pl-8 sm-pr-9'
							aria-label={`Learn more about ${heroLinkLabel}`}
						>
							{heroLinkLabel}
						</Link>
					</div>
				</div>
			</section>

			{/* news */}
			<section
				className='px-6 py-7 tablet:pt-9 bg-dark'
				aria-labelledby='news-heading'
			>
				<h2
					id='news-heading'
					className='text-accent-orange text-3xl tablet:text-4xl font-bold mb-2'
				>
					{newTitle}
				</h2>
				{newArticles.map((news, index) => (
					<NewsArticle
						key={`news-${index}`}
						id={index}
						news={news}
					/>
						
				))}
			</section>

			{/* most read articles */}
			<section className='col-span-full' aria-labelledby='most-read-heading'>
				<h2 id='most-read-heading' className='sr-only'>
					Most Read Articles
				</h2>
				<div className='grid gap-y-8 tablet:grid-cols-2 gap-x-6 lg:grid-cols-3'>
					{mostReadArticles.map((mostArticle) => (
						<MostReadArticle key={`most-article-${mostArticle.id}`} most={mostArticle}/>
					))}
				</div>
			</section>
		</main>
	);
};

export default Home;
