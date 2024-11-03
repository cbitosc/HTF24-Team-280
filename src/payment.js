import React from 'react';
import './payment.css'; // Create a separate CSS file for styles

const PaymentOptions = () => {
    return (
        <div className="container">
            {/* Sidebar with navigation links */}
            <div className="sidebar hidden" id="sidebar">
                <h2>Dashboard</h2>
                <a href="#">Home</a>
                <a href="#">Courses</a>
                <a href="#">Assignments & Tests</a>
                <a href="#">Grades & Feedback</a>
                <a href="attendance.html">Attendance</a>
                <a href="#">Calendar</a>
                <a href="payments.html">Payments</a>
                <a href="#">Profile Settings</a>
            </div>

            {/* Main content area with payment sections */}
            <div className="main-content">
                {/* Hamburger menu for sidebar toggle */}
                <div className="hamburger" onClick={toggleSidebar}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                {/* Payments container */}
                <div className="payments-container">
                    <h1>Payments</h1>

                    {/* Payment options dropdown */}
                    <div className="payment-options">
                        <h2>Select Fee Type</h2>
                        <select>
                            <option>Regular Fee Payment</option>
                            <option>Transcripts Fee Payment</option>
                            <option>Supply Fee Payment</option>
                            <option>Re-Evaluation Fee Payment</option>
                            <option>Betterment Fee Payment</option>
                            <option>Condonation Fee Payment</option>
                        </select>
                    </div>

                    {/* Payment form with fee details and pay button */}
                    <div className="payment-form">
                        <h3>Fee Details</h3>
                        <p>Amount: <strong>₹5000</strong></p>
                        <button onClick={displayPaymentMethods}>Pay Now</button>
                    </div>

                    {/* Payment methods selection section (initially hidden) */}
                    <div id="payment-methods-container" className="payment-methods">
                        <h2>Select Payment Method</h2>
                        <div className="method-buttons">
                            <button>UPI</button>
                            <button>Debit Card</button>
                            <button>Credit Card</button>
                            <button>Bank Transfer</button>
                        </div>
                    </div>

                    {/* Transaction status section */}
                    <div className="transaction-status">
                        <h2>Transaction Status</h2>
                        <input type="text" placeholder="Enter Transaction ID" />
                        <button>Check Status</button>
                        <p>Status will be displayed here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Functions to toggle sidebar and payment methods display
const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
};

const displayPaymentMethods = () => {
    const paymentMethods = document.getElementById("payment-methods-container");
    paymentMethods.style.display = paymentMethods.style.display === "none" ? "flex" : "none";
};

export default PaymentOptions;
