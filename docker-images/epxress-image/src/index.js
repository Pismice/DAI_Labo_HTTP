const Chance = require("chance");
const chance = new Chance();

const express = require("express");
const app = express();

// Attention à l'ordre
app.get("/", function (req, res) {
  res.send(generateWeirdAnimals());
});
app.get("/test", function (req, res) {
  res.send("Hello DAI test");
});
app.get("/api", function (req, res) {
  res.send("Le routing est surement pas bon !");
});

app.listen(3000, function () {
  console.log("app listening on port 3000");
});

function generateWeirdAnimals() {
  const numberOfStudents = chance.integer({
    min: 0,
    max: 10,
  });
  const animals = [];
  for (let i = 0; i < numberOfStudents; i++) {
    // Création
    const avatar = chance.avatar();
    const gender = chance.gender();
    const birthYear = chance.year({
      min: 1800,
      max: 1900,
    });
    const profession = chance.profession({
      rank: true,
    })
    const animalType = chance.animal();
    const birthday = chance.birthday({
      year: birthYear,
    })

    // Ajout
    animals.push({
      avatar: avatar,
      animal: animalType,
      firstName: chance.first({
        gender: gender,
      }),
      profession: profession,
      gender: gender,
      birthday: birthday,
    });
  }
  console.log(animals);
  return animals;
}
