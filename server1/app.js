const express = require('express');
const app = express();
const makeRequest = require('./utility/axios');
const bodyParser = require('body-parser');
const axios = require('axios');
// Middleware
app.use(express.json());
// app.use(cors());
app.use(bodyParser.json());


app.post('/send_to_database', async (req, res) => {
    try {
      const requestData = req.body; // Data sent by the client
      console.log(requestData);
      const res = await axios.post( `${process.env.SERVER_2_HOST_URL}/register`, data)
      .then(response => {
        // Handle the response
        console.log('Response data:', response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error making POST request:', error.message);
      });
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error submitting data:', error.message);
      res.status(500).json({ error: 'An error occurred while submitting data.' });
    }
});


module.exports = app;