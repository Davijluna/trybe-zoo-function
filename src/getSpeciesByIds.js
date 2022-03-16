const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arquivosZoo = data.species.filter((especie) => ids.includes(especie.id));
  return arquivosZoo;
}
getSpeciesByIds();
module.exports = getSpeciesByIds;
