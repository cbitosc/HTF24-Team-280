import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is included
import { color } from 'three/webgpu';

function App2() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [college, setCollege] = useState('');
  const [data, setData] = useState(null);
  const [clink, setClink] = useState('');
  const [icon, setIcon] = useState('');
    const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const collegeParam = queryParams.get('college');
    const dataParam = queryParams.get('data');
    const clinkParam = queryParams.get('clink');
    const iconParam = queryParams.get('icon'); // Get clink
    //const history = useHistory();
    //const location = useLocation();

    
    if (collegeParam) {
      setCollege(decodeURIComponent(collegeParam));
    }
    
    if (dataParam) {
      setData(JSON.parse(decodeURIComponent(dataParam)) || {});
    }

    if (clinkParam) {
      setClink(decodeURIComponent(clinkParam));
    }

    if (iconParam) {
      setIcon(decodeURIComponent(iconParam));
    }
  }, [location.search]);

  const emailMainVerify = async () => {
    console.log('Verifying email...');
    const emailInput = document.getElementById("email2");
    const idInput = document.getElementById("id2");

    if (!emailInput || !idInput) {
        alert('Email or ID input not found.');
        return;
    }

    const email = emailInput.value;
    const id = idInput.value;
    const collegeName = college; // Assuming `college` is defined in scope

    try {
        const response = await axios.post('http://localhost:4000/verify', { email, id, college: collegeName });
        const result = response.data;

        if (result.success) {
            navigate('/dashboard');
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
};




  const styles = {
    s1: { backgroundColor: 'rgb(5, 5, 5)' },
    s2: { width: '40px', height: '40px' },
    s3: { color: 'white' },
    s4: { display: 'flex', justifyContent: 'center' },
    s5: { marginTop: '90px', padding: '20px', width: '500px', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '20px' },
    s6: { width: '145px' },
    s7: { textAlign: 'center',position: 'absolute',left: '35%',top:'15%'},
    s8: { textAlign: 'center', color: 'white' },
    s9: { marginLeft: '9%' },
    s10: { color: 'white' },
    s11: { color: 'red', display: 'none' },
    s12: { color: 'green', display: 'none' },
    s13: { color: 'rgb(62, 185, 62)', display: 'none' },
    s14: { display: 'none' },
    s15: { color: 'wheat',backgroundColor:'black' },
    s16: { float: 'right' },
    s17: { display: 'inline-block' },
    s18: { display: 'inline', position: 'relative', top: '3.5px' },
    s19: { display: 'inline', position: 'relative', top: '7.5px' },
    s20: { width: '100px', height: '100px' },
    s21: { color: 'rgb(61, 204, 61)' },
    s22: { color: 'white', textAlign: 'center' },
    s23: { position: 'relative', left: '45px',backgroundColor:'black',color:'white'},
    s24: { color: 'rgb(165, 136, 123)', fontSize: '20px', backgroundColor: 'black' }
  };

  const puzzleGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gap: '0px',
    justifyContent: 'center',
  };

  const puzzleImageStyle = {
    width: '100px',
    height: '100px',
  };

  const handleSignInClick = () => {
    setIsSignIn(true);
  };

  const handleLogInClick = () => {
    setIsSignIn(false);
  };

 

  const hi = () => {
    // Implement password validation logic here
    var pwd=document.getElementById("pword").value
    var p1=/^[A-Za-z]{4,}/
    var p2=/\d{1,}/
    var p3=/[@#&^+!-]{1,}/
    if(pwd.length>=8)
    {
                    document.getElementById("pwdr1").style.display="block"
                    document.getElementById("pwdw1").style.display="none" 
    }
            else
                {
                    document.getElementById("pwdr1").style.display="none";
                    document.getElementById("pwdw1").style.display="block"; 
                }
            if(pwd.match(p1))
                {
                    document.getElementById("pwdr2").style.display="block"
                    document.getElementById("pwdw2").style.display="none" 
                    
                }
            else
                {
                    document.getElementById("pwdr2").style.display="none" 
                    document.getElementById("pwdw2").style.display="block" 
                }
            if(pwd.match(p2))
                {
                    document.getElementById("pwdr3").style.display="block"
                    document.getElementById("pwdw3").style.display="none" 

                }
            else
                {
                    document.getElementById("pwdr3").style.display="none" 
                    document.getElementById("pwdw3").style.display="block" 
                }
            if(pwd.match(p3))
                {
                    document.getElementById("pwdr4").style.display="block"
                    document.getElementById("pwdw4").style.display="none" 

                }
            else
                {
                    document.getElementById("pwdr4").style.display="none" 
                    document.getElementById("pwdw4").style.display="block" 
                }
            if(pwd.match(p1) && pwd.match(p1) && pwd.match(p1) && pwd.match(p1) && pwd.length>=8 )
            {
                document.getElementById("strpwd").style.display="block"
            }
            else
            {
                document.getElementById("strpwd").style.display="none"
            }
  };

  const che = () => {
    // Implement checkbox logic here
    if (document.getElementById("ch").checked)
      {
          document.getElementById("robot").style.display="none";
          document.getElementById("puzz").style.display="block";

      }
      else
      {
          alert("give a confirmation whether u are a robot or not")
      }
  };
  var xp=0
  const shuffle = (x) => {
    // Implement shuffle logic here
    let t
    if(xp==0)
      {
          xp=x
      }
      else if(xp!=x)
      {
          
          t=document.getElementById("pu"+x).src
          document.getElementById("pu"+x).src=document.getElementById("pu"+xp).src
          document.getElementById("pu"+xp).src=t
          xp=0
      }
      else
      {
          xp=0
      }
      var count=0;var i=1           
      for(i=1;i<=9;i++)
      {
          if(document.getElementById("pu"+i).src.match(/fw\d{1}/)=="fw"+i)
          {
              count+=1
          }
      }
      if (count==9)
      {
          document.getElementById("fr").style.display="block"
          
      }
  };

  const setNewPassword = async () => {
    const email = document.getElementById("email").value; // Get email from your input
    try {
      const response = await fetch('http://localhost:4000/send-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        const errorText = await response.text(); // Get the raw text
        throw new Error(errorText); // Throw the error text
      }
  
      const result = await response.json();
      console.log(result);
      alert('Verification email sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send verification code. Please try again.');
    }
  };
  


  return (
    <div style={{ backgroundImage: 'url(/anim3.gif)', backgroundPosition: 'center', height: '100%', width: '100%' }}>
      <nav className="navbar navbar-expand-sm navbar-dark" style={styles.s1}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#!">
            <img src={"sinlog.png"} alt="sinlog.png" style={styles.s2} className="rounded-pill" />
          </a>
        </div>
        <ul className="navbar-nav justify-content-center">
          <li className="nav-item" style={styles.s3}>
            <button type="button" className="btn btn-light" style={styles.s6}>
              <a>Contact Us</a>
            </button>
          </li>
        </ul>
      </nav>
      <div style={styles.s4}>
        <div style={styles.s5}>
          <div style={styles.s7}>
          <a href={clink} target="_blank" rel="noopener noreferrer">
          <img src={icon} width="400px" height="100px" alt="Logo" />
        </a></div><br></br>
          {isSignIn ? (
            <form id="SIGN_IN">
              <h1 style={{ color: 'wheat', textAlign: 'center' }}>{college}</h1>
              <h3 style={styles.s8}>SIGN IN</h3>
              <h4 style={styles.s8}>Enter Details</h4>
              <br/>
              <div style={styles.s9}>
                <label className="form-label" style={styles.s10}>Position:</label>
                <input className="form-control" list="options" id="profession" placeholder="Position" />
                <datalist id="options">
                  <option value="HOD" />
                  <option value="Professor" />
                  <option value="Asst.Professor" />
                  <option value="Student" />
                </datalist>
              </div>
              <br />
              <div style={styles.s9}>
                <label className="form-label" style={styles.s10}>ID</label>
                <input id="id" type="text" className="form-control" placeholder="Enter your ID" /></div><br/>
                <div style={styles.s9}>
                <label htmlFor="email" className="form-label" style={styles.s10}>Email</label>
                <input type="email" id="email" className="form-control" placeholder="Enter your College Email" />
                </div><br/>
                <div style={styles.s9}>
                <label className="form-label" style={styles.s10}>Password</label>
                <input id="pword" type="password" className="form-control" placeholder="Create Your Password" onKeyUp={hi} />
              </div><br/>
              <div style={styles.s9}>
                <p id="pwdw1" style={styles.s11}>Length should be at least 8 Characters</p>
                <p id="pwdw2" style={styles.s11}>There should be at least 4 Alphabets</p>
                <p id="pwdw3" style={styles.s11}>There should be at least 1 digit</p>
                <p id="pwdw4" style={styles.s11}>There should be at least 1 Special Character</p>
                <p id="pwdr1" style={styles.s12}>Length of 8 characters satisfied</p>
                <p id="pwdr2" style={styles.s12}>There are at least 4 Alphabets</p>
                <p id="pwdr3" style={styles.s12}>There is at least 1 digit</p>
                <p id="pwdr4" style={styles.s12}>There is at least 1 Special Character</p>
                <p id="strpwd" style={styles.s13}>Strong Password is created</p>
              </div>
              <button type="button" className="btn btn-light" style={styles.s23} onClick={emailMainVerify}>Submit</button>

            </form>
          ) : (
            <form id="LOG_IN">
              <h1 style={{ color: 'wheat', textAlign: 'center' }}>{college}</h1>
              <h3 style={styles.s8}>LOG IN</h3>
              <h4 style={styles.s8}>Enter Details</h4>
              <div style={styles.s9}>
                <label className="form-label" style={styles.s10}>Position:</label>
                <input className="form-control" list="options" id="profession" placeholder="Position" />
                <datalist id="options">
                  <option value="HOD" />
                  <option value="Professor" />
                  <option value="Asst.Professor" />
                  <option value="Student" />
                </datalist>
              </div><br/>
              <div style={styles.s9}>
                <label className="form-label" style={styles.s10}>ID</label>
                <input id="id2" type="text" className="form-control" placeholder="Enter your ID" /><br/>
                <label className="form-label" style={styles.s10}>College Email</label>
                <input type="email" id="email2" className="form-control" placeholder="Enter your College Email" /><br/>
                <label className="form-label" style={styles.s10}>Password</label>
                <input type="password" className="form-control" placeholder="Enter Your Password" /><br/>
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#myModal" style={styles.s15}>Forgot Password?</button>
              </div><br/>
              <button type="button" className="btn btn-light" style={styles.s23} onClick={emailMainVerify}>Submit</button>
            </form>
          )}
          <p id="pchange" style={styles.s22}>
            {isSignIn ? (
              <>If you are already registered, <button id="bchange" className="btn" style={styles.s24} onClick={handleLogInClick}>Log in</button></>
            ) : (
              <>If you have not registered, <button id="bchange" className="btn" style={styles.s24} onClick={handleSignInClick}>Sign in</button></>
            )}
          </p>
          <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="exampleModalLabel">Solve the Puzzle</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div id="robot">
                    <input id="ch" type="checkbox" /> I am not a robot
                    <button className="btn btn-primary" onClick={che} style={styles.s16}>Next</button>
                  </div>
                  <div id="puzz" style={styles.s14}>
                    <div id="puzzle" style={puzzleGridStyle}>
                      <img id="pu1" src="/puzzlepics/fw9.jpg" alt="Puzzle Piece 1" style={puzzleImageStyle} onClick={() => shuffle(1)} />
                      <img id="pu2" src="/puzzlepics/fw5.jpg" alt="Puzzle Piece 2" style={puzzleImageStyle} onClick={() => shuffle(2)} />
                      <img id="pu3" src="/puzzlepics/fw7.jpg" alt="Puzzle Piece 3" style={puzzleImageStyle} onClick={() => shuffle(3)} />
                      <img id="pu4" src="/puzzlepics/fw1.jpg" alt="Puzzle Piece 4" style={puzzleImageStyle} onClick={() => shuffle(4)} />
                      <img id="pu5" src="/puzzlepics/fw3.jpg" alt="Puzzle Piece 5" style={puzzleImageStyle} onClick={() => shuffle(5)} />
                      <img id="pu6" src="/puzzlepics/fw6.jpg" alt="Puzzle Piece 6" style={puzzleImageStyle} onClick={() => shuffle(6)} />
                      <img id="pu7" src="/puzzlepics/fw2.jpg" alt="Puzzle Piece 7" style={puzzleImageStyle} onClick={() => shuffle(7)} />
                      <img id="pu8" src="/puzzlepics/fw4.jpg" alt="Puzzle Piece 8" style={puzzleImageStyle} onClick={() => shuffle(8)} />
                      <img id="pu9" src="/puzzlepics/fw8.jpg" alt="Puzzle Piece 9" style={puzzleImageStyle} onClick={() => shuffle(9)} />
                    </div>
                    <p><b>Note: Click 2 images to get swapped and solve the puzzle</b></p>
                  </div>
                </div>
                <div id="fr" className="modal-footer" style={styles.s14}>
                  <p id="update" style={styles.s21}>Congratulations, you solved it!</p>
                  <button className="btn btn-primary" data-bs-dismiss="modal" onClick={setNewPassword} style={styles.s16}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App2;
