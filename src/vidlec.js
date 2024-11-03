import React, { useState } from 'react';

// Sample data for subjects and topics using video IDs
const videoData = {
  "Programming with Python": [
    { name: "Introduction to Python", id: "XIR20HH8mNY" },
    { name: "Data Structures in Python", id: "L0bG4pntaV8" }
  ],
  "Discrete Mathematics": [
    { name: "Sets and Relations", id: "wGLTV8MgLlA" },
    { name: "Logic and Proofs", id: "7S6jHzi8vkk" }
  ],
  "Chemistry": [
    { name: "Organic Chemistry Basics", id: "B_ketdzJtY8" },
    { name: "Chemical Reactions", id: "iIJD8RNLpS0" }
  ],
  "Operating Systems": [
    { name: "Introduction to OS", id: "vBURTt97EkA" },
    { name: "Process Management", id: "OrM7nZcxXZU" }
  ],
  "Database Management": [
    { name: "SQL Basics", id: "zbMHLJ0dY4w" },
    { name: "NoSQL Overview", id: "qEhNHOEa5sE" }
  ],
  "English": [
    { name: "Literature Overview", id: "KkAnKGuX7fs" },
    { name: "Grammar Basics", id: "6LFjVC3cHjI" }
  ],
};

const VideoLectures = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedTopic(null); // Reset selected topic
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const renderTopics = (subject) => {
    return (
      <div>
        <h2 style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: '2rem' }}>
          {subject}
        </h2>
        {videoData[subject].map((topic, index) => (
          <div 
            key={index} 
            onClick={() => handleTopicClick(topic)} 
            style={{ 
              cursor: 'pointer', 
              padding: '20px', 
              margin: '10px', 
              background: 'rgba(255, 255, 255, 0.1)', 
              border: '1px solid white', 
              borderRadius: '5px',
              textAlign: 'center' 
            }}
          >
            {topic.name}
          </div>
        ))}
        <button onClick={() => setSelectedSubject(null)} style={{ marginTop: '15px' }}>
          Back to Subjects
        </button>
      </div>
    );
  };

  const renderVideo = (topic) => {
    return (
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '2rem' }}>{topic.name}</h3>
        <iframe 
          width="80%" // Adjusted width for the video
          height="450" // Adjusted height for the video
          src={`https://www.youtube.com/embed/${topic.id}`} // Use video ID directly
          title={topic.name} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ border: 'none' }} // Ensure no border interferes
        />
        <div style={{ marginTop: '15px' }}>
          <button onClick={() => setSelectedTopic(null)}>
            Back to Topics
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', color: 'white', background: 'linear-gradient(to bottom, #001F3F, #003B5C)', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>Video Lectures</h1>
      <div style={{ marginBottom: '30px' }}></div> {/* Added space between heading and boxes */}
      {!selectedSubject && !selectedTopic && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {Object.keys(videoData).map((subject, index) => (
            <div 
              key={index} 
              onClick={() => handleSubjectClick(subject)} 
              style={{ 
                cursor: 'pointer', 
                padding: '40px', // Increased padding for larger boxes
                margin: '10px', 
                background: 'rgba(255, 255, 255, 0.1)', 
                border: '1px solid white', 
                borderRadius: '5px', 
                width: '30%', // Maintain 3 up layout
                textAlign: 'center',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)', // 3D effect for the box
                flexGrow: 1, // Allow boxes to grow and fill available space
                minHeight: '150px', // Minimum height to keep boxes uniform
              }}
            >
              {subject}
            </div>
          ))}
        </div>
      )}
      {selectedSubject && !selectedTopic && renderTopics(selectedSubject)}
      {selectedTopic && renderVideo(selectedTopic)}

      <div style={{ marginTop: '40px', textAlign: 'justify', color: 'lightgray', width: '100%' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>Explore and Learn!</h2>
        <p style={{ fontSize: '1.5rem', width: '100%' }}>
          Welcome to the Video Lectures section! Here, you can explore a variety of topics across different subjects.
          Click on a subject to see the available topics, and select a topic to view its corresponding video lecture.
        </p>
        <p style={{ fontSize: '1.5rem', width: '100%' }}>
          Enjoy learning at your own pace and feel free to revisit any topic as needed. Our curated video lectures
          are designed to enhance your understanding and support your educational journey. Happy studying!
        </p>
      </div>
    </div>
  );
};

export default VideoLectures;
