import React from 'react'
import Image from 'next/image'
import partnerImage from '../../public/assets/images/partnerImage.png'

const Card = () => {
	return (
		<div className="w-[300px] rounded-[8px] bg-white shadow-xl">
		    <div className="bg-[#E7E9E1] p-3 rounded-t-[8px]">
				<Image 
				    className="w-[300px]" 
				    src={partnerImage} 
				    width={240} 
				    quality={100} 
				    alt="partner"
				/>
			</div>
			<div className="p-4 flex flex-col justify-center items-center gap-3">
				<p className="font-inter text-[#0C0C1D99] text-xs text-center pl-6 pr-6">Lorem ipsum dolor sit malor orem ipsum dolor sit Lorem ipsum dolor sit malor orem ipsum dolor</p>
			    <button className="font-inter text-[#15191D] font-medium text-base bg-[#BCE743] rounded-[8px] w-[250px] h-8">Message</button>
			</div>
		</div>
	)
}

export default Card