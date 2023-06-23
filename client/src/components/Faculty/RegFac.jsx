import React, { useState } from "react";
// import Navbar from "./Navbar";
const RegFac = () => {
	const [name, setName] = useState("");
	const [empID, setEmpID] = useState("");
    const [password, setPass] = useState("");
	const [isHOD, setisHOD] = useState(Boolean);
    var s = isHOD==="true"?true:false;
	function postData() {
		fetch("http://localhost:8000/api/v1/faculty/auth/register", {
			method: "POST",
			body: JSON.stringify({
				name:name,
                empId:empID,
                password:password,
                isHOD:s,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				alert(data + " submitted successfully");
				console.log(data);
			})
			.catch((error) => alert("Error:", error));
	}

	const submitHandler = (e) => {
		e.preventDefault();
		postData();
	};

	return (
		<>
			{/* <Navbar></Navbar> */}
			<div className="flex justify-center items-center">
				<div className="w-full max-w-xs">
					<form
						className="bg-blue-900 shadow-md rounded px-8 pt-6 pb-8 mb-4"
						onSubmit={submitHandler}>
						<div className="mb-4">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="Name">
								Name
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
								id="Name"
								type="text"
								placeholder="Name"
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="EmpID">
								Employee ID
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="EmpID"
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
						<div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="isHOD">
								IS HOD
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="iSHOD1"
								type="radio"
                                name="ishod1"
                                value= "true"
								onChange={(e) => {
									setisHOD(e.target.value);
								}}
							/>
                            <label for="yes"> YES </label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="iSHOD0"
								type="radio"
                                name="ishod0"
                                value= "false"
								onChange={(e) => {
									setisHOD(e.target.value);
								}}
							/>
                            <label for="no"> NO </label>

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

export default RegFac;
