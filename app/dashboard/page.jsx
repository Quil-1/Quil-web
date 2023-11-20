import React from 'react'
import {auth} from '../config/Firebase'
import { onAuthStateChanged } from "firebase/auth";
import Navbar from '../components/Navbar'

const Dashboard = () => {
	let userr ;
	onAuthStateChanged(auth, (user) => {
		if (user) {
		    userr = auth.currentUser
		} else {
		    userr="null"
		}
	});
	return (
		<div className="flex flex-col gap-4 justify-center items-center p-16">
			<p>Welcome {userr?.displayName}</p>
			<p>You are logged in</p>
		</div>
	)
}

export default Dashboard