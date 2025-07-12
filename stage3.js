// Stage 3: Support custom range delimiters

function expandString(input, delimiters = ['-', '..', '~', ' to ']) {
  const numbers = [];
  const items = input.split(',');

  for (let item of items) {
    const clean = item.trim();
    if (clean === '') continue;

    let isRange = false;

    for (let delim of delimiters) {
      if (clean.includes(delim)) {
        const [startStr, endStr] = clean.split(delim);
        const start = Number(startStr.trim());
        const end = Number(endStr.trim());
        for (let i = start; i <= end; i++) {
          numbers.push(i);
        }
        isRange = true;
        break;
      }
    }

    if (!isRange) {
      numbers.push(Number(clean));
    }
  }

  return numbers;
}

console.log(expandString("1..3, 4~6, 10 to 12")); // [1, 2, 3, 4, 5, 6, 10, 11, 12]
