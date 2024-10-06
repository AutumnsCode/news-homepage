import { Header } from '@/components/header/header';
import React, { ReactNode } from 'react';


const HomeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='w-full lg:w-[calc(100%-_8rem)] lg:max-w-[1110px] relative bg-background text-foreground text-[15px] min-h-screen px-4 xs:px-8 sm:px-10 md:px-20 lg:px-0  pt-7 xs:pt-12 sm:pt-20 md:pt-24 lg:pt-30 pb-20 lg:pb-28 sm:pb-24 mx-auto space-y-8 lg:space-y-14 sm:space-y-10 md:space-y-12'>
			<Header />
			{children}
		</div>
	);
};

export default HomeLayout;
