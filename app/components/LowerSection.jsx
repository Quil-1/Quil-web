import React from 'react'

const LowerSection = () => {
	return (
		<div className="p-4 md:p-16 bg-white  ">
			<div className="bg-[#15191D] rounded-[30px] flex flex-col justify-center items-center gap-10 p-8 pt-16 pb-16">
				<h1 className="font-inter font-bold text-xl md:text-2xl md:text-4xl text-white text-center">
				    With <span className="text-[#BCE743]">Quill,</span> you can achieve a 
                    <br/>more productive work environment.
                </h1>
                <p className="font-inter text-[#FFFFFF] text-sm text-center md:text-base opacity-60">Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit</p>
                <div className="flex flex-col justify-center items-end md:flex-row md:justify-center md:items-center relative w-full">
                	<input className="rounded-[30px] w-[19.2rem] md:w-[24rem] h-14 pl-4 text-white pl-4 placeholder:pl-4 placeholder:text-[#FFFFFFF0] placeholder:text-sm  bg-[#FFFFFF29] " type="text" placeholder="dclabstheghuy@gmail.com"/>
                	<button className="font-medium font-inter text-[#1E1E20] text-sm h-11 w-[7.3rem] md:absolute -translate-x-2 -translate-y-[3.2rem] md:translate-y-0 md:translate-x-[7.8rem] bg-white rounded-[30px]">Subscribe</button>
                </div>
			</div>
		</div>
	)
}

export default LowerSection