const data = require('../data/zoo_data');

const { employees, species } = data;

const getInfoEmployee = () => employees.map((employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: employee.responsibleFor.map((element) =>
    species.find(({ id }) => id === element).name),
  locations: employee.responsibleFor.map((animal) =>
    species.find(({ id }) => id === animal).location),
}));

const getEmployee = (employee) => {
  const allEmployees = getInfoEmployee();
  const infoEmployee = allEmployees.find((person) =>
    person.fullName.includes(employee.name) || person.id === employee.id);
  if (!infoEmployee) {
    throw new Error('Informações inválidas');
  }
  return infoEmployee;
};

const getEmployeesCoverage = (employee) => {
  if (employee && (employee.name || employee.id)) {
    return getEmployee(employee);
  }
  return getInfoEmployee();
};

// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
// console.log(getEmployeesCoverage({ id: 'coxinha' }));

module.exports = getEmployeesCoverage;
