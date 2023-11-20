import React from 'react'
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';

const HerosectionLower = () => {
	return (
		<div className="bg-[#15191D] p-8 lg:p-12 pr-0 lg:pr-0 pt-0 lg:pt-0">
			<div className="bg-[#BCE743] rounded-tl-[24px] flex flex-col md:flex-row justify-around items-center p-4 lg:p-6">
				<div className="w-64 p-3 flex flex-col gap-3">
					<h2 className="font-space-grotesk font-bold text-white text-lg md:text-xl lg:text-3xl">01</h2>
					<h3 className="font-space-grotesk font-bold text-[#15191D] text-base">Your mental health is <br/>everything - Prioritize it.</h3>
					<p className="font-poppins text-xs font-light text-[#15191D] pr-10">Work is meant to be fun. Quit when the fun stops. Your mental health matters.</p>
				</div>
				<div className="w-64 p-3 flex flex-col gap-3">
					<h2 className="font-space-grotesk font-bold text-white text-lg md:text-xl lg:text-3xl">02</h2>
					<h3 className="font-space-grotesk font-bold text-[#15191D] text-base">It’s okay to feel sad and <br/>unmotivated at work.</h3>
					<p className="font-poppins text-xs font-light text-[#15191D] pr-10">Work is meant to be fun. Quit when the fun stops. Your mental health matters.</p>
				</div>
				<div className="w-64 p-3 flex flex-col gap-3">
					<h2 className="font-space-grotesk font-bold text-white text-lg md:text-xl lg:text-3xl">03</h2>
					<h3 className="font-space-grotesk font-bold text-[#15191D] text-base">It’s okay to feel sad and <br/>unmotivated at work.</h3>
					<p className="font-poppins text-xs font-light text-[#15191D] pr-10">Work is meant to be fun. Quit when the fun stops. Your mental health matters.</p>
				</div>
				<div className="flex gap-4 font-bold text-3xl">
					<FaArrowLeftLong className="text-[#1E1E2066]"/>
					<FaArrowRightLong/>
				</div>
			</div>
		</div>
	)
}

export default HerosectionLower