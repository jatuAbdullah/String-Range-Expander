# String Range Expander (Node.js)


## Features by Stage

1. **Basic Range Expansion**

   * Parse comma-separated tokens
   * Expand simple hyphen ranges (e.g., `"1-3"` → `[1, 2, 3]`)

2. **Ignore Whitespace & Empty Parts**

   * Trim spaces around tokens
   * Skip empty entries (e.g., `",,"`)

3. **Custom Range Delimiters**

   * Support multiple delimiters (`".."`, `"~"`, `" to "`, configurable)

4. **Reversed & Invalid Ranges**

   * Handle descending ranges (`"5-3"` → `[5, 4, 3]`)
   * Single-point ranges (`"3-3"` → `[3]`)
   * Validate numeric input (throws on `"3-a"`)

5. **Step Values**

   * Allow step syntax (e.g., `"1-10:2"` → `[1, 3, 5, 7, 9]`)
   * Both ascending and descending steps

6. **Duplicate & Overlap Handling**

   * Merge overlapping ranges
   * Remove duplicates via `Set`

7. **Output Format Control**

   * Return as JavaScript Array (`list`)
   * Comma-separated string (`csv`)
   * ES6 `Set` object (`set`)

---

## Setup and Usage

1. **Download the ZIP**

   * Obtain the `string-range-expander.zip` file containing all `stageN.js` files and this `README.md`.
   * Unzip into a folder of your choice.

2. **Install dependencies**

   No additional dependencies are required beyond having Node.js installed. If you don't have Node.js:

   * Visit [nodejs.org](https://nodejs.org/) and follow the installation instructions for your platform.

3. **Run examples**

   Open a terminal in the unzipped folder and run:

   ```bash
   node stage1.js
   node stage2.js
   # ... up to
   node stage7.js
   ```

---

## File Structure

```
/Abdullah -- yodaplus-assessment
│
├─ stage1.js      # Basic hyphen ranges
├─ stage2.js      # Trim & skip empties
├─ stage3.js      # Custom delimiters
├─ stage4.js      # Reverse & validation
├─ stage5.js      # Step values
├─ stage6.js      # Deduplication
├─ stage7.js      # Output formats
├─ README.md      # This file
```

---

## Testing Without Node.js

If you don't have Node.js installed, simply copy and paste the code from each `stageN.js` file into any online JavaScript compiler or REPL (e.g., [JSFiddle](https://jsfiddle.net/), [CodeSandbox](https://codesandbox.io/), or [PlayCode](https://playcode.io/)) and run it to see the output.

