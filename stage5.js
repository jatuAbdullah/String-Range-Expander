// Stage 5: Add step support (e.g., 1-10:2)

function expandString(input, delimiters = ['-', '..', '~', ' to '], stepDelimiter = ':') {
  const numbers = [];
  const items = input.split(',');

  for (let item of items) {
    let clean = item.trim();
    if (clean === '') continue;

    let step = 1;

    if (clean.includes(stepDelimiter)) {
      const [rangePart, stepPart] = clean.split(stepDelimiter);
      clean = rangePart.trim();
      step = Number(stepPart.trim());
      if (isNaN(step) || step <= 0) {
        throw new Error(`Invalid step value in: "${item}"`);
      }
    }

    let matched = false;

    for (let delim of delimiters) {
      if (clean.includes(delim)) {
        const [startStr, endStr] = clean.split(delim);
        const start = Number(startStr.trim());
        const end = Number(endStr.trim());

        if (isNaN(start) || isNaN(end)) {
          throw new Error(`Invalid range: "${clean}"`);
        }

        if (start <= end) {
          for (let i = start; i <= end; i += step) {
            numbers.push(i);
          }
        } else {
          for (let i = start; i >= end; i -= step) {
            numbers.push(i);
          }
        }

        matched = true;
        break;
      }
    }

    if (!matched) {
      const num = Number(clean);
      if (isNaN(num)) throw new Error(`Invalid number: "${clean}"`);
      numbers.push(num);
    }
  }

  return numbers;
}

console.log(expandString("1-10:2")); // [1,3,5,7,9]
console.log(expandString("10-1:3")); // [10,7,4,1]
