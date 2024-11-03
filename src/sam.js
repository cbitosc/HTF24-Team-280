<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>College Page</title>
</head>
<body>
  <h1>College Information</h1>
  <p id="collegeInfo">Loading...</p>

  <script>
    // Function to get URL parameters
    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    // Get the college parameter from the URL
    const college = getQueryParam('college');

    // Display the college information or handle it as needed
    document.getElementById('collegeInfo').textContent = `Selected College: ${college}`;
  </script>
</body>
</html>



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App1 from './App1'; // Your main form page component
import CollegePage from './CollegePage'; // The new page to handle the college parameter

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/college" element={<CollegePage />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { useLocation } from 'react-router-dom';

function CollegePage() {
  // Function to get URL parameters
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  // Extract the college parameter
  const query = useQuery();
  const college = query.get('college');

  return (
    <div>
      <h1>College Information</h1>
      <p>Selected College: {college}</p>
    </div>
  );
}

export default CollegePage;
Plain HTML/JavaScript: Extract the parameter using URLSearchParams and display or use it as needed.
React Component: Use react-router-dom to manage routing and parameters. Use useLocation from react-router-dom to extract query parameters.
Both approaches will help you capture the college parameter from the URL and display it on the new page. Choose the approach that best fits the technology stack of your project.
const handleSubmit = () => {
    const college = document.getElementById('College').value;
    if (college) {
      // Redirect to another page with the college as a parameter
      window.location.href = `newpage.html?college=${encodeURIComponent(college)}`;
    }
  };

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App1() {
  const [users, setUsers] = useState([]);
  const [colleges, setColleges] = useState([]); // State to store colleges

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const updateDatalist = () => {
      const dop = document.getElementById('browsers');
      dop.innerHTML = ''; // Clear existing options
      users.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        dop.appendChild(optionElement);
      });
    };

    updateDatalist();
  }, [users]);

  useEffect(() => {
    const state = document.getElementById('browser').value;
    const fetchColleges = async () => {
      try {
        const response = await axios.get('http://localhost:4000/colleges', { params: { state } });
        setColleges(response.data);
        const dop2 = document.getElementById("Colleges");
        dop2.innerHTML = '';
        response.data.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option;
          dop2.appendChild(optionElement);
        });
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    };

    fetchColleges();
  }, [users]); // Make sure to change this dependency if needed

  const handleSubmit = () => {
    const college = document.getElementById('College').value;
    if (college) {
      // Redirect to another page with the college as a parameter
      window.location.href = `newpage.html?college=${encodeURIComponent(college)}`;
    }
  };

  const s1 = { textAlign: 'center', color: "white" };
  const s2 = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' };
  const s3 = { border: '2px dashed black', width: '350px', padding: '15px' };
  const s4 = { position: 'relative', left: '55px' };

  return (
    <div>
      <div className="container-fluid bg-dark" style={{ border: "40px solid" }}>
        <h1 style={s1}>SINFO</h1>
      </div>
      <div style={s2}>
        <div style={{ display: 'flex' }}>
          <form style={s3} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <h3 style={{ textAlign: "center" }}>Enter Your College Details</h3>
            <br />
            <div style={{ marginLeft: "18%" }}>
              <label className="form-label">State:</label><br />
              <input className="form-control" list="browsers" name="browser" id="browser" placeholder="Enter your State" />
              <datalist id="browsers">
                {/* Options will be dynamically added here */}
              </datalist>
            </div>
            <br />
            <div style={{ marginLeft: "18%" }}>
              <label htmlFor="email" className="form-label">College:</label><br />
              <input className="form-control" list="Colleges" name="College" id="College" placeholder="Enter your College" />
              <datalist id="Colleges">
              </datalist>
            </div>
            <br />
            <button type="submit" className="btn btn-secondary" style={s4}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App1;
Form Submission Handling: The handleSubmit function captures the value of the selected college and then redirects to newpage.html with the college value as a URL parameter. You should replace newpage.html with the actual URL you want to redirect to.

URL Encoding: Use encodeURIComponent to safely encode the college name as part of the URL.

Prevent Default Behavior: The onSubmit handler prevents the default form submission behavior to handle the redirection manually.
