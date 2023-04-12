const getOpeningHours = require('../src/getOpeningHours');

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
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Monday', '09:00-AM')).not.toEqual('The zoo is open');
  });
  it('Verifica que se ao passar os argumentos "Tuesday" e "09:00-AM" retona a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Tuesday', '09:00-AM')).not.toEqual('The zoo is closed');
  });
  // it(, () => {
  //   expect().;
  // })
  // it(, () => {
  //   expect().;
  // })
  // it(, () => {
  //   expect().;
  // })
  // it(, () => {
  //   expect().;
  // })
});
