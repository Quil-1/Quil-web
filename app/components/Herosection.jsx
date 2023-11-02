import React from 'react'
import Image from 'next/image'
import Food from '../../public/assets/images/Food.svg'
import Foodd from '../../public/assets/images/Foodd.svg'
import SlideIndicator from '../../public/assets/images/SlideIndicatior.svg'
import ImagePlaceholder from '../../public/assets/images/ImagePlaceholder.png'

const Herosection = () => {
	return (
		<div className="bg-[#15191D] p-8 lg:p-12 flex flex-col md:flex-row lg:justify-between bg-[url(/assets/images/Union.svg)] bg-no-repeat bg-center bg-origin-border bg-cover">
			<div className="w-full md:w-1/2 flex flex-col mt-8 gap-10 ">
				<Image className=" " src={SlideIndicator} width={200} quality={100} alt="icon"/>
				<h1 className="font-space-grotesk font-bold text-3xl md:text-5xl text-white">Having Issues at work? Let <br/><span className="text-[#BCE743]">Quill</span> handle it.</h1>
			    <p className="font-poppins text-sm font-light text-white ">Lorem ipsum dolor sit malor orem ipsum dolor <br/>sit Lorem ipsum dolor sit malor orem ipsum <br/>dolor </p>
			    <button className="font-space-grotesk font-bold text-white text-base border-[2px] rounded-[5px] w-48 h-12 hover:border-0 hover:text-[#15191D] hover:bg-[#BCE743]">GET STARTED</button>
			    <div className="flex items-center gap-12">
				    <div className="flex items-center gap-2">
				    	<h1 className="font-inter font-bold text-3xl md:text-3xl text-white">4.5K</h1>
				    	<p className="font-inter text-xs text-[#BCE743] font-extralight">Registered<br/>Users</p>
				    </div>
				    <div className="flex items-center gap-2">
				    	<h1 className="font-inter font-bold text-3xl md:text-3xl text-white">1M</h1>
				    	<p className="font-inter text-xs text-[#BCE743] font-extralight">NGOs<br/>Involved</p>
				    </div>
			    </div>
			</div>
			<div className="w-full md:w-1/2 flex justify-center mt-10 lg:mt-0 lg:justify-end relative ">
			    <div className="bg-white flex justify-center items-center gap-4 rounded-[40px] w-36 h-12 absolute bottom-20 md:bottom-24 lg:bottom-32 -left-6 md:-left-10 lg:left-0 z-10">
			    	<Image className=" " src={Foodd} width={30} quality={100} alt="icon"/>
			    	<p className="font-inter text-sm font-light text-[#000000]">Get Help</p>
			    </div>
				<Image 
				    className=" " 
				    src={ImagePlaceholder} 
				    width={470} 
				    //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 470px"
				    placeholder= "blur"
				    quality={100} 
				    alt="hero banner"
				/>
				<div className="bg-white flex justify-center items-center gap-4 rounded-[40px] w-44 h-12 absolute top-6 md:top-12 -right-4 md:right-0 z-10">
			    	<Image className=" " src={Food} width={30} quality={100} alt="icon"/>
			    	<p className="font-inter text-sm font-light text-[#000000]">Report Issue</p>
			    </div>
			</div>
		</div>
	)
}

export default Herosection