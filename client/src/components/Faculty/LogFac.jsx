import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// import Navbar from "./Navbar";
const LogFac = () => {
	const token = localStorage.getItem("token")

	const navigate = useNavigate();
	const [empId, setEmpID] = useState("");
	const [pass, setPass] = useState("");
	function postData() {
		fetch("http://localhost:8000/api/v1/faculty/auth/login", {
			method: "POST",
			body: JSON.stringify({
				empId: empId,
				password: pass,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				//alert(data + " submitted successfully");
				console.log(data);
				window.localStorage.setItem("tokennew",data['token'])

			})
			.catch((error) => alert("Error:", error));
	}

	const submitHandler = (e) => {
		e.preventDefault();
		postData();
		navigate('/faculty/auth/facultyua');
	};

	return (
		<>
			{/* <Navbar></Navbar> */}
			<div className="flex justify-center items-center">
			<h1 className="main1">FACULTY REGISTRATION</h1>

				<div className="w-full max-w-xs">
					<form
						className="bg-blue-900 shadow-md rounded px-8 pt-6 pb-8 mb-4"
						onSubmit={submitHandler}>
						<div className="mb-4">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="empId">
								Employee ID
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="empId"
								type="text"
								placeholder="12347"
								onChange={(e) => {
									setEmpID(e.target.value);
								}}
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="pass">
								Password
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="pass"
								type="password"
								placeholder="abcdefgh"
								onChange={(e) => {
									setPass(e.target.value);
								}}
							/>
						</div>
						<div className="flex items-center justify-between">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="submit">
								Submit
							</button>
						</div>
					</form>
					<p className="text-center text-gray-500 text-xs">
						©2023 Android Club. All rights reserved.
					</p>
				</div>
			</div>
		</>
	);
};

export default LogFac;
