'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Food from '../../public/assets/images/Food.svg'
import Foodd from '../../public/assets/images/Foodd.svg'
import SlideIndicator from '../../public/assets/images/SlideIndicatior.svg'
import ImagePlaceholder from '../../public/assets/images/ImagePlaceholder.png'
import ImagePlaceholder2 from '../../public/assets/images/ImagePlaceholder2.png'
import ImagePlaceholder3 from '../../public/assets/images/ImagePlaceholder3.png'
import ImagePlaceholder4 from '../../public/assets/images/ImagePlaceholder4.png'
import { LiaDownloadSolid } from "react-icons/lia";

const Herosection = () => {
	const [stage, setStage] = useState(0);

	const heroslide = [
	    {heroWords1: "Having Issues at work?. Let ", heroWords2: "Quill", heroWords3: " handle it.", src:ImagePlaceholder },
	    {heroWords1: "Together for ", heroWords2: "Mental", heroWords3: " Health,", heroWords4:"Together for", heroextra:" All.", src:ImagePlaceholder2 },
	    {heroWords1: "Heal ", heroWords2: "your mind, Shine your light", heroWords3: " Speak up & Reach out.", src:ImagePlaceholder3 },
	    {heroWords1: "Mental health ", heroWords2: "matters. Let’s", heroWords3: " shatter the silence.", src:ImagePlaceholder4 },
	]

	useEffect(() => {
		setTimeout(() => {
			setStage(prev => (prev + 1)%4)
		}, 3000)
	}, [stage])

	return (
		<div className="bg-[#15191D] p-8 lg:p-12 flex flex-col md:flex-row lg:justify-between bg-[url(/assets/images/Union.svg)] bg-no-repeat bg-center bg-origin-border bg-cover">
			<div className="w-full md:w-1/2 flex flex-col mt-8 gap-10 ">
				{/*<Image className=" " src={SlideIndicator} width={200} quality={100} alt="icon"/>*/}
				<div className="flex justify-start items-center gap-2">
				    <p className="font-space-grotesk font-medium text-base text-white">0 {stage+1}</p>
					<div className="flex justify-center items-center">
					    <button className={`w-[35px] h-1 ${stage >= 0 ? 'bg-[#BCE743]': 'bg-[#D9D9D9]'}`}></button>
					    <button className={`w-[35px] h-1 ${stage >= 1 ? 'bg-[#BCE743]': 'bg-[#D9D9D9]'}`}></button>
					    <button className={`w-[35px] h-1 ${stage >= 2 ? 'bg-[#BCE743]': 'bg-[#D9D9D9]'}`}></button>
					    <button className={`w-[35px] h-1 ${stage >= 3 ? 'bg-[#BCE743]': 'bg-[#D9D9D9]'}`}></button>
					</div>
					<p className="font-space-grotesk font-medium text-base text-white">0 4</p>
				</div>
				{stage === 0 && <h1 className="font-space-grotesk font-bold text-3xl md:text-4xl text-white">Having Issues at work? Let <br/><span className="text-[#BCE743]">Quill</span> handle it.</h1>}
				{stage ===1 && <h1 className="font-space-grotesk font-bold text-3xl md:text-4xl text-white">{heroslide[stage].heroWords1}<span className="text-[#BCE743]">{heroslide[stage].heroWords2}</span>{heroslide[stage].heroWords3}<br/>{heroslide[stage].heroWords4}<span className="text-[#BCE743]">{heroslide[stage].heroextra}</span></h1>}
				{stage >1 &&  <h1 className="font-space-grotesk font-bold text-3xl md:text-4xl text-white"><span className="text-[#BCE743]">{heroslide[stage].heroWords1}</span> {heroslide[stage].heroWords2} <br/>{heroslide[stage].heroWords3}</h1>}
			    <p className="font-poppins text-base font-light text-white ">Your mental health is important. Make it a <br/>priority. You matter too!</p>
			    <a href="https://lphkvolpvequyswccgnt.supabase.co/storage/v1/object/public/work_life_balance/work_life_balance.zip" download="work_life_balance.zip" className="font-space-grotesk font-bold text-white text-base border-[2px] rounded-[5px] w-48 h-12 hover:border-0 hover:text-[#15191D] hover:bg-[#BCE743] flex justify-center items-center gap-1">Download App <LiaDownloadSolid className="font-bold text-xl" /></a>
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
			    <div className="bg-white flex justify-center items-center gap-4 rounded-[40px] w-36 h-12 absolute bottom-20 md:bottom-24 lg:bottom-32 -left-6 md:-left-10 lg:left-3 z-10">
			    	<Image className=" " src={Foodd} width={30} quality={100} alt="icon"/>
			    	<p className="font-inter text-sm font-light text-[#000000]">Get Help</p>
			    </div>
				<Image 
				    className=" " 
				    src={heroslide[stage].src} 
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