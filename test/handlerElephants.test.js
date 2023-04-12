const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('1 - Verifica se a função handlerElephants() retorna a quantidade de elefantes quando passado "count" como argumento', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('2 - Verifica se a função handlerElephants() retorna um array com a relação dos nomes de todos os elefantes quando passado "names" como argumento', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('2 - Verifica se a função handlerElephants() retorna retorna a média de idade dos elefantes quando passado "averageAge" como argumento', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  // it(, () => { });
  // it(, () => { });
  // it(, () => { });
  // it(, () => { });
});
