const data = require('../data/zoo_data');

const { employees } = data;
function isManager(id) {
  const gerente = employees.some((lider) => lider.id === id);
  return gerente;
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const funcionários = employees.filter((lider) => lider.managers.includes(managerId));
    return funcionários.map((pessoa) => `${pessoa.firstName} ${pessoa.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
