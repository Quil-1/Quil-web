'use client'
import React from 'react'
import {auth} from '../config/Firebase'
import Navbar from '../components/Navbar'

const Dashboard = () => {

	return (
		<div className="flex flex-col gap-4 justify-center items-center p-16 font-space-grotesk text-[#3A3A3A]">
			<p className="font-medium">Welcome <span className="font-space-grotesk font-bold text-lg capitalize">{auth?.currentUser?.displayName}</span></p>
			<p>You are logged in</p>
			<p className="">Dashboard coming soon</p>
		</div>
	)
}

export default Dashboard