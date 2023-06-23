import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function LeaveGet({ id }) {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [dur, setDur] = useState("");
    const [isApp, setIsApp] = useState("");
    const [isRej, setIsRej] = useState("");
    const [isBla, setIsBla] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        await fetch("http://localhost:8000/api/v1/student/leave/", {
            headers: {
                Authorization: `Bearer ${token} `,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            setType(data["data"]["leaveType"]);
            setDate(data["data"]["leaveDate"]);
            setTime(data["data"]["leaveTime"]);
            setDur(data["data"]["duration"]);
            setIsApp(data["data"]["isApproved"])
            setIsRej(data["data"]["isRejected"])
        })
        .then(function() {
            if(!isApp && !isRej) {
                setIsBla("Waiting");
            } else if(isApp) {
                setIsBla("Approved");
            } else {
                setIsBla("Rejected");
            }
        })
        .catch((error) => console.error(error));
    };

    console.log(data);
    return (
        <div>
            <div className="buus">
                <button className="button3" onClick={function() {navigate('/student/auth/studcomplain')}}>Post Complaint</button>
                <button className="button3" onClick={function() {navigate('/student/auth/my-warden')}}>Get Warden</button>
                <button className="button3" onClick={function() {navigate('/student/auth/leave')}}>Leave Request</button>
            </div>
            <div className="stinfo">
                <h1>{type}</h1>
                <h2>{date}</h2>
                <h2>{time}</h2>
                <h2>{dur}</h2>
                <h2>{isBla}</h2>
            </div>
        </div>
    );
}

export default LeaveGet;
