const { employees } = require('../data/zoo_data');

function getEmployeeByName(name) {
  // eslint-disable-next-line max-len
  const agent = employees.find((func) => func.firstName === name || func.lastName === name);
  return agent === undefined ? {} : agent;
}
module.exports = getEmployeeByName;
