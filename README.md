# String Calculator

## Get Started

This project implements a **String Calculator** using TypeScript and follows Test-Driven Development (TDD) principles with Jest for unit testing.

### Tech Stack Used
- TypeScript
- Jest

---

## String Calculator Get Started 
* Clone repo https://github.com/mukuldata/calculator_tdd
* npm install
* npm run test


## Handled case:
- **Create a simple String Calculator**  
  The method `int Add(string numbers)` can take up to two numbers, separated by commas, and return their sum.  
  Example inputs: `""`, `"1"`, or `"1,2"` (for an empty string, it returns `0`).  

- **Handle an Unknown Amount of Numbers**  
  The method should support adding multiple numbers, not just two.  

- **Allow New Lines as Delimiters**  
  The method should support new lines (`\n`) as valid delimiters alongside commas.
  Example:
  The input `"1,\n"` is **not** valid.

- **Support Different Delimiters**  
The method should support custom delimiters defined in the first line of input:
The first line is optional; existing cases should still work.

- **Handle Negative Numbers**  
If a negative number is found, the method should throw an error:
If multiple negatives exist, all should be shown:
"1,-2,3,-4" // Throws Error: "negatives not allowed: -2,-4"

- **Ignore Numbers Greater Than 1000**  
Numbers larger than `1000` should be ignored.  
Example:  "2,1001" // Returns 2
