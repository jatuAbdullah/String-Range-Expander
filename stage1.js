// Stage 1: Basic Range Expansion

function expandString(input) {
  const numbers = [];
  const items = input.split(',');

  for (let item of items) {
    if (item.includes('-')) {
      const [start, end] = item.split('-').map(Number);
      for (let i = start; i <= end; i++) {
        numbers.push(i);
      }
    } else {
      numbers.push(Number(item));
    }
  }

  return numbers;
}

// Example
console.log(expandString("1-3,5")); // [1, 2, 3, 5]
