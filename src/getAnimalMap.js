const data = require('../data/zoo_data');

const { species } = data;

const getSpecie = (residents, sex) =>
  residents.filter((animal) => (sex ? animal.sex === sex : true))
    .map((animal) => animal.name);

const getNames = (sorted, sex) => species.reduce((acc, animal) => ({
  ...acc,
  [animal.location]:
    [...(acc[animal.location] || []),
      {
        [animal.name]:
        sorted ? getSpecie(animal.residents, sex).sort() : getSpecie(animal.residents, sex),
      },
    ],
}), {});

const getNamesUnsorted = () => species.reduce((acc, animal) => ({
  ...acc,
  [animal.location]:
    [...(acc[animal.location] || []),
      animal.name,
    ],
}), {});

const getAnimalMap = ({ includeNames, sorted, sex } = {}) =>
  (includeNames ? getNames(sorted, sex) : getNamesUnsorted());

module.exports = getAnimalMap;
