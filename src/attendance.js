// Attendance.js
import React, { useEffect } from 'react';
import { Chart } from 'chart.js';

const Attendance = () => {
    useEffect(() => {
        // Data for attendance chart
        const subjects = ['Discrete Mathematics', 'Programming With Python', 'English', 'Chemistry', 'Database Management'];
        const attendance = [90, 85, 75, 80, 95];

        // Creating the attendance bar chart
        const ctx = document.getElementById('attendanceChart').getContext('2d');
        const attendanceChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: subjects,
                datasets: [{
                    label: 'Attendance Percentage',
                    data: attendance,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Attendance Percentage (%)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Subject-wise Attendance'
                    }
                }
            }
        });

        return () => {
            // Clean up the chart when the component unmounts
            attendanceChart.destroy();
        };
    }, []);

    return (
        <div className="main-content">
            <div className="attendance-section">
                <h2>Subject-wise Attendance</h2>
                <canvas id="attendanceChart" width="400" height="400"></canvas>
            </div>
        </div>
    );
};

export default Attendance;
