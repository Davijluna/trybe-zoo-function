const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const animals = {};
    // eslint-disable-next-line array-callback-return
    species.map((bicho) => { animals[bicho.name] = bicho.residents.length; });
    return animals;
  }

  if (Object.keys(animal).length === 1) {
    const zoo = species.find((elemento) => elemento.name === animal.specie);
    return zoo.residents.length;
  }

  if (Object.keys(animal).length === 2) {
    const zoo = species.find((elemento) => elemento.name === animal.specie).residents;
    return zoo.filter((elemento2) => elemento2.sex === animal.sex).length;
  }
}

module.exports = countAnimals;
