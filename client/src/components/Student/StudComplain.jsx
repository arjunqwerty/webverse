import React, { useState } from "react";
//import { useNavigate } from 'react-router-dom';
// import Navbar from "./Navbar";
const StudComplain = () => {
	// const navigate = useNavigate();
	const [ComplaintType, setCT] = useState("");
	const [ComplaintDate, setCD] = useState("");
    const [ComplaintDesc, setCDesc] = useState("");
    const [ComplaintSeverity, setCS] = useState("");
	function postData() {
		fetch("http://localhost:8000/api/v1/student/complaint", {
			method: "POST",
			body: JSON.stringify({
				complaintType: ComplaintType ,
                complaintDate: ComplaintDate,
                complaintDescription: ComplaintDesc,
                complaintSeverity:ComplaintSeverity,
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
			})
			.catch((error) => alert("Error:", error));
	}

	const submitHandler = (e) => {
		e.preventDefault();
		postData();
		//navigate('/student/info');

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
								htmlFor="complaint_type">
								Type of complaint
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="complaint_type"
								type="text"
								onChange={(e) => {
									setCT(e.target.value);
								}}
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="complaint_date">
								Complaint Date
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="complaint_date"
								type="date"
								placeholder="yy/mm/dd"
								onChange={(e) => {
									setCD(e.target.value);
								}}
							/>
						</div>
                        <div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="complaint_desc">
								Complaint Description
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="complaint_desc"
								type="text"
								onChange={(e) => {
									setCDesc(e.target.value);
								}}
							/>
						</div>
                        <div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="complaint_severity">
								Complaint Severity
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="complaint_severity"
								type="text"
								onChange={(e) => {
									setCS(e.target.value);
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

export default StudComplain;
