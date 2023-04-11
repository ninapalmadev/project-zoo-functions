const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => (employees.some((employee) => employee.managers.includes(id)));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const managerFiltered = employees.filter((manager) => manager.managers.includes(managerId));
    return managerFiltered.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
