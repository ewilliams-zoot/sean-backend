const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  next();
});

app.get('/sean', (req, res) => {
  return res.status(200).json({"message": "Hey Sean, I hope this helps your learning move faster"});
});

app.post('/sean', (req, res) => {
  if (req.is("application/x-www-form-urlencoded")) {
    const respMsg = analyzeForm(req.body);
    
    res
      .status(200)
      .setHeader("Content-Type", "text/html")
      .send(respMsg);
  }

  return res.status(400).json({"message": "This endpoint is for 'application/x-www-form-urlencoded' content types only."});
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


function analyzeForm(formObj) {
  let numberOfNumbers = 0;
  let numberOfStrings = 0;
  let avgStringLength = 0;
  let avgNumberValue = 0;
  let totalStringLength = 0;
  let totalNumberValue = 0;
  let numberOfFields = 0;
  let fieldNames = '';

  for (let key in formObj) {
    if (numberOfFields > 0) {
      fieldNames += ', ';
    }
    fieldNames += key;
    numberOfFields += 1;

    const numberVersion = parseInt(formObj[key]);

    if (!isNaN(numberVersion)) {
      numberOfNumbers += 1;
      totalNumberValue += numberVersion;
    } else {
      numberOfStrings += 1;
      totalStringLength += formObj[key].length;
    }
  }

  if (numberOfStrings !== 0) {
    avgStringLength = totalStringLength / numberOfStrings;
  }

  if (numberOfNumbers !== 0) {
    avgNumberValue = totalNumberValue / numberOfNumbers;
  }

  return `
    <h3>Form Analysis</h3>
    <p>The total number of posted fields is <strong>${numberOfFields}</strong></p>
    <p>The number of string fields is <strong>${numberOfStrings}</strong></p>
    <p>The number of number fields is <strong>${numberOfNumbers}</strong></p>
    <p>The average string field length is <strong>${avgStringLength}</strong></p>
    <p>The average number value is <strong>${avgNumberValue}</strong></p>
    <p> The names of the fields are: <strong>${fieldNames}</strong></p>
  `;
}
