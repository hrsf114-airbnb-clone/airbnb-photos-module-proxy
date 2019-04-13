const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;
const axios = require('axios');

app.use(morgan('dev'));
app.use('/rooms/:id', express.static('public'));

app.listen(port);

app.get('/api/listing/:id', function(req, res) {
  const { id } = req.params;
  const url = `http://ec2-34-215-220-186.us-west-2.compute.amazonaws.com/api/listing/${id}`;
  axios.get(url)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.end();
    });
});

app.get('/api/photos/:id', function(req, res) {
  const { id } = req.params;
  const url = `http://ec2-54-215-239-201.us-west-1.compute.amazonaws.com/api/photos/${id}`;
  axios.get(url)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.end();
    });
});

app.get('/api/bookings/:id', function(req, res) {
  const { id } = req.params;
  const url = `http://ec2-3-81-67-143.compute-1.amazonaws.com/api/bookings/${id}`;
  axios.get(url)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.end();
    });
});