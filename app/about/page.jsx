import React from 'react'
import Image from 'next/image'
import image5 from '../../public/assets/images/image5.png'
import image6 from '../../public/assets/images/image6.png'
import image7 from '../../public/assets/images/image7.png'
import image8 from '../../public/assets/images/image8.png'
import image9 from '../../public/assets/images/image9.png'

const About = () => {
	return (
		<div className=" flex flex-col justify-center items-center">
			<div className="bg-[#20272F] flex flex-col gap-3 justify-center items-center ">
			    <div className="flex flex-col gap-3 justify-center items-center p-8 md:p-16 lg:p-20 lg:w-2/3">
					<h1 className="font-space-grotesk font-bold text-xl md:text-5xl text-white mb-6 md:mb-10 underline">About us</h1>
					<p className="font-space-grotesk font-bold text-lg md:text-3xl text-white"><span className="text-[#BCE743]">Quill:</span> A Comprehensive HR Solution for Mental Well-being and Work-Life Balance</p>
					<p className="font-poppins text-base text-white text-left">In today's fast-paced and demanding work environment, maintaining mental well-being is crucial for employee productivity and overall satisfaction. Quil is an innovative HR solution designed to address this critical need by providing a holistic approach to mental health support, connecting employees with relevant NGOs, and promoting work-life balance through an intelligent PC shutdown feature.</p>
			    </div>
			    <Image 
				    className="w-full" 
				    src={image8} 
				    width={500} 
				    quality={100} 
				    alt="partner"
			    />
			</div>
			<div>
				<div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-40 lg:pr-40">
					<div className="w-full md:w-1/2">
						<h2 className="font-space-grotesk font-bold text-xl md:text-4xl text-[#15191D] mb-6 md:mb-12">What we <span className="text-[#BCE743]">offer</span></h2>
						<p className="font-space-grotesk font-bold text-lg md:text-2xl text-[#15191D]">Addressing Mental Health Concerns</p>
						<p className="font-poppins text-base md:text-lg">Quil recognizes the prevalence of mental health issues among employees and offers a comprehensive support system to address their concerns. The solution provides access to a variety of resources, including:</p>
					</div>
					<Image 
					    className="w-[300px]" 
					    src={image5} 
					    width={500} 
					    quality={100} 
					    alt="partner"
				    />
				</div>
				<div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between p-8 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-40 lg:pr-40">
					<Image 
					    className="w-[350px]" 
					    src={image6} 
					    width={500} 
					    quality={100} 
					    alt="partner"
				    />
				    <div className="w-full md:w-1/2">
						<p className="font-space-grotesk font-bold text-lg md:text-2xl text-[#15191D]">Mental Health Assessment</p>
						<p className="font-poppins text-base md:text-lg">Employees can take self-assessments to gauge their mental well-being and identify potential areas of concern.</p>
					    <p className="font-space-grotesk font-bold text-lg md:text-2xl text-[#15191D] mt-10">Mental Health Counseling</p>
						<p className="font-poppins text-base md:text-lg">Quil connects employees with licensed mental health professionals for personalized counseling and support.</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-40 lg:pr-40 mt-4">
				    <div className="w-full md:w-1/2">
						<p className="font-space-grotesk font-bold text-lg md:text-2xl text-[#15191D] mb-3">Linking Users to Relevant NGOs</p>
						<p className="font-poppins text-base md:text-lg">Quil goes beyond providing in-house mental health support by connecting employees with relevant NGOs that specialize in specific mental ailments. This personalized approach ensures that employees receive tailored support from organizations with expertise in their particular needs.</p>
					</div>
					<Image 
					    className="w-[350px]" 
					    src={image7} 
					    width={500} 
					    quality={100} 
					    alt="partner"
				    />
				</div>
				<div className="w-full md:w-2/3 p-8 md:p-16 md:ml-24 lg:ml-32 flex flex-col justify-center">
					<p className="font-space-grotesk font-bold text-lg md:text-2xl text-[#15191D] mb-3">Promoting Work-Life Balance through PC Shutdown</p>
					<p className="font-poppins text-base md:text-lg">Quill's intelligent PC shutdown feature plays a pivotal role in promoting work-life balance and preventing burnout. The solution automatically shuts down employees' PCs once they exceed their designated work hours, encouraging them to step away from their desks, take a break, and engage in activities that promote relaxation and stress relief.</p>
				</div>
			</div>
			<Image 
			    className="w-full" 
			    src={image9} 
			    width={500} 
			    quality={100} 
			    alt="partner"
		    />
		    <div className="p-8 md:p-24 lg:p-32 md:pb-12 lg:pb-12 md:pt-16 lg:pt-16 ml-auto mr-auto">
		    	<h2 className="font-poppins font-bold text-xl md:text-4xl text-[#15191D] mb-8">Key Benefits of Quill</h2>
		    	<ul className="font-poppins text-base text-[#15191D] w-full md:w-3/4">
		    		<li>1. Improved Employee Mental Health: The solution provides comprehensive mental health support, reducing stress and improving overall well-being.</li>

                    <li>2. Enhanced Employee Productivity: By addressing mental health concerns and promoting work-life balance, Quill leads to increased employee productivity and engagement.</li>

                    <li>3. Strengthened Employer Brand: Quill demonstrates an organization's commitment to employee well-being, enhancing its reputation as an employer of choice.</li>
		    	</ul>
		    </div>
		</div>
	)
}

export default About