import React from 'react';

// Utility function to calculate days left
const calculateDaysLeft = (dueDate) => {
  const today = new Date();
  const due = new Date(dueDate);
  const timeDiff = due - today;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  return daysLeft >= 0 ? daysLeft : 0; // Return 0 if the due date has passed
};

const Assignments = () => {
  // Sample assignments data with Google Docs links
  const assignmentsData = [
    { 
      subject: "Programming with Python", 
      assignment: "Assignment 1 - Basics of Python", 
      dueDate: "2024-11-05", 
      docLink: "https://docs.google.com/document/d/1YHdxu4_Wok0ieht5tljBzbQ7azdBTw8P70JcGtLNOZo/edit?usp=sharing" 
    },
    { 
      subject: "Discrete Mathematics", 
      assignment: "Assignment 2 - Set Theory", 
      dueDate: "2024-11-10", 
      docLink: "https://docs.google.com/document/d/1xgCK4Ks_4DyzAOOh58XtQ3LiVrtj5Nip9D0zkqszuVU/edit?usp=sharing" 
    },
    { 
      subject: "Chemistry", 
      assignment: "Assignment 3 - Organic Chemistry", 
      dueDate: "2024-11-15", 
      docLink: "https://docs.google.com/document/d/1MhG9l8SDjRggjd-F5odpLeWVd9eTmuf0hT3JiCcEhIw/edit?usp=sharing" 
    },
    { 
      subject: "Operating System", 
      assignment: "Assignment 4 - Process Management", 
      dueDate: "2024-11-20", 
      docLink: "https://docs.google.com/document/d/1C6Qx_M78Y4mogLvreNLDtu3qljRw9nfK_jHsnHLAlL0/edit?usp=sharing" 
    },
    { 
      subject: "Database Management", 
      assignment: "Assignment 5 - SQL Queries", 
      dueDate: "2024-11-25", 
      docLink: "https://docs.google.com/document/d/14N5VVaBm_4cQA9C7dMC-4BiWRktUeYsWm0D5J3f1L7o/edit?usp=sharing" 
    },
    { 
      subject: "English", 
      assignment: "Assignment 6 - Essay Writing", 
      dueDate: "2024-11-30", 
      docLink: "https://docs.google.com/document/d/1_vhGpzCAC3LqJvq-MFjA0hCFSPAiVLItcADtedP5iLg/edit?usp=sharing" 
    },
  ];

  // Styles
  const assignmentsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px',
    padding: '20px',
    background: 'linear-gradient(to bottom, #001F3F, #003B5C)', // Maintaining the same gradient
    color: 'white',
    width: '100%', // Full width of the container
    boxSizing: 'border-box', // Include padding in width calculations
  };

  const assignmentBoxStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid white',
    borderRadius: '10px',
    padding: '20px',
    width: '100%', // Increase width to take up more space
    maxWidth: '1200px', // Max width for the box
    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.7)', // Stronger shadow for a more pronounced 3D effect
    marginBottom: '20px',
    display: 'flex', // Added flex display for side-by-side layout
    justifyContent: 'space-between', // Space between elements
    alignItems: 'center', // Center align items vertically
    transform: 'translateY(-4px)', // Slight lift effect
    transition: 'transform 0.3s, box-shadow 0.3s', // Transition for hover effect
  };

  // Hover effect to enhance 3D appearance
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px)'; // Lift effect on hover
    e.currentTarget.style.boxShadow = '0 24px 60px rgba(0, 0, 0, 0.9)'; // Stronger shadow on hover
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(-4px)'; // Reset lift effect
    e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.7)'; // Reset shadow
  };

  const infoStyle = {
    textAlign: 'center', // Center text in the info area
    marginLeft: '20px', // Added left margin for spacing
  };

  return (
    <div style={assignmentsContainerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: '20px' }}>Assignments</h2>
      {assignmentsData.map((item, index) => (
        <a 
          key={index} 
          href={item.docLink} // Link to the Google Doc
          target="_blank" // Open in new tab
          rel="noopener noreferrer" // Security improvement
          style={{ textDecoration: 'none', color: 'inherit' }} // Inherit color and remove underline
        >
          <div 
            style={assignmentBoxStyle} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <h4 style={{ margin: '0' }}>{item.subject}</h4>
              <p>{item.assignment}</p>
              <p>Due Date: {item.dueDate}</p>
            </div>
            <div style={infoStyle}>
              <p style={{ margin: '0' }}>Today's Date: {new Date().toLocaleDateString()}</p>
              <p style={{ margin: '0' }}>Days Left: {calculateDaysLeft(item.dueDate)} days</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Assignments;
