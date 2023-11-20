import React from 'react'
import Card from './Card'
import { BsArrowRight } from 'react-icons/bs';

const Partners = () => {
	const list = [1,2,3,4,5,6]
	return (
		<div className="pt-4 pb-8">
			<div className="bg-[#15191D] flex flex-col justify-center items-center p-16 pt-20 pb-48">
				<h1 className="flex flex-col gap-3 font-poppins font-bold text-white text-xl md:text-3xl lg:text-4xl p-2 text-center">Meet Our partner <span className="">NGO firms</span></h1>
				<p className="font-inter text-[#FFFFFF66] text-base text-center">Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor</p>
			</div>
			<div className="-mt-24 grid grid-cols-lgg gap-16 md:gap-8 lg:gap-16 pl-8 pr-8 md:pl-16 md:pr-16 lg:pr-20 lg:pl-20 xl:pl-24 xl:pr-24 place-items-center">
				{list.map((item) => (<Card id={item} key={item}/>))}
			</div>
			<div className="flex justify-center items-center gap-2 p-8 mt-2">
				{
					list.map((item) => (<button className={`font-bold font-inter text-base w-8 h-8 rounded-[4px] ${item === 1 ? "bg-[#15191D] text-white":"bg-[#F4F4F4] text-[#192252]" }`} key={item}>{item}</button>))
				}
				<button className="font-bold font-inter text-base w-8 h-8 flex justify-center items-center rounded-[4px] bg-[#F4F4F4] text-[#192252]"><BsArrowRight className="text-2xl"/></button>
			</div>
		</div>
	)
}

export default Partners