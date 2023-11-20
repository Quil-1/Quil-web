'use client'
import React, {useState} from 'react'
import Card from './Card'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs';
import { LiaTimesSolid } from 'react-icons/lia';
import partnerImage from '../../public/assets/images/partnerImage.png'
import NGO2 from '../../public/assets/images/NGO2.png'
import NGO3 from '../../public/assets/images/NGO3.png'

const Partners = () => {
	const list = [1,2,3]
	const partners = [
	    {
	    	name:"Nigerian NG0 and Foundation", 
	        details:"One of the largest providers of counselling support services in Nigeria, with direct support given to over 45,000 persons", 
	        src:partnerImage, id:0,
	        email:"",
	        facebook:"",
	        twitter:"",
	        instagram:""
	    },
	    {
	    	name:"Psychebabble", 
	    	details:"Youth-led organization strengthening mental health care services in Nigeria, Africa and beyond", 
	    	src:NGO2, id:1,
	    	email:"mailto:info@psychebabblefoundation.com",
	        facebook:"https://facebook.com/psychebabbleng",
	        twitter:"https://www.twitter.com/psychebabbleng",
	        instagram:"https://instagram.com/psychebabbleng"
	    },
	    {
	    	name:"MANI", 
	    	details:"Destigmatizing mental health will empower people to openly speak about mental health issues and seek the help they need.", 
	    	src:NGO3, id:2,
	    	email:"mailto:info@mentallyaware.org",
	        facebook:"https://www.facebook.com/mentallyawareng",
	        twitter:"https://twitter.com/MentallyAwareNG",
	        instagram:"https://www.instagram.com/mentallyawareng/"
	    }
	]
	const [clickedId, setClickedId] = useState(null);
	const [openModal, setOpenModal] = useState(false);

	
	return (
		<section id="partners" className="pt-4 pb-8 relative">
			<div className="bg-[#15191D] flex flex-col justify-center items-center p-16 pt-20 pb-48">
				<h1 className="flex flex-col gap-3 font-poppins font-bold text-white text-xl md:text-3xl lg:text-4xl p-2 text-center">Meet Our partner <span className="">NGO firms</span></h1>
				<p className="font-inter text-[#FFFFFF66] text-base text-center">Reach out to any of these partnering companies when in need.</p>
			</div>
			<div className="-mt-24 grid grid-cols-lgg gap-16 md:gap-8 lg:gap-16 pl-8 pr-8 md:pl-16 md:pr-16 lg:pr-20 lg:pl-20 xl:pl-24 xl:pr-24 place-items-center">
				{partners.map((item,i) => (<div key={item.id}>
					<Card id={item.id} item={item} setOpenModal={setOpenModal} setClickedId={setClickedId}/>
					    { openModal && item.id === clickedId &&
						    <div key={clickedId} className="w-full h-full bg-modal-background absolute left-0 flex justify-center items-center top-0 bottom-0 right-0">
						        <div className="">
						            <div className='bg-white flex flex-col gap-2 justify-center items-center rounded-t-[30px] p-4 pl-8 pr-8'>
										<div onClick={() => setOpenModal(false)} className="bg-black w-fit rounded-full p-1 self-end cursor-pointer"><LiaTimesSolid className="text-white" /></div>
										<p className="font-space-grotesk text-[#3A3A3A] text-center font-medium text-lg">You’ve been connected <br/>to <span className="font-bold">{partners[clickedId].name}</span></p>
										<Image 
										    className="w-[300px]" 
										    src={partners[clickedId].src} 
										    width={240} 
										    quality={100} 
										    alt="partner"
									    />
								    </div>
								    <div className="flex flex-col gap-2 bg-[#111111] justify-center items-center p-6 pb-8">
									    <a href={partners[clickedId].email} target="_blank" rel="noopener noreferrer" className="bg-[#9F1FED] rounded-[5px] w-48 h-12 lg:h-8 font-space-grotesk text-white text-sm flex justify-center items-center">Email</a>
									    <a href={partners[clickedId].facebook} target="_blank" rel="noopener noreferrer" className="bg-[#0E71B9] rounded-[5px] w-48 h-12 lg:h-8 font-space-grotesk text-white text-sm flex justify-center items-center">Facebook</a>
									    <a href={partners[clickedId].twitter} target="_blank" rel="noopener noreferrer" className="bg-[#58A4EA] rounded-[5px] w-48 h-12 lg:h-8 font-space-grotesk text-white text-sm flex justify-center items-center">Twitter</a>
									    <a href={partners[clickedId].instagram} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#F42B7F] to-[#F6DE8C] rounded-[5px] w-48 h-12 lg:h-8 font-space-grotesk text-white text-sm flex justify-center items-center">Instagram</a>
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