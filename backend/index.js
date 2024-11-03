const mongoose = require('mongoose');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDB-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => err ? console.log(err) : console.log('Connected to Hi database'));

// User schema definition
const userSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  clink: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
});

const userSchema2 = new mongoose.Schema({
  clgid: {
    type: String,
    required: true
  },
  clgmail: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
});

const User = mongoose.model('State', userSchema);

const userSchema3 = new mongoose.Schema({
  clgid: { type: String, required: true, unique: true },
  clgmail: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  position: { type: String, required: true }
});

const User2= mongoose.model('Cbitstu', userSchema2);
app.get('/check', async (req, res) => { 
  try {
    const users = await User2.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message }); // Send JSON error
  }
});

//-------------------------------------------------

app.get('/college-data', async (req, res) => {
  const { college } = req.query;

  try {
    const CollegeModel = getCollegeModel(college);
    const collegeData = await User2.find({});
    res.send(collegeData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Get all users
app.get('/users', async (req, res) => { 
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message }); // Send JSON error
  }
});


// Add a new user
app.post('/uses', async (req, res) => {
  const { state, college, clink } = req.body;
  const newUser = new User({ state, college, clink });

  try {
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all unique states
app.get('/states', async (req, res) => {
  try {
    const states = await User.distinct('state');
    res.send(states);
  } catch (error) {
    res.status(500).send(error);
  }
});
//------------------------
app.post('/verify', async (req, res) => {
  const { email, id } = req.body;

  // Access the model dynamically based on the college name

  try {
      const user = await User2.findOne({ clgid: id, clgmail: email });
      if (user) {
          res.json({ success: true });
      } else {
          res.json({ success: false, message: 'Invalid ID or Email.' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// Get colleges based on state
app.get('/colleges', async (req, res) => {
  const { state } = req.query;
  try {
    const colleges = await User.find({ state });
    const uniqueColleges = [...new Set(colleges.map(user => user.college))];
    res.send(uniqueColleges);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get specific details based on state and college
app.get('/secpageres', async (req, res) => {
  const { state, college } = req.query;
  try {
    const result = await User.findOne({ state, college });
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to send verification email
app.post('/send-verification', (req, res) => {
  const { email } = req.body;
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Verification Code',
    text: `Your verification code is: ${verificationCode}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    console.log(`Verification code sent: ${verificationCode}`);
    res.status(200).send('Verification email sent!');
  });
});

app.listen(4000, () => console.log("Server is running on port 4000"));
