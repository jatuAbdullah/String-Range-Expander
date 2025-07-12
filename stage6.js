// Stage 6: Remove duplicates

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
        throw new Error(`Invalid step value: "${item}"`);
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

  // Remove duplicates
  return Array.from(new Set(numbers));
}

console.log(expandString("1-3,2-5,3-5")); // [1,2,3,4,5]
