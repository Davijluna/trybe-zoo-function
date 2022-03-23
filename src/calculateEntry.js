const data = require('../data/zoo_data');

const { prices } = data;

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrant) {
  const childs = entrant.filter((e) => e.age < 18).length;
  const adults = entrant.filter((e) => e.age >= 18 && e.age < 50).length;
  const seniors = entrant.filter((e) => e.age >= 50).length;
  return { child: childs, adult: adults, senior: seniors };
}

function calculateEntry(entrant) {
  if (!entrant || Object.keys(entrant).length === 0) {
    return 0;
  }
  const childs = entrant.filter((e) => e.age < 18).length * prices.child;
  const adults = entrant.filter((e) => e.age >= 18 && e.age < 50).length * prices.adult;
  const seniors = entrant.filter((e) => e.age >= 50).length * prices.senior;
  const preco = [childs, adults, seniors];
  const total = preco.reduce((acc, curr) => acc + curr);
  return total;
}
// console.log(calculateEntry([{ name: 'test', age: 18 }]));
module.exports = { calculateEntry, countEntrants };
