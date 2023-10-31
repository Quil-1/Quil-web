import React from 'react'

const Bottomsection = () => {
	return (
		<div className="p-8 md:p-16 bg-white ">
			<div className="bg-[#15191D] rounded-[30px] flex flex-col justify-center items-center gap-4 p-8">
				<h1 className="font-inter font-bold text-xl md:text-2xl md:text-4xl text-white text-center">
				    With <span className="text-[#BCE743]">Quill,</span> you can achieve a 
                    <br/>more productive work environment.
                </h1>
                <p className="font-inter text-[#FFFFFF] text-sm">Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit</p>
                <div>
                	<input className="rounded-[30px] w-[24rem] h-12 pl-4 placeholder:pl-4 placeholder:text-[#FFFFFFF0] bg-[#1E1E20] " type="text" placeholder="dclabstheghuy@gmail.com"/>
                	<button className="font-medium font-inter text-[#1E1E20] text-base h-10 w-24 translate-x-24 bg-white rounded-[30px]">Subscribe</button>
                </div>
			</div>
		</div>
	)
}

export default Bottomsection 