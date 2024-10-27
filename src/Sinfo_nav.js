import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Chart, registerables } from 'chart.js';
import Sinfo from './SINFOMP';
import SvgAnimation from './SvgAnimation';
import App2 from './Sinfo_2';
import StudentDashboard from './dashboard';
import Attendance from './attendance';
import PaymentOptions from './payment';
import Assignments from './assignment';
import VideoLectures from './vidlec';
import StudyMaterials from './pdfs';


Chart.register(...registerables); // Register scales

function App() {
    const [showUpload, setShowUpload] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowUpload(true);
        }, 7500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Routes>
            <Route path="/" element={showUpload ? <Sinfo /> : <SvgAnimation />} />
            <Route path="/app2" element={<App2 />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/payment" element={<PaymentOptions />} />
            <Route path="/assign" element={<Assignments />} />
            <Route path="/vid" element={<VideoLectures />} />
            <Route path="/pdfs" element={<StudyMaterials />} />

        </Routes>
    );
}

export default App;
