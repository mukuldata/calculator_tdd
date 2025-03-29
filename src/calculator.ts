function getDelimiter(numbers: string): { delimiter: RegExp; numberPart: string } {
  let delimiter = /,|\n/; 

  if (numbers.startsWith("//")) {
    const [delimiterLine, numberPart] = numbers.split("\n", 2);
    return { delimiter: new RegExp(delimiterLine.slice(2)), numberPart };
  }

  return { delimiter, numberPart: numbers };
}

export function add(numbers: string): number {
  if (!numbers) return 0; 

  const { delimiter, numberPart } = getDelimiter(numbers); 

  return numberPart
    .split(delimiter)
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
}


