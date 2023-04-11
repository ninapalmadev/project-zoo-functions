const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce(((acc, specie) => {
      acc[`${specie.name}`] = specie.residents.length;
      return acc;
    }), {});
  }
  const { species: animalSpecie, sex: animalSex } = animal;

  const specieSex = species.find((specie) => specie.name.includes(animalSpecie))
    .residents.filter((resident) => (animalSex ? resident.sex === animalSex : resident)).length;
  return specieSex;
};

module.exports = countAnimals;

// console.log(countAnimals());
// console.log(countAnimals({ species: 'bears', sex: 'female' }));
// console.log(countAnimals({ species: 'giraffes' }));
