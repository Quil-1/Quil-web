'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from '../../public/assets/images/logo.svg'
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const getActiveSection = () => {
	const sections = document.querySelectorAll('section');
	let activeSection = null;

	sections.forEach(section => {
		const rect = section.getBoundingClientRect();
		if (rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2) {
		    activeSection = section;
		}
	});

    return activeSection ? activeSection.id : null;
};

const Navbar = () => {
	const [closeMobile, setCloseMobile] = useState(false);
	const [activeSection, setActiveSection] = useState(null);
	const pathname = usePathname()
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-200%" },
	}

	const handleClick = (e, target) => {
	    e.preventDefault();
	    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
	    const handleScroll = () => {
			const newActiveSection = getActiveSection();
			setActiveSection(newActiveSection);
	    };

	    window.addEventListener('scroll', handleScroll);

	    // Clean up event listener on component unmount
	    return () => {
	        window.removeEventListener('scroll', handleScroll);
	    };
    }, [activeSection]);

	return (
		<nav className="bg-[#15191D] h-[4.5rem] lg:h-24 w-full sticky top-0 z-50 bg-[url(/assets/images/Union.svg)] bg-no-repeat bg-center bg-origin-border bg-cover">
			<div className="hidden lg:flex justify-between items-center pl-12 pr-12 pt-4 pb-4 w-full">
				<div className="flex justify-center items-center gap-2">
					<Image className=" cursor-pointer" src={logo} width={30} quality={100} alt="icon"/>
					<p className="text-white text-xl md:text-2xl lg:text-3xl font-space-grotesk font-bold">Quill</p>
				</div>
				<ul className="flex justify-center items-center gap-16 text-white font-space-grotesk font-semibold text-base">
					<Link className={`pb-3 hover:text-[#BCE743] ${activeSection === null ? "border-b-[3px] border-[#BCE743]": ""}`} href="/"  >Home</Link>
					<Link className={`pb-3 hover:text-[#BCE743] ${activeSection === "partners" ? "border-b-[3px] border-[#BCE743]": ""}`}  href="#partners" onClick={(e) => handleClick(e, '#partners')} >Partners</Link>
					<Link className={`pb-3 hover:text-[#BCE743] ${pathname === "/about" ? "border-b-[3px] border-[#BCE743]": ""}`} href="/about" >About</Link>
					<Link className={`pb-3 hover:text-[#BCE743] ${activeSection === "contact" ? "border-b-[3px] border-[#BCE743]": ""}`} href="#contact" onClick={(e) => handleClick(e, '#contact')} >Contact</Link>
				</ul>
				<div className="flex justify-center items-center gap-6">
				    <Link className={`text-white font-space-grotesk font-semibold text-base pb-3 hover:text-[#BCE743] ${pathname === "/login" ? "border-b-[3px] border-[#BCE743]": ""}`} href="/login">Log In</Link>
					<Link className="" href="/register">
					    <button className="font-space-grotesk font-bold text-[#15191D] text-lg bg-[#BCE743] h-12 w-48 rounded-[5px]">Create Account</button>
					</Link>
				</div>
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
						<li onClick={() => setCloseMobile(false)}><Link className={`pb-3 hover:text-[#BCE743] ${activeSection === null ? "border-b-[3px] border-[#BCE743]": ""}`} href="/" >Home</Link></li>
						<li onClick={() => setCloseMobile(false)}><Link className={`pb-3 hover:text-[#BCE743] ${activeSection === "partners" ? "border-b-[3px] border-[#BCE743]": ""}`}  href="#partners" onClick={(e) => handleClick(e, '#partners')}>Partners</Link></li>
						<li onClick={() => setCloseMobile(false)}><Link className={`pb-3 hover:text-[#BCE743] ${pathname === "/about" ? "border-b-[3px] border-[#BCE743]": ""}`} href="/about" >About</Link></li>
						<li onClick={() => setCloseMobile(false)}><Link className={`pb-3 hover:text-[#BCE743] ${activeSection === "contact" ? "border-b-[3px] border-[#BCE743]": ""}`} href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</Link></li>
						<li onClick={() => setCloseMobile(false)}><Link className={`pb-3 hover:text-[#BCE743] ${pathname === "/login" ? "border-b-[3px] border-[#BCE743]": ""}`} href="/login" >Log in</Link></li>
						<li onClick={() => setCloseMobile(false)}><Link className="" href="/register">
					        <button className="font-space-grotesk font-bold text-[#15191D] text-lg bg-[#BCE743] h-12 w-48 rounded-[5px]">Create Account</button>
					    </Link></li>
					</ul>
				</motion.div>
			</div>
		</nav>
	)
}

export default Navbar