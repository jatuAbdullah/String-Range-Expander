# String Range Expander (Node.js)

A lightweight Node.js utility to parse strings with numbers and ranges, expanding them into full integer lists. This project is split into **7 clear stages**, each stage in its own file for easy testing and review.

---

## Features by Stage

**Stage 1:** Parse comma-separated tokens and expand basic hyphen ranges (`"1-3"` → `[1, 2, 3]`).

**Stage 2:** Trim whitespace and ignore empty entries (`", , 1-3 , ,5"` → `[1, 2, 3, 5]`).

**Stage 3:** Add support for configurable custom range delimiters like `".."`, `"~"`, or `" to "`.

**Stage 4:** Handle descending ranges (`"5-3"` → `[5, 4, 3]`), single-point ranges (`"3-3"` → `[3]`), and throw an error for invalid ranges like `"3-a"`.

**Stage 5:** Support step syntax (`"1-10:2"` → `[1, 3, 5, 7, 9]`).

**Stage 6:** Remove duplicates when ranges overlap.

**Stage 7:** Allow output in different formats: Array (`list`), CSV string (`csv`), or ES6 `Set` (`set`).

---

## Installation and Usage

1. **Clone the repository**

   ```bash
   git clone https://github.com/jatuAbdullah/String-Range-Expander.git
   cd String-Range-Expander
   ```

2. **Run with Node.js**

   No dependencies are required apart from Node.js itself.

   ```bash
   node stage1.js
   node stage2.js
   node stage3.js
   node stage4.js
   node stage5.js
   node stage6.js
   node stage7.js
   ```

If you prefer, you can copy each file’s code into any online JS playground (e.g., JSFiddle, CodeSandbox, or PlayCode) to test it without installing Node.js.

---

## File Structure

```
/String-Range-Expander
│
├─ stage1.js      # Basic range expansion
├─ stage2.js      # Trim spaces and skip empty parts
├─ stage3.js      # Custom delimiters support
├─ stage4.js      # Reversed & invalid range handling
├─ stage5.js      # Step value support
├─ stage6.js      # Duplicates and overlaps
├─ stage7.js      # Output format control
├─ README.md      # Project instructions
```

