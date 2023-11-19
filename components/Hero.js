import React from "react";
import Link from "next/link";

const Hero = () => {
	return (
		<div className='w-full h-[85vh] md:px-[80px] px-[20px] flex flex-col md:items-center justify-center'>
			<h1 className='md:text-5xl text-3xl text-white font-extrabold mb-5 md:text-center'>
			Dive into unforgettable {" "}
				<span className='md:text-[#C07F00] text-white'>moments! </span>
			</h1>
			<p className='mb-2 md:text-center md:text-lg md:text-gray-100 text-white'>
			Score tickets to the hottest shows, concerts, and festivals. 
			From electrifying music to pulse-pounding sports
			</p>
			<p className='mb-6 md:text-center md:text-lg md:text-gray-100 text-white'>
			Don't miss out - grab your tickets now with our online app!
			</p>
			<Link href='/register'>
				<button className='bg-white md:px-6 px-4 py-4 text-[#C07F00] rounded font-bold'>
					CREATE YOUR EVENT TICKETS
				</button>
			</Link>
		</div>
	);
};

export default Hero;
