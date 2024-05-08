const {media,mediana,moda,rango,isPar} = require('../ejercicio')


test('Dada una lista vacia devolver NaN', () => {
  let input = []
  expect(media(input)).toBe(NaN);
});

test('Dada una lista de numeros enteros devolver el promedio', () => {
  let input = [12,4,2]
  expect(media(input)).toBe(6);
});


test('Dado un numero devuelve si es par',()=>{
  let input = 8

  expect(isPar(input)).toStrictEqual(true)
})

test('Dado un numero devuelve si es impar',()=>{
  let input = [3,6]

  expect(isPar(input)).toStrictEqual(false)
})

test('Dado una lista de numeros vacia devuelve undefined',()=>{
  let input = []

  expect(mediana(input)).toStrictEqual(undefined)
})

test('Dada una lista de numeros con longitud "par" devolver la mediana', () => {
  let input = [9, 0, 6, 1, 3, 6]
  expect(mediana(input)).toBe(4.5);
});

test('Dada una lista de numeros con longitud "impar" devolver la mediana', () => {
  let input = [8, 10, 3, 10, 1]
  expect(mediana(input)).toBe(8);
});



test('Dada una lista de numeros devuelve solamente el numero que mas se repite', () => {
  let input = [5, 8, 8, 9, 0, 8, 3, 2]
  expect(moda(input)).toBe(8);
});

test('Dada una lista de numeros devuelve los 2 o mas numeros de moda', () => {
  let input = [3, 9, 3, 10, 9, 0, 3, 9, 5, 10, 6, 10]
  expect(moda(input)).toBe([3,9,10]);
});

test('Dada una lista de numeros que no tienen moda devuelve undefined', () => {
  let input = [3, 9, 3, 10, 9, 0, 3, 9, 5, 10, 6, 10]
  expect(moda(input)).toBe(undefined);
});
