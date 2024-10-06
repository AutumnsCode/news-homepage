import Link from 'next/link';import React from 'react';

interface NewsProps {
	title: string;
	summery: string;
}

interface NewsArticleProps {
	id: number;
	news: NewsProps;
}

export const NewsArticle = ({ id, news }: NewsArticleProps) => {
	return (
		<article
			className='pt-8 pb-7 last-of-type:pb-0 border-b-2 last-of-type:border-none border-foreground space-y-4'
			aria-labelledby={`news-title-${id}`}
		>
			<h3
				id={`news-title-${id}`}
				className='text-dark-foreground text-lg font-bold lg:text-xl'
			>
				<Link
					href='/'
					className='hover:text-accent-orange focus:text-accent-orange'
				>
					{news.title}
				</Link>
			</h3>
			<p className='text-sm'>{news.summery}</p>
		</article>
	);
};
