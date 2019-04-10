const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;
const axios = require('axios');

app.use(morgan('dev'));
app.use('/rooms/:id', express.static('public'));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/api/listing/:id', function(req, res) {
  const { id } = req.params;
  const url = `http://localhost:3000/api/listing/${id}`;
  axios.get(url)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.end();
    });
});

app.get('/api/photos/:id', function(req, res) {
  const { id } = req.params;
  const url = `http://localhost:3001/api/photos/${id}`;
  axios.get(url)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.end();
    });
});

app.get('/api/bookings/:id', function(req, res) {
  const { id } = req.params;
  const url = `http://localhost:9000/api/bookings/${id}`;
  axios.get(url)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.end();
    });
});