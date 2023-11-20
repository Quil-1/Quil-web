'use client'
import React, {useState} from 'react'
import { LiaTimesSolid } from 'react-icons/lia';
import Link from 'next/link'
import Image from 'next/image'
import Vector from '../../public/assets/images/Vector.svg'
import { FaEyeSlash } from "react-icons/fa";
import {auth, db} from '../config/Firebase'
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {addDoc, collection} from 'firebase/firestore';
import { useRouter } from 'next/navigation'


const Register = () => {
	const router = useRouter()
	const [passwordToggle, setPasswordToggle] = useState(false);
	const [passwordToggle2, setPasswordToggle2] = useState(false);
	const [isValid, setIsValid] = useState(true);
	const [phoneValid, setPhoneValid] = useState(true);
	const [passwordValid, setPasswordValid] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const [stage, setStage] = useState(1);
	const [form, setForm] = useState({
		name: "",
		phoneNumber: "",
		email: "",
		placeOfWork: "",
		password: "",
		confirmPassword: ""
	})
	const handleEmail = (e) => {
		const inputEmail = e.target.value;
	    setForm({...form, email:inputEmail});

	    // Regular expression for email validation
	    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	    setIsValid(emailRegex.test(inputEmail));
	}
	const handlePhoneNumber = (e) => {
		const inputNumber = e.target.value;
		setForm({...form, phoneNumber:inputNumber})
		const phoneRegex = /^\+234[789][01]\d{8}$/;
		setPhoneValid(phoneRegex.test(inputNumber));
	}

	const handlePassword = (e) => {
		const inputPassword = e.target.value;
		setForm({...form, password:inputPassword})
		const passwordRegex = /^(?=.*[A-Z])(?=.*[@*&])[A-Za-z@*&]{7,}$/;
		setPasswordValid(passwordRegex.test(inputPassword));
	}

	const handleStage = () => {
		if(stage === 1){
			if(form.name === "" || form.email ==="" || phoneNumber==="" || form.placeOfWork === ""){
				return
			}else{
			    setStage(2)
		    }
		}else{
			register()
		}
	}

	const register = async () => {
		if(form.name === "" || form.email ==="" || form.password === "" || form.placeOfWork === ""){
			return
		}
		if (form.password !== form.confirmPassword){
			setErrorMessage("password doesn't match")
		}
		try{
		    await createUserWithEmailAndPassword(auth,form.email, form.password);
		    await updateProfile(auth.currentUser, {
			    displayName: form.name
			});
			const userDocRef = collection(db,form.email) 
			await addDoc(userDocRef,{
				name: form.name,
			    phoneNumber: form.phoneNumber,
			    placeOfWork: form.placeOfWork
			});
			router.push('/dashboard')

		}catch(err){
			console.error(err);
			//setErrorMessage("Invalid Credentials")
		}
	}

	return (
		<div className=" flex flex-col justify-center items-center bg-[#15191D] bg-[url(/assets/images/Union.svg)] bg-no-repeat bg-center bg-origin-border bg-cover p-8 pb-12 lg:p-16 lg:pt-8">
		    <Link href='/' className="bg-white w-fit rounded-full p-1 mb-8 self-end"><LiaTimesSolid className="" /></Link>
			<h1 className="font-space-grotesk font-bold textxl md:text-3xl lg:text-5xl text-white text-center p-4 pt-0">Create Account</h1>
			<div className="w-full flex justify-center items-center p-4 mb-12 ">
				<button className="bg-[#BCE743] w-40 md:w-48 lg:w-[15rem] h-1 rounded-l-[16px]"></button>
				<button className={` w-40 md:w-48 lg:w-[15rem] h-1 rounded-r-[16px] ${stage===1 ? 'bg-[#D9D9D9]' : 'bg-[#BCE743]'}`}></button>
			</div>
			{stage === 1 ? 
				<form className="flex flex-col justify-center items-center gap-10">
				    <div className="flex flex-col gap-2">
						<label className="text-white font-poppins text-base" htmlFor="name">Name</label>
						<input
						    className="text-white text-poppins border-white w-80 md:w-96 lg:w-[30rem] border-[1px] h-12 pl-6 bg-[#15191D] rounded-[8px]"
						    name="name"
						    id="name"
						    type="text"
						    value={form.name}
						    onChange={(e) => setForm({...form, name:e.target.value})}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-white font-poppins text-base" htmlFor="phoneNumber">Phone Number</label>
						<input
						    className="text-white text-poppins border-white w-80 md:w-96 lg:w-[30rem] border-[1px] h-12 pl-6 bg-[#15191D] rounded-[8px]"
						    name="phoneNumber"
						    id="phoneNumber"
						    type="text"
						    value={form.phoneNumber}
						    onChange={(e) => handlePhoneNumber(e)}
						/>
						{!phoneValid && <p className="text-red-300 -mt-2">Invalid phone number</p>}
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-white font-poppins text-base" htmlFor="email">Email</label>
						<input
						    className="text-white text-poppins border-white w-80 md:w-96 lg:w-[30rem] border-[1px] h-12 pl-6 bg-[#15191D] rounded-[8px]"
						    name="email"
						    id="email"
						    type="email"
						    value={form.email}
						    onChange={(e) => handleEmail(e)}
						/>
						{!isValid && <p className="text-red-300 -mt-2">Invalid email address</p>}
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-white font-poppins text-base" htmlFor="placeOfWork">Place of Work</label>
						<input
						    className="text-white text-poppins border-white w-80 md:w-96 lg:w-[30rem] border-[1px] h-12 pl-6 bg-[#15191D] rounded-[8px]"
						    name="placeOfWork"
						    id="placeOfWork"
						    type="email"
						    value={form.placeOfWork}
						    onChange={(e) => setForm({...form, placeOfWork:e.target.value})}
						/>
					</div>
				</form> :
				<form className="flex flex-col justify-center gap-10 items-center pl-6">
					<div className="flex flex-col gap-2">
						<label className="text-white font-poppins text-base" htmlFor="password">Password</label>
						<div className='flex justify-center items-center'>
							<input
							    className="text-white text-poppins border-white w-80 md:w-96 lg:w-[30rem] border-[1px] h-12 pl-6 bg-[#15191D] rounded-[8px]"
							    name="password"
							    id="password"
							    type={passwordToggle ? "text" : "password"}
							    value={form.password}
							    onChange={(e) => handlePassword(e)}
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
					    {!passwordValid && <p className="text-red-300 -mt-2">Password must match the criteria below</p>}
					    <ul>
							<li className="font-space-grotesk font-light text-sm text-white flex items-center gap-2">
								<button className="w-1 h-1 bg-white rounded-full"></button> Password should have 1 uppercase character
							</li>
							<li className="font-space-grotesk font-light text-sm text-white flex items-center gap-2">
								<button className="w-1 h-1 bg-white rounded-full"></button> Password should have 1 special character - <span className="text-[#BCE743]">@ *&</span>
							</li>
							<li className="font-space-grotesk font-light text-sm text-white flex items-center gap-2">
								<button className="w-1 h-1 bg-white rounded-full"></button> Password should have at least 7 characters
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-white font-poppins text-base" htmlFor="confirmPassword">Confirm Password</label>
						<div className='flex justify-center items-center'>
							<input
							    className="text-white text-poppins border-white w-80 md:w-96 lg:w-[30rem] border-[1px] h-12 pl-6 bg-[#15191D] rounded-[8px]"
							    name="confirmPassword"
							    id="confirmPassword"
							    type={passwordToggle2 ? "text" : "password"}
							    value={form.confirmPassword}
							    onChange={(e) => setForm({...form, confirmPassword:e.target.value})}
							/>
							{   
								passwordToggle2 ? <Image 
								    className=" -translate-x-8 cursor-pointer" 
								    src={Vector} 
								    width={20} 
								    //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 470px"
								    //placeholder= "blur"
								    quality={100} 
								    alt="eye"
								    onClick={() => setPasswordToggle2(false)}
							    /> :
							    <FaEyeSlash className="text-white w-5 -translate-x-8 cursor-pointer" onClick={() => setPasswordToggle2(true)}/>
						    }
					    </div>
					</div>
				</form>
		    }
			<div className="mt-16">
				<button onClick={handleStage} className='font-inter font-bold text-sm md:text-base lg:text-lg bg-[#BCE743] w-80 md:w-96 lg:w-[30rem] h-12 rounded-[8px]'>{stage===1? 'Next': 'Sign Up'}</button>
			</div>
			{
				errorMessage && <div className="absolute top-0 bottom-0 right-0 left-0 w-screen h-full bg-[#E5E5E5] flex flex-col justify-center items-center"
				>
				    
					<div className="w-72 h-36 rounded-[8px] bg-white flex flex-col justify-center items-center gap-3">
						<h1 className="text-center font-space-grotesk font-bold text-red-300"
						>{errorMessage}</h1>
						<div onClick={() => setErrorMessage("")} className=" rounded-[8px] w-28 text-center p-1 bg-[#BCE743] cursor-pointer">Try Again</div>
					</div>
				</div>
			}
		</div>
	)
}

export default Register