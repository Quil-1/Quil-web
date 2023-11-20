import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/assets/images/logo.svg'

const Footer = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center p-0 pb-12 md:p-16 mt-12 lg:pt-4">
		    <div className="flex flex-col items-center md:items-start gap-6 mt-8 md:mt-0">
				<div className="flex justify-start items-center gap-2">
					<Image className="cursor-pointer" src={logo} width={30} quality={100} alt="icon"/>
					<p className="font-bold font-space-grotesk text-[#15191D] text-xl md:text-2xl">The Quill Team</p>
				</div>
				<div className="font-inter text-base text-[#1E1E2066]">
					<Link href="/">Terms and Conditions</Link> . <Link href="/">Privacy Policy</Link>
				</div>
				<p className="font-inter text-base text-[#1E1E2066] text-center md:text-left">© 2023 Quill team. Copyright and All rights reserved.</p>
			</div>
			<div className="grid grid-cols-2 md:flex justify-around items-center gap-12 md:gap-6 lg:gap-24">
				<div className="flex flex-col gap-3">
					<h2 className="font-space-grotesk text-[#15191D] font-bold text-lg">About</h2>
					<Link className="font-inter text-[#1E1E2066] text-sm" href="/">Help center</Link>
					<Link className="font-inter text-[#1E1E2066] text-sm" href="/">Career</Link>
					<Link className="font-inter text-[#1E1E2066] text-sm" href="/">About</Link>
					<Link className="font-inter text-[#1E1E2066] text-sm" href="/">Contact us</Link>
				</div>
				<div className="flex flex-col gap-3">
					<h2 className="font-space-grotesk text-[#15191D] font-bold text-lg">Partners</h2>
					<Link className="font-inter text-[#1E1E2066] text-sm" href="/">How to Join</Link>
					<Link className="font-inter text-[#1E1E2066] text-sm" href="/">Security</Link>
					<Link className="font-inter text-[#1E1E2066] text-sm" href="/">Beta test</Link>
					<Link className="font-inter text-[#1E1E2066] text-sm" href="/">Pricing product</Link>
				</div>
				<div className="flex flex-col gap-3">
					<h2 className="font-space-grotesk text-[#15191D] font-bold text-lg">Get Help</h2>
					<Link className="font-inter text-[#1E1E2066] text-sm" href="/">Talk to support</Link>
					<Link className="font-inter text-[#1E1E2066] text-sm" href="/">Support docs</Link>
					<Link className="font-inter text-[#1E1E2066] text-sm" href="/">System status</Link>
					<Link className="font-inter text-[#1E1E2066] text-sm" href="/">Yoga service</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer