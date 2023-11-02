'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from '../../public/assets/images/logo.svg'
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
	const [closeMobile, setCloseMobile] = useState(false);
	const pathname = usePathname()
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-200%" },
	}

	return (
		<nav className="bg-[#15191D] h-[4.5rem] lg:h-24 w-full sticky top-0 z-50 bg-[url(/assets/images/Union.svg)] bg-no-repeat bg-center bg-origin-border bg-cover">
			<div className="hidden lg:flex justify-between items-center pl-12 pr-12 pt-4 pb-4 w-full">
				<div className="flex justify-center items-center gap-2">
					<Image className=" cursor-pointer" src={logo} width={30} quality={100} alt="icon"/>
					<p className="text-white text-xl md:text-2xl lg:text-3xl font-space-grotesk font-bold">Quill</p>
				</div>
				<ul className="flex justify-center items-center gap-16 text-white font-space-grotesk font-semibold text-base">
					<Link className={`pb-3 hover:text-[#BCE743] ${pathname === "/" ? "border-b-[3px] border-[#BCE743]": ""}`} href="/" >Home</Link>
					<Link className={`pb-3 hover:text-[#BCE743] ${pathname === "/partners" ? "border-b-[3px] border-[#BCE743]": ""}`}  href="/partners" >Partners</Link>
					<Link className={`pb-3 hover:text-[#BCE743] ${pathname === "/about" ? "border-b-[3px] border-[#BCE743]": ""}`} href="/about" >About</Link>
					<Link className={`pb-3 hover:text-[#BCE743] ${pathname === "/contact" ? "border-b-[3px] border-[#BCE743]": ""}`} href="/contact" >Contact</Link>
				</ul>
				<Link className="" href="/">
				    <button className="font-space-grotesk font-bold text-[#15191D] text-lg bg-[#BCE743] h-12 w-48 rounded-[5px]">Create Account</button>
				</Link>
			</div>
			<div className="lg:hidden flex flex-col justify-center w-full">
			    <div className="flex justify-between items-center pl-6 pr-6">
					<div className="flex justify-center items-center gap-2">
						<Image className=" cursor-pointer" src={logo} width={30} quality={100} alt="icon"/>
						<p className="text-white text-xl md:text-2xl lg:text-3xl font-space-grotesk font-bold">Quill</p>
					</div>
					{ closeMobile ? <AiOutlineClose onClick={() => setCloseMobile(false)} className="cursor-pointer text-[27px] text-white" /> : <AiOutlineMenu onClick={() => setCloseMobile(true)} className="cursor-pointer text-white text-[27px]"/>}
			    </div>
				<motion.div
				    animate={closeMobile ? "open" : "closed"}
	                variants={variants}
	                className={`w-full bg-[#15191D] h-screen p-6 -mt-2 ${!closeMobile ? "hidden" : ""}`}
				>
					<ul className="flex flex-col justify-center gap-12 text-white font-space-grotesk font-semibold text-base">
						<Link className={`pb-3 hover:text-[#BCE743] ${pathname === "/" ? "border-b-[3px] border-[#BCE743]": ""}`} href="/" >Home</Link>
						<Link className={`pb-3 hover:text-[#BCE743] ${pathname === "/partners" ? "border-b-[3px] border-[#BCE743]": ""}`}  href="/partners" >Partners</Link>
						<Link className={`pb-3 hover:text-[#BCE743] ${pathname === "/about" ? "border-b-[3px] border-[#BCE743]": ""}`} href="/about" >About</Link>
						<Link className={`pb-3 hover:text-[#BCE743] ${pathname === "/contact" ? "border-b-[3px] border-[#BCE743]": ""}`} href="/contact" >Contact</Link>
						<Link className="" href="/">
					        <button className="font-space-grotesk font-bold text-[#15191D] text-lg bg-[#BCE743] h-12 w-48 rounded-[5px]">Create Account</button>
					    </Link>
					</ul>
				</motion.div>
			</div>
		</nav>
	)
}

export default Navbar