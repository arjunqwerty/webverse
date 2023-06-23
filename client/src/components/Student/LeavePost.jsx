import React, { useState } from "react";
// import Navbar from "./Navbar";
const LeavePost = () => {
	const [type, setType] = useState("");
	const [date, setDate] = useState("");
    const [time, setTime] = useState("");
	const [dur, setDur] = useState("");
	function postData() {
        fetch("http://localhost:8000/api/v1/student/leave", {
            method: "POST",
			body: JSON.stringify({
                leaveType:type,
                leaveDate:date,
                leaveTime:time,
                leaveDuration:dur,
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
        console.log(typeof(type));
        console.log(typeof(date));
        console.log(typeof(time));
        console.log(typeof(dur));
		postData();
	};

	return (
		<>
			{/* <Navbar></Navbar> */}
			<div className="flex justify-center items-center">
				<div className="w-full max-w-xs">
					<form className="bg-blue-900 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
						<div className="mb-4">
							<label htmlFor="leaveType">Leave Type</label>
							<input id="leaveType" type="text" placeholder="Casual" onChange={(e) => {setType(e.target.value);}}/>
						</div>
						<div className="mb-6">
							<label htmlFor="leaveDate">Leave Date</label>
							<input id="leaveDate" type="text" placeholder="YYYY-MM-DD" onChange={(e) => {setDate(e.target.value);}}/>
						</div>
						<div className="mb-6">
							<label htmlFor="leaveTime">Leave Time</label>
							<input id="leaveTime" type="text" placeholder="HH:MM:SS" onChange={(e) => {setTime(e.target.value);}}/>
						</div>
						<div className="mb-6">
							<label htmlFor="leaveDuration">Leave Duration</label>
							<input id="leaveDuration" type="text" placeholder="Days" onChange={(e) => {setDur(e.target.value);}}/>
						</div>
						<div className="flex items-center justify-between">
							<button type="submit">Submit</button>
						</div>
					</form>
					<p className="text-center text-gray-500 text-xs">©2023 Android Club. All rights reserved.</p>
				</div>
			</div>
		</>
	);
};

export default LeavePost;
