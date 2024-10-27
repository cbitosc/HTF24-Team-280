import React, { useEffect, useState } from 'react';
import './StudentDashboard.css'; 
import { useNavigate } from 'react-router-dom'
// Create a separate CSS file for 


const StudentDashboard = () => {
    const [assignments, setAssignments] = useState([]);
    const [attendancePercentage, setAttendancePercentage] = useState(75);
    const [attendanceMessage, setAttendanceMessage] = useState("");

    useEffect(() => {
        loadAssignments();
        updateAttendance(attendancePercentage);
    }, []);

    const loadAssignments = () => {
        const assignmentsData = [
            { title: "Math Assignment", due: "Oct 28" },
            { title: "History Project", due: "Nov 3" }
        ];
        setAssignments(assignmentsData);
    };

    const navigate = useNavigate();
const attend = async () => {
    
    try {
    {
            navigate('/attendance');
        }
        }
    catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
};
const payment = async () => {
    
    try {
    {
            navigate('/payment');
        }
        }
    catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
};
const assign = async () => {
    
    try {
    {
            navigate('/assign');
        }
        }
    catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
};
const vid = async () => {
    
    try {
    {
            navigate('/vid');
        }
        }
    catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
};
const pdfs = async () => {
    
    try {
    {
            navigate('/pdfs');
        }
        }
    catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
};

    const updateAttendance = (percentage) => {
        setAttendancePercentage(percentage);
        if (percentage < 75) {
            setAttendanceMessage("Attendance is low.");
        } else if (percentage === 75) {
            setAttendanceMessage("Attendance is fine but has to be increased.");
        } else {
            setAttendanceMessage("Your attendance is adequate.");
        }
    };

    const toggleSidebar = () => {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("hidden");
    };

    return (
        <div className="container">
            <div className="hamburger" onClick={toggleSidebar}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className="sidebar" id="sidebar">
                <h2>Dashboard</h2>
                <a href="#">Home</a>
                <a href="#">Courses</a>
                <a onClick={assign}>Assignments & Tests</a>
                <a onClick={vid}>Video Lectures</a>
                <a onClick={attend}>Attendance</a>
                <a onClick={pdfs}>Notes</a>
                <a onClick={payment}>Payments</a>
                <a href="#">Profile Settings</a>
            </div>

            <div className="main-content">
                <div className="dashboard-box">
                    <div className="welcome-banner">
                        <h2>Welcome, Samvith</h2>
                        <p>{new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="dashboard-grid">
                        <div className="section">
                            <h3>Assignments Due Soon</h3>
                            <ul>
                                {assignments.map((assign, index) => (
                                    <li key={index}>{`${assign.title} - Due: ${assign.due}`}</li>
                                ))}
                            </ul>
                            <button className="btn">View All Assignments</button>
                        </div>

                        <div className="section">
                            <h3>Progress Tracker</h3>
                            <p>Course Progress: 75%</p>
                            <button className="btn">View Progress</button>
                        </div>

                        <div className="section">
                            <h3>Attendance Tracker</h3>
                            <p>{attendanceMessage}</p>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${attendancePercentage}%` }}>{attendancePercentage}%</div>
                            </div>
                            <button className="btn">View Attendance Records</button>
                        </div>

                        <div className="section">
                            <h3>Upcoming Events</h3>
                            <ul>
                                <li>Math Seminar - Nov 5</li>
                            </ul>
                            <button className="btn">View Calendar</button>
                        </div>

                        <div className="section">
                            <h3>Messages</h3>
                            <ul>
                                <li>Message from Prof. Smith</li>
                                <li>Reminder: Project Submission</li>
                            </ul>
                            <button className="btn">View All Messages</button>
                        </div>

                        <div className="section">
                            <h3>Announcements</h3>
                            <ul>
                                <li>Midterm results announced</li>
                                <li>New course materials uploaded</li>
                            </ul>
                            <button className="btn">View All Announcements</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
