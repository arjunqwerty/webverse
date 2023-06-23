import {useEffect,useState} from 'react'
import axios from 'axios';

function Register() {
    const [name, setName] = useState("");
	const [regNo, setRegNo] = useState("");
	const [blockNo, setBlockNo] = useState("");
	const [pass, setPass] = useState("");
	const [roomNo, setRoomNo] = useState("");
    const [value,setvalue]=useState([])
	function postData() {
		fetch("http://localhost:8000/api/v1/student/auth/register", {
			method: "POST",
			body: JSON.stringify({
				name: name,
				regNo: regNo,
				block: blockNo,
				password: pass,
				roomNo: roomNo,
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
				setvalue(data);
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
									<h1 className='main'> Register to VIT hostel managment</h1>

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
								htmlFor="regNo">
								Register Number
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="regNo"
								type="text"
								placeholder="21BCE1001"
								onChange={(e) => {
									setRegNo(e.target.value);
								}}
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="blockNo">
								Block name
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="blockNo"
								type="text"
								placeholder="A"
								onChange={(e) => {
									setBlockNo(e.target.value);
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
								type="text"
								placeholder="Ssssshhhhh"
								onChange={(e) => {
									setPass(e.target.value);
								}}
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								htmlFor="roomNo">
								Room
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="roomNo"
								type="text"
								placeholder="1101"
								onChange={(e) => {
									setRoomNo(e.target.value);
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


export default Register