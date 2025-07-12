// Stage 4: Handle reversed & invalid ranges

function expandString(input, delimiters = ['-', '..', '~', ' to ']) {
  const numbers = [];
  const items = input.split(',');

  for (let item of items) {
    const clean = item.trim();
    if (clean === '') continue;

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
          for (let i = start; i <= end; i++) {
            numbers.push(i);
          }
        } else {
          for (let i = start; i >= end; i--) {
            numbers.push(i);
          }
        }

        matched = true;
        break;
      }
    }

    if (!matched) {
      const num = Number(clean);
      if (isNaN(num)) {
        throw new Error(`Invalid number: "${clean}"`);
      }
      numbers.push(num);
    }
  }

  return numbers;
}

console.log(expandString("5-3, 3-3, 2-5")); // [5,4,3,3,4,5]
//console.log(expandString("3-a")); // Throws error
