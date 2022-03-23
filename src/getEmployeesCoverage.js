const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// function tipodeBichos(animalId) {
//   const bicho = [];
//   const lugar = [];
//   animalId.forEach((elemento) => {
//   species.forEach((specie) => {
//     if(elemento === specie.id) {
//       bicho.push(specie.name);
//       lugar.push(specie.location);
//     }
//   })
// })
// // return { animals: bicho, lugar: location };
// return [bicho, lugar];
// }

function getSpecie(responsavelPorEspecies) {
  const especieEncontrada = species.filter((elemento) =>
    responsavelPorEspecies.includes(elemento.id));
  return especieEncontrada.map((elemento) => elemento.name);
}

function getLocation(responsavelPorEspecies) {
  const especieEncontrada = species.filter((elemento) =>
    responsavelPorEspecies.includes(elemento.id));
  return especieEncontrada.map((elemento) => elemento.location);
}

function createEmployees(pessoa) {
  return {
    id: pessoa.id,
    fullName: `${pessoa.firstName} ${pessoa.lastName}`,
    species: getSpecie(pessoa.responsibleFor),
    locations: getLocation(pessoa.responsibleFor),
  };
}

function createAllEmploees() {
  const listAll = [];
  employees.forEach((element) => listAll.push(createEmployees(element)));
  return listAll;
}

function getEmployeesCoverage(person) {
  if (!person) return createAllEmploees();
  const pessoa = data.employees.find((elemento) =>
    elemento.firstName === person.name || elemento.lastName === person.name
    || elemento.id === person.id);
  if (!pessoa) throw new Error('Informações inválidas');
  return createEmployees(pessoa);
}
//  const returndeObjeto = {
//    id: pessoa.id,
//    fullname: `${pessoa.firstName} ${pessoa.lastName}`,
//   species: tipodeBichos(pessoa.responsibleFor)[0],
//   location: tipodeBichos(pessoa.responsibleFor)[1],
// };
// return returndeObjeto;
// getEmployeesCoverage({ name: 'Sharonda' });
// getEmployeesCoverage({ name: 'Spry' });
// getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });
// console.log(getEmployeesCoverage({ name: 'Nigel' }));
module.exports = getEmployeesCoverage;

// {
//   "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
//   "fullName": "Sharonda Spry",
//   "species": [ "otters", "frogs" ],
//   "locations": [ "SE", "SW" ]
// }
