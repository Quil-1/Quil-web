'use client'
import React, {useState} from 'react'

const FormSection = () => {
	const [form, setForm] = useState({
		name:"",
		companyName: "",
		message: "",
		gender: ""
	})


	return (
		<div className="bg-white p-8 md:p-28 md:pt-16 md:pb-12 w-full ">
			<div className="flex flex-col gap-12 md:flex-row justify-center items-center md:justify-between  ">
			    <div className="flex flex-col gap-8 w-full md:w-1/2 ">
				    <div className="flex flex-col gap-2">
						<label className="font-space-grotesk font-bold text-[#15191D] text-lg" htmlFor="name">Your Name</label>
						<input 
						    className="placeholder:text-[#3A3A3A66] placeholder:font-inter text-poppins w-80 border-[1px] h-12 pl-6 border-black"
						    name="name"
						    id="name"
						    type="text"
						    placeholder="Pls enter your name"
						    value={form.name}
						    onChange={(e) => setForm({...form, name:e.target.value})}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-space-grotesk font-bold text-[#15191D] text-lg" htmlFor="companyName">Company name</label>
						<input 
						    className="placeholder:text-[#3A3A3A66] placeholder:font-inter text-poppins w-80 border-[1px] h-12 pl-6 border-black"
						    name="companyName"
						    id="companyName"
						    type="text"
						    placeholder="Where do you work?"
						    value={form.companyName}
						    onChange={(e) => setForm({...form, companyName:e.target.value})}
						/>
					</div>
					<div className="flex items-center gap-12">
					    <div className="flex items-center gap-2">
							<input 
							    className="w-6 h-6"
							    name="gender"
							    id="male"
							    type="radio"
							    value="male"
							    onChange={(e) => setForm({...form, gender:e.target.value})}
							/>
							<label className="font-space-grotesk font-bold text-[#15191D] text-lg" htmlFor="male">Male</label>
					    </div>
					    <div className="flex items-center gap-2">
							<input 
							    className="w-6 h-6"
							    name="gender"
							    id="female"
							    type="radio"
							    value="female"
							    onChange={(e) => setForm({...form, gender:e.target.value})}
							/>
							<label className="font-space-grotesk font-bold text-[#15191D] text-lg" htmlFor="female">Female</label>
					    </div>	
					</div>
				</div>
				<div className="flex flex-col items-start md:items-end gap-12 w-full md:w-1/2">
					<textArea
					   className="placeholder:text-[#3A3A3A66] placeholder:font-inter text-poppins w-80 border-[1px] h-40 pl-6 pt-4 border-black"
					    name="message"
					    id="message"
					    type="text"
					    placeholder="Write something here..."
					    value={form.message}
					    onChange={(e) => setForm({...form, message:e.target.value})}
					/>
					<button className="text-white font-space-grotesk font-bold text-lg bg-[#15191D] w-80 h-12 rounded-[5px]">Connect me to an NGO</button>
				</div>
			</div>
		</div>
	)
}

export default FormSection