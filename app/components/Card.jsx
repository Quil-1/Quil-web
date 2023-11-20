'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import partnerImage from '../../public/assets/images/partnerImage.png'
//import { LiaTimesSolid } from 'react-icons/lia';

const Card = ({id}) => {
	// const [clickedId, setClickedId] = useState("");
	// const [openModal, setOpenModal] = useState(false);
	// const handleConnect = (id) => {
	// 	setClickedId(id);
	// 	setOpenModal(true);
	// }
	return (
		<div className="w-[300px] rounded-[8px] bg-white shadow-xl">
		    <div className="bg-[#E7E9E1] p-3 rounded-t-[8px]">
				<Image 
				    className="w-[300px]" 
				    src={partnerImage} 
				    width={240} 
				    quality={100} 
				    alt="partner"
				/>
			</div>
			<div className="p-4 flex flex-col justify-center items-center gap-3">
				<p className="font-inter text-[#0C0C1D99] text-xs text-center pl-6 pr-6">Lorem ipsum dolor sit malor orem ipsum dolor sit Lorem ipsum dolor sit malor orem ipsum dolor</p>
			    <button className="font-inter text-[#15191D] font-medium text-base bg-[#BCE743] rounded-[8px] w-[250px] h-8">Connect</button>
			</div>
			{/*{
				!openModal && <div>
					<div onClick={setOpenModal(false)} className="bg-white w-fit rounded-full p-1 mb-8 self-end"><LiaTimesSolid className="" /></div>
					<p className="font-space-grotesk text-[#3A3A3A]">You’ve been connected to XYZ</p>
					<Image 
					    className="w-[300px]" 
					    src={partnerImage} 
					    width={240} 
					    quality={100} 
					    alt="partner"
				    />
				    <button className="bg-[#9F1FED] rounded-[10px] w-44 h-12 font-space-grotesk text-white text-sm">Email</button>
				    <button>Facebook</button>
				    <button>Twitter</button>
				    <button>Instagram</button>
				</div>
			}*/}
		</div>
	)
}

export default Card