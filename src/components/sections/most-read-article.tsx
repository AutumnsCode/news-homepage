import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MostProps {
	id: number,
	image: string,
	title: string,
	summary: string,
}
interface MostReadArticleProps{
	most: MostProps
}
export const MostReadArticle = ({most} : MostReadArticleProps) => {
  return (
		<article
			className='flex gap-6'
			aria-labelledby={`most-title-${most.id}`}
		>
			<Image
				src={most.image}
				alt={most.title}
				width={102}
				height={128}
				className='object-cover'
			/>
			<div className='grid place-content-center gap-4'>
				<span className='text-2xl font-bold tracking-widest text-accent-red'>
					0{most.id}
				</span>
				<h3
					id={`most-title-${most.id}`}
					className='text-lg font-extrabold text-dark'
				>
					<Link
						href='/'
						className='hover:text-accent-red focus:text-accent-red'
					>
						{most.title}
					</Link>
				</h3>
				<p className='text-[15px] leading-tight'>{most.summary}</p>
			</div>
		</article>
  );
}
