const data = require('../data/zoo_data');

const { employees, species } = data;

const getOldestFromFirstSpecies = (id) => {
  const employeeId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstSpecie = species.find((specieId) => specieId.id === employeeId);
  const olderAge = firstSpecie.residents.reduce((acc, currAge) => {
    if (acc > currAge.age) {
      return acc;
    }
    return currAge.age;
  }, 0);
  const animal = firstSpecie.residents.find((animalFind) => animalFind.age === olderAge);
  return [animal.name, animal.sex, olderAge];
};

module.exports = getOldestFromFirstSpecies;
