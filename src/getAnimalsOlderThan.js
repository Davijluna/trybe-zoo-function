const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const nomeSpecie = data.species.find((especie) => especie.name === animal);
  return nomeSpecie.residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
