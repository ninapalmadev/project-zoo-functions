const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se retorna undefined caso não seja passado nenhum argumento', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se a função handlerElephants() retorna erro quando passado argumento diferente de string', () => {
    expect(handlerElephants(67)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se a função handlerElephants() retorna null quando é passado argumento fora das opções', () => {
    expect(handlerElephants('oi')).toBeNull();
  });
  it('Verifica se a função handlerElephants() retorna a quantidade de elefantes quando passado "count" como argumento', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se a função handlerElephants() retorna um array com a relação dos nomes de todos os elefantes quando passado "names" como argumento', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se a função handlerElephants() retorna retorna a média de idade dos elefantes quando passado "averageAge" como argumento', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Verifica se a função handlerElephants() retorna a localização dos elefantes NW dentro do Zoológico quando passado "location" como argumento', () => {
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('location')).not.toBe('N');
    expect(handlerElephants('location')).not.toBe('W');
  });
  it('Verifica se a função handlerElephants() retorna a retorna a popularidade(5) dos elefantes quando passado "popularity" como argumento', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Verifica se a função handleElephants() retorna um array com a relação dos dias em que é possível visitar os elefantes quando passado "availability" como argumento', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
