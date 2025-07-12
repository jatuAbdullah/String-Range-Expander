// Stage 2: Ignore whitespace & empty items

function expandString(input) {
  const numbers = [];
  const items = input.split(',');

  for (let item of items) {
    const clean = item.trim();
    if (clean === '') continue;

    if (clean.includes('-')) {
      const [start, end] = clean.split('-').map(Number);
      for (let i = start; i <= end; i++) {
        numbers.push(i);
      }
    } else {
      numbers.push(Number(clean));
    }
  }

  return numbers;
}

console.log(expandString(" , 1-3 , ,5 ")); // [1, 2, 3, 5]
