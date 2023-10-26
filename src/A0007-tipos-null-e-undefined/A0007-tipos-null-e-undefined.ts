let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function square(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const squareOfTwoNumber = square(2);
const squareOfTwoString = square('2');

if (squareOfTwoString === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoString);
}
