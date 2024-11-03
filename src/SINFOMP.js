import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Sinfo() {
  const [users, setUsers] = useState([]);
  const [college, setCollege] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/states');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const fetchColleges = async (state) => {
    if (!state) return;
    try {
      const response = await axios.get('http://localhost:4000/colleges', { params: { state } });
      setCollege(response.data);
    } catch (error) {
      console.error('Error fetching colleges:', error);
    }
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    fetchColleges(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedCollege = document.getElementById('College').value;

    if (!selectedState || !selectedCollege) {
      console.error('Please select both state and college');
      return;
    }

    try {
      const response = await axios.get('http://localhost:4000/secpageres', {
        params: { state: selectedState, college: selectedCollege }
      });

      const clink = response.data.clink;
      const icon = response.data.icon;
      navigate(`/app2?college=${encodeURIComponent(selectedCollege)}&data=${encodeURIComponent(JSON.stringify(response.data))}&clink=${encodeURIComponent(clink)}&icon=${encodeURIComponent(icon)}`);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Styles
  const mainStyle = {
    background: 'linear-gradient(to bottom, #001F3F, #003B5C)',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // Center items horizontally
    padding: '20px', // Added padding for spacing
  };

  const headingStyle = {
    fontSize: '4rem',
    fontFamily: 'Georgia, serif', // Font for SINFO
    marginBottom: '10px',
    textAlign: 'center', // Ensure heading is centered
  };

  const taglineStyle = {
    fontSize: '2.5rem', // Increased font size for tagline
    fontFamily: 'Dancing Script, cursive', // Cursive font for tagline
    textAlign: 'center', // Center the tagline
    marginBottom: '40px', // Increased space below tagline
  };

  const boxStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid white',
    borderRadius: '10px',
    padding: '30px',
    width: '80%', // Width of the box
    maxWidth: '600px', // Max width for box
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)', // 3D effect for the box
    zIndex: 0,
  };

  return (
    <div style={mainStyle}>
      <h1 style={headingStyle}>SINFO</h1>
      <div style={taglineStyle}>Empowering Your College Journey</div>
      <div style={boxStyle}>
        <form onSubmit={handleSubmit}>
          <h3 style={{ textAlign: "center", marginBottom: '20px' }}>Enter Your College Details</h3>
          <div>
            <label className="form-label">State:</label>
            <input
              className="form-control"
              list="states"
              placeholder="Enter your State"
              onChange={handleStateChange}
            />
            <datalist id="states">
              {users.map((user, index) => (
                <option key={index} value={user} />
              ))}
            </datalist>
          </div>
          <br />
          <div>
            <label htmlFor="College" className="form-label">College:</label>
            <input
              className="form-control"
              list="Colleges"
              name="College"
              id="College"
              placeholder="Enter your College"
            />
            <datalist id="Colleges">
              {college.map((col, index) => (
                <option key={index} value={col} />
              ))}
            </datalist>
          </div>
          <br />
          <button type="submit" className="btn btn-secondary" style={{ marginTop: '10px' }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Sinfo;