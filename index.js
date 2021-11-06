const express = require('express');
const PORT = process.env.PORT || 5000;

express()
  .get('/sean', (req, res) => res.status(200).json({"message": "Hey Sean, I hope this helps your learning move faster"}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
