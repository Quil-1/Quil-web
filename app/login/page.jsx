'use client'
import React, {useState} from 'react'
import { LiaTimesSolid } from 'react-icons/lia';
import Link from 'next/link'
import Image from 'next/image'
import Vector from '../../public/assets/images/Vector.svg'
import { FaEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/navigation'
import {auth} from '../config/Firebase'
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
	const router = useRouter()
	const [passwordToggle, setPasswordToggle] = useState(false);
	const [passwordToggle2, setPasswordToggle2] = useState(false);
	const [form, setForm] = useState({
		email: "",
		password: ""
	})

	const handleLogin = async () => {
		if(form.email ==="" || form.password === "" ){
			return
		}
		try{
		    await signInWithEmailAndPassword(auth, form.email, form.password)
			router.push('/dashboard')
		}catch(err){
			console.error(err);
			//setErrorMessage("Invalid Credentials")
		}
	}

	return (
		<div className=" flex flex-col justify-center items-center bg-[#15191D] bg-[url(/assets/images/Union.svg)] bg-no-repeat bg-center bg-origin-border bg-cover p-8 lg:p-16 lg:pt-8">
		    <Link href='/' className="bg-white w-fit rounded-full p-1 mb-8 self-end"><LiaTimesSolid className="" /></Link>
			<h1 className="font-space-grotesk font-bold textxl md:text-3xl lg:text-5xl text-white text-center p-4 pt-0 mb-12">Login to your account</h1>
			<form className="flex flex-col justify-center items-center gap-10">  
				<div className="flex flex-col gap-2">
					<label className="text-white font-poppins text-base" htmlFor="email">Email</label>
					<input
					    className="text-white text-poppins border-white w-80 md:w-96 lg:w-[30rem] border-[1px] h-12 pl-6 bg-[#15191D] rounded-[8px]"
					    name="email"
					    id="email"
					    type="email"
					    value={form.email}
					    onChange={(e) => setForm({...form, email:e.target.value})}
					/>
				</div>
				<div className="flex flex-col gap-2 pl-6">
					<label className="text-white font-poppins text-base" htmlFor="password">Password</label>
					<div className='flex justify-center items-center'>
						<input
						    className="text-white text-poppins border-white w-80 md:w-96 lg:w-[30rem] border-[1px] h-12 pl-6 bg-[#15191D] rounded-[8px]"
						    name="password"
						    id="password"
						    type={passwordToggle ? "text" : "password"}
						    value={form.password}
						    onChange={(e) => setForm({...form, password:e.target.value})}
						/>

						{   
							passwordToggle ? <Image 
							    className=" -translate-x-8 cursor-pointer" 
							    src={Vector} 
							    width={20} 
							    //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 470px"
							    //placeholder= "blur"
							    quality={100} 
							    alt="eye"
							    onClick={() => setPasswordToggle(false)}
						    /> :
						    <FaEyeSlash className="text-white w-5 -translate-x-8 cursor-pointer" onClick={() => setPasswordToggle(true)}/>
					    }
				    </div>
				</div>
			</form>
			<div className="mt-16">
				<button onClick={handleLogin} className='font-inter font-bold text-sm md:text-base lg:text-lg bg-[#BCE743] w-80 md:w-96 lg:w-[30rem] h-12 rounded-[8px]'>Log in</button>
				<p className="text-white font-space-grotesk text-base text-center mt-4 ">No account yet ? <Link className="hover:text-[#BCE743]" href="/register">Create Account</Link></p>
			</div>
		</div>
	)
}

export default Login