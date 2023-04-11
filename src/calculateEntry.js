const data = require('../data/zoo_data');

const { adult, child, senior } = data.prices;

const countEntrants = (entrants) => (entrants.reduce((acc, person) => {
  if (person.age < 18) {
    acc.child += 1;
    return acc;
  }
  if (person.age >= 50) {
    acc.senior += 1;
    return acc;
  }
  acc.adult += 1;
  return acc;
}, { adult: 0, child: 0, senior: 0 }));

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) return 0;
  const count = countEntrants(entrants);
  const result = (count.adult * adult) + (count.child * child) + (count.senior * senior);
  return result;
};

module.exports = { calculateEntry, countEntrants };
