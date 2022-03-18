const { employees } = require('../data/zoo_data');

function isManager(id) {
  const gerente = employees.some((lider) => lider.managers.includes(id));
  return gerente;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const funcionarios = employees.filter((lider) => lider.managers.includes(managerId));
    return funcionarios.map((pessoa) => `${pessoa.firstName} ${pessoa.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
