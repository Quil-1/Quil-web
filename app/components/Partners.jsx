'use client'
import React, {useState} from 'react'
import Card from './Card'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs';
import { LiaTimesSolid } from 'react-icons/lia';
import partnerImage from '../../public/assets/images/partnerImage.png'

const Partners = () => {
	const list = [1,2,3,4,5,6]
	const [clickedId, setClickedId] = useState(null);
	const [openModal, setOpenModal] = useState(false);

	
	return (
		<section id="partners" className="pt-4 pb-8 relative">
			<div className="bg-[#15191D] flex flex-col justify-center items-center p-16 pt-20 pb-48">
				<h1 className="flex flex-col gap-3 font-poppins font-bold text-white text-xl md:text-3xl lg:text-4xl p-2 text-center">Meet Our partner <span className="">NGO firms</span></h1>
				<p className="font-inter text-[#FFFFFF66] text-base text-center">Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor</p>
			</div>
			<div className="-mt-24 grid grid-cols-lgg gap-16 md:gap-8 lg:gap-16 pl-8 pr-8 md:pl-16 md:pr-16 lg:pr-20 lg:pl-20 xl:pl-24 xl:pr-24 place-items-center">
				{list.map((item,i) => (<div key={item}>
					<Card id={item} setOpenModal={setOpenModal} setClickedId={setClickedId}/>
					    { openModal && item === clickedId &&
						    <div key={clickedId} className="w-full h-full bg-modal-background absolute left-0 flex justify-center items-center top-0 bottom-0 right-0">
						        <div className="">
						            <div className='bg-white flex flex-col gap-2 justify-center items-center rounded-t-[30px] p-6 pl-8 pr-8'>
										<div onClick={() => setOpenModal(false)} className="bg-black w-fit rounded-full p-1 self-end cursor-pointer"><LiaTimesSolid className="text-white" /></div>
										<p className="font-space-grotesk text-[#3A3A3A] text-center font-medium text-lg">You’ve been connected <br/>to XYZ</p>
										<Image 
										    className="w-[300px]" 
										    src={partnerImage} 
										    width={240} 
										    quality={100} 
										    alt="partner"
									    />
								    </div>
								    <div className="flex flex-col gap-2 bg-[#111111] justify-center items-center p-8">
									    <button className="bg-[#9F1FED] rounded-[5px] w-48 h-12 font-space-grotesk text-white text-sm">Email</button>
									    <button className="bg-[#0E71B9] rounded-[5px] w-48 h-12 font-space-grotesk text-white text-sm">Facebook</button>
									    <button className="bg-[#58A4EA] rounded-[5px] w-48 h-12 font-space-grotesk text-white text-sm">Twitter</button>
									    <button className="bg-gradient-to-r from-[#F42B7F] to-[#F6DE8C] rounded-[5px] w-48 h-12 font-space-grotesk text-white text-sm">Instagram</button>
								    </div>
							    </div>
							</div>
					    }
				</div>))}
			</div>
			<div className="flex justify-center items-center gap-2 p-8 mt-2">
				{
					list.map((item) => (<button className={`font-bold font-inter text-base w-8 h-8 rounded-[4px] ${item === 1 ? "bg-[#15191D] text-white":"bg-[#F4F4F4] text-[#192252]" }`} key={item}>{item}</button>))
				}
				<button className="font-bold font-inter text-base w-8 h-8 flex justify-center items-center rounded-[4px] bg-[#F4F4F4] text-[#192252]"><BsArrowRight className="text-2xl"/></button>
			</div>
			
		</section>
	)
}

export default Partners