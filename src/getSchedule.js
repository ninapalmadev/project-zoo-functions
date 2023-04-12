const data = require('../data/zoo_data');

const { species, hours } = data;

const animals = species.map((animal) => animal.name);
const daysOfTheWeek = Object.keys(hours);
const monday = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const getOfficeHour = (param) => {
  const hourMap = param.map((day) => (
    `Open from ${hours[day].open}am until ${hours[day].close}pm`));
  return hourMap;
};

const days = (element) => element.reduce((acc, day, index) => ({
  ...acc,
  [element[index]]: {
    officeHour: getOfficeHour(element)[index],
    exhibition: species
      .filter((specie) => specie.availability.includes(element[index]))
      .map((animal) => animal.name),
  },
}), {});

const getDaysHours = (day) => {
  const objSchelude = days(day);
  if (day.includes('Monday')) {
    objSchelude.Monday.officeHour = 'CLOSED';
    objSchelude.Monday.exhibition = 'The zoo will be closed!';
  }
  return objSchelude;
};

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') return monday;
  if (daysOfTheWeek.includes(scheduleTarget)) {
    const arraySchedule = [];
    arraySchedule.push(scheduleTarget);
    const result = getDaysHours(arraySchedule);
    return result;
  }
  if (animals.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }
  const schedule = getDaysHours(daysOfTheWeek);
  return schedule;
};

module.exports = getSchedule;
// console.log(getSchedule('lions'));
// console.log(getSchedule());
// console.log(getSchedule('coxinha'));
// console.log(getSchedule('Monday'));
// console.log(getSchedule('Sunday'));
