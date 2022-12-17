const Chance = require("chance");
const chance = new Chance();

const express = require("express");
const app = express();

// Attention à l'ordre
app.get("/test", function (req, res) {
  res.send("Hello DAI test");
});

app.get("/", function (req, res) {
  res.send(generateStudents());
});

app.listen(3000, function () {
  console.log("app listening on port 3000");
});

function generateStudents() {
  const numberOfStudents = chance.integer({
    min: 0,
    max: 10,
  });
  console.log(numberOfStudents);
  const students = [];
  for (let i = 0; i < numberOfStudents; i++) {
    const gender = chance.gender();
    const birthYear = chance.year({
      min: 1998,
      max: 2004,
    });
    students.push({
      firstName: chance.first({
        gender: gender,
      }),
      lastName: chance.last(),
      gender: gender,
      birthday: chance.birthday({
        year: birthYear,
      }),
    });
  }
  console.log(students);
  return students;
}
