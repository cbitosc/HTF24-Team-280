import React from 'react';
import './pdfs.css'; // Create a separate CSS file for styles

const StudyMaterials = () => {
    const subjects = {
        'Discrete Mathematics': ['Logic', 'Set Theory', 'Combinatorics', 'Graph Theory'],
        'Programming With Python': ['Basics', 'Data Structures', 'Algorithms'],
        'English': ['Grammar', 'Literature', 'Writing Techniques'],
        'Chemistry': ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry'],
        'Database Management': ['SQL', 'Normalization', 'Transactions'],
        'Operating Systems': ['Processes', 'Threads', 'Memory Management']
    };

    const pdfs = {
        'Logic': 'path/to/logic.pdf',
        'Set Theory': 'path/to/set_theory.pdf',
        'Combinatorics': 'path/to/combinatorics.pdf',
        'Graph Theory': 'path/to/graph_theory.pdf',
        'Basics': 'path/to/basics.pdf',
        'Data Structures': 'path/to/data_structures.pdf',
        'Algorithms': 'path/to/algorithms.pdf',
        'Grammar': 'path/to/grammar.pdf',
        'Literature': 'path/to/literature.pdf',
        'Writing Techniques': 'path/to/writing_techniques.pdf',
        'Organic Chemistry': 'path/to/organic_chemistry.pdf',
        'Inorganic Chemistry': 'path/to/inorganic_chemistry.pdf',
        'Physical Chemistry': 'path/to/physical_chemistry.pdf',
        'SQL': 'path/to/sql.pdf',
        'Normalization': 'path/to/normalization.pdf',
        'Transactions': 'path/to/transactions.pdf',
        'Processes': 'path/to/processes.pdf',
        'Threads': 'path/to/threads.pdf',
        'Memory Management': 'path/to/memory_management.pdf'
    };

    const [selectedSubject, setSelectedSubject] = React.useState(null);
    const [showSubtopics, setShowSubtopics] = React.useState(false);
    const [pdfList, setPdfList] = React.useState([]);

    const handleSubjectClick = (subject) => {
        setSelectedSubject(subject);
        setShowSubtopics(true);
        setPdfList([]);
    };

    const handleSubtopicClick = (subtopic) => {
        const pdfLinks = pdfs[subtopic] ? [`Download ${subtopic} PDF`] : [];
        setPdfList(pdfLinks);
    };

    const goBack = () => {
        setShowSubtopics(false);
        setSelectedSubject(null);
        setPdfList([]);
    };

    return (
        <div className="container">
            {/* Hamburger Menu */}
            <div className="hamburger" onClick={toggleSidebar}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Sidebar */}
            <div className="sidebar" id="sidebar">
                <h2>Dashboard</h2>
                <a href="assignments.html">Home</a>
                <a href="#">Courses</a>
                <a href="#">Assignments & Tests</a>
                <a href="#">Grades & Feedback</a>
                <a href="attendance.html">Attendance</a>
                <a href="#">Calendar</a>
                <a href="payments.html">Payments</a>
                <a href="PDFs.html">Study Materials</a>
                <a href="#">Profile Settings</a>
            </div>

            <div className="main-content">
                <h1 style={{ color: '#ffab00' }}>Study Materials</h1>
                <div id="subject-container">
                    <h2 style={{ color: '#ffab00' }}>Subjects</h2>
                    <ul className="subject-list">
                        {Object.keys(subjects).map((subject) => (
                            <li key={subject} onClick={() => handleSubjectClick(subject)}>
                                {subject}
                            </li>
                        ))}
                    </ul>
                </div>
                {showSubtopics && (
                    <div id="subtopic-container">
                        <h2 style={{ color: '#ffab00' }}>Subtopics</h2>
                        <ul className="subtopic-list">
                            {subjects[selectedSubject].map((subtopic) => (
                                <li key={subtopic} onClick={() => handleSubtopicClick(subtopic)}>
                                    {subtopic}
                                </li>
                            ))}
                        </ul>
                        <button onClick={goBack}>Go Back</button>
                        {pdfList.length > 0 && (
                            <ul className="pdf-list">
                                {pdfList.map((pdf, index) => (
                                    <li key={index}>
                                        <a href={pdfs[selectedSubject]} target="_blank" rel="noopener noreferrer">
                                            {pdf}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

// Function to toggle the sidebar visibility
const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
};

export default StudyMaterials;
