const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const idFuncionario = employees.find((lider) => lider.id === id).responsibleFor[0];
  const tipoDeAnimal = species.find((bicho) => bicho.id === idFuncionario).residents;
  console.log(species.)
  const recebeAnimalAno = tipoDeAnimal.reduce((acc, curr) => Math.max(acc, curr.age), 0);
  const recebeAnimalVelho = tipoDeAnimal.find((elemento) => elemento.age === recebeAnimalAno);
  // const AnimalVelho = recebeAnimalVelho.map((chefe) => chefe )
  // console.log(tipoDeAnimal);
  // console.log(recebeAnimalVelho.name);
  return [recebeAnimalVelho.name, recebeAnimalVelho.sex, recebeAnimalVelho.age];
}
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// getOldestFromFirstSpecies();
module.exports = getOldestFromFirstSpecies;
