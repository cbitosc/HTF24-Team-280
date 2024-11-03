import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App1() {
  const [users, setUsers] = useState([]);
  const [college, setCollege] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/states');
        console.log("API Response:", response.data); // Log the API response
        setUsers(response.data); // Store users in state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    
    fetchUsers();
  }, []);
//-----------------------------------
  useEffect(() => {
    console.log("Updated users:", users);
  }, [users]);

  // Fetch colleges based on selected state--------------------------------
  const fetchColleges = async (state) => {
    if (!state) return;
    try {
      const response = await axios.get('http://localhost:4000/colleges', { params: { state } });
      setCollege(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching colleges:', error);
    }
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    fetchColleges(state);
  };
//--------------------------------------------------------
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
       // Get clink from the response
      navigate(`/app2?college=${encodeURIComponent(selectedCollege)}&data=${encodeURIComponent(JSON.stringify(response.data))}&clink=${encodeURIComponent(clink)}&icon=${encodeURIComponent(icon)}`);
      } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
//------------------------------------------------------------------------------------------------
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
          <form style={s3} onSubmit={handleSubmit}>
            <h3 style={{ textAlign: "center" }}>Enter Your College Details</h3>
            <br />
            <div style={{ marginLeft: "18%" }}>
              <label className="form-label">State:</label><br />
              <input 
  className="form-control" 
  list="browsers" 
  placeholder="Enter your State" 
  onChange={handleStateChange} 
/>
<datalist id="browsers">
  {users.map((user, index) => (
    <option key={index} value={user} />
  ))}
</datalist>

            </div>
            <br />
            <div style={{ marginLeft: "18%" }}>
              <label htmlFor="College" className="form-label">College:</label><br />
              <input className="form-control" list="Colleges" name="College" id="College" placeholder="Enter your College" />
              <datalist id="Colleges">
                {college.map((col, index) => (
                  <option key={index} value={col} />
                ))}
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
