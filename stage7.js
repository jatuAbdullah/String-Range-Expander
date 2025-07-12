// Stage 7: Allow output format control

function expandString(
  input,
  options
) {
  // Fallback default options if undefined
  options = options || {
    delimiters: ['-', '..', '~', ' to '],
    stepDelimiter: ':',
    output: 'list'
  };

  // Fallback for missing props
  const delimiters = options.delimiters || ['-', '..', '~', ' to '];
  const stepDelimiter = options.stepDelimiter || ':';
  const output = options.output || 'list';

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

  const unique = Array.from(new Set(numbers));

  if (output === 'csv') {
    return unique.join(',');
  }
  if (output === 'set') {
    return new Set(unique);
  }
  return unique; // default: list
}

console.log(expandString("1-3")); // [1,2,3]
console.log(expandString("1-9", { output: 'csv' })); // "1,2,3"
console.log(expandString("1-7", { output: 'set' })); // Set {1,2,3}
