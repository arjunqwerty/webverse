import React, { useState } from "react";
//import { useNavigate } from 'react-router-dom';
// import Navbar from "./Navbar";
const Studevent = () => {
	//const navigate = useNavigate();
	const [eventName, setEventName] = useState("");
	const [eventDescription, setED] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [eventVenue, setEventVenue] = useState("");
    const [eventOrganiser, setOrganiser] = useState("");
    const [participationCount, setPC] = useState("");
    const [hostedBy, setHostedBy] = useState("");
    const [eventPoster, setEventPoster] = useState("");
	function postData() {
        const token = localStorage.getItem("token")
		fetch("http://localhost:8000/api/v1/student/event/", {
			method: "POST",
			body: JSON.stringify({
				eventName: eventName,
                eventDescription: eventDescription,
                eventDate: eventDate,
                eventTime: eventTime,
                eventVenue: eventVenue,
                eventOrganiser: eventOrganiser,
                participationCount: participationCount,
                hostedBy: hostedBy,
                eventPoster: eventPoster,
			}),
			headers: {
                'Authorization': `Bearer ${token} `,
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				window.localStorage.setItem("token",data['token'])
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
								htmlFor="eventname">
								Event Name
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="eventname"
								type="text"
								onChange={(e) => {
								setEventName(e.target.value);
								}}
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="eventdesc">
								Event Description
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="eventdesc"
								type="text"
								onChange={(e) => {
									setED(e.target.value);
								}}
							/>
						</div>

                        <div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="eventdate">
								Event Date
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="eventdate"
								type= "date"
								onChange={(e) => {
									setEventDate(e.target.value);
								}}
							/>
						</div>

                        <div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="eventtime">
								Event Time
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="eventtime"
								type= "time"
								onChange={(e) => {
									setEventTime(e.target.value);
								}}
							/>
						</div>

                        <div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="eventvenue">
								Event Venue
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="eventvenue"
								type="text"
								onChange={(e) => {
									setEventVenue(e.target.value);
								}}
							/>
						</div>

                        <div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="eventorganiser">
								Event Organiser
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="eventorganiser"
								type="text"
								onChange={(e) => {
									setOrganiser(e.target.value);
								}}
							/>
						</div>

                        <div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="participationcount">
								Participation Count
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="participationcount"
								type="text"
								onChange={(e) => {
									setPC(e.target.value);
								}}
							/>
						</div>
                        
                        <div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="hostedby">
								Hosted By
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="hostedby"
								type="text"
								onChange={(e) => {
									setHostedBy(e.target.value);
								}}
							/>
						</div>

                        <div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="eventposter">
								Event Poster
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="eventposter"
								type="text"
								onChange={(e) => {
									setEventPoster(e.target.value);
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

export default Studevent;
