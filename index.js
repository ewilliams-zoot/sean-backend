const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/sean', (req, res) => {
  return res.status(200).json({"message": "Hey Sean, I hope this helps your learning move faster"});
});

app.post('/sean', (req, res) => {
  if (req.is("application/x-www-form-urlencoded")) {
    const respMsg = `You have submitted the following named fields: ${Object.keys(req.body).join(', ')}`;
    return res.status(200).json({"message": respMsg});
  }

  return res.status(400).json({"message": "This endpoint is for 'application/x-www-form-urlencoded' content types only."});
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
