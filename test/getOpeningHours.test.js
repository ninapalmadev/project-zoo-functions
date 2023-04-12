const getOpeningHours = require('../src/getOpeningHours');

const zooOpen = 'The zoo is open';
const zooClosed = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('Testa se retorna um objeto quando não é passado nenhum argumento na função getOpeningHours()', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Verifica que se ao passar os argumentos "Monday" e "09:00-AM" retona a string "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(zooClosed);
    expect(getOpeningHours('Monday', '09:00-AM')).not.toEqual(zooOpen);
  });
  it('Verifica que se ao passar os argumentos "Tuesday" e "09:00-AM" retona a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(zooOpen);
    expect(getOpeningHours('Tuesday', '09:00-AM')).not.toEqual(zooClosed);
  });
  it('Verifica que se ao passar os argumentos "Wednesday" e "09:00-PM" retona a string "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual(zooClosed);
    expect(getOpeningHours('Wednesday', '09:00-PM')).not.toEqual(zooOpen);
  });
  it('Verifica se ao passar os argumentos "Thu" e "09:00-AM" lança o erro "The day must be valid. Example: Monday" ', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('Verifica se ao passar os argumentos "Friday" e "09:00-ZM" lança o erro "The abbreviation must be "AM" or "PM"" ', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Verifica se ao passar os argumentos "Saturday" e "C9:00-AM" lança o erro "The hour should represent a number" ', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(new Error('The hour should represent a number'));
  });
  it('Verifica se ao passar os argumentos "Sunday" e "13:00-AM" lança o erro "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Sunday', '13:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('Verifica se ao passar os argumentos "Tuesday" e "09:99-AM" lança o erro "The minutes must be between 0 and 59" ', () => {
    expect(() => getOpeningHours('Tuesday', '09:99-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
});
