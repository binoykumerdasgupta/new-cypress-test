export type Copy = {
  text: string;
};

type NonCopy<T> = T extends Copy ? never : T;

export type CopyPlaceholder = {
  placeholder: string;
};

/*
    Extract primitive { string: string } types from a given config
  */
export type ExtractStringValueType<T> = {
  [I in keyof T]: T[I] extends string ? I : never;
}[keyof T];

/* Determine whether object is a Copy object */
export const isCopyType = (target: Record<string, unknown>): target is Copy =>
  'text' in target;

/*
    if no arguments passed, then it will fall back to a static key defined as part of the defaultCopy
  
    i.e. 
  
    const selector = findByText<StaitcKeys>(defaultCopy, 'myKey')
  
    selector() // cy.findByText(defaultCopy.myKey.text)
    selector({ text }) // cy.findByText(text)
  */
// export const findByText =
//   <T extends string>(C: Record<T, string>, key: T) =>
//   ({ text }: Copy = { text: C[key] }) =>
//     cy.findByText(text)

//   export const findByText = (C: Record<string, string>, key: string) => ({ text }: { text?: string } = { text: C[key] }) => {
//     if (!text) {
//       throw new Error(`"${key}" not found in the constants object or has an undefined value.`);
//     }
//     return cy.findByText(text);
//   };

export const findByRoleAndText =
  <T extends string>(C: Record<T, string>, key: T, role: string) =>
    ({ text }: Copy = { text: C[key] }) =>
      cy.findByRole(role, { name: text });

/*
    if no arguments passed, then it will fall back to a static key defined as part of the defaultCopy
  
    i.e. 
  
    const selector = findByLabelText<StaitcKeys>(defaultCopy, 'myKey')
  
    selector() // cy.findByLabelText(defaultCopy.myKey.text)
    selector({ text }) // cy.findByLabelText(text)
  */
export const findByLabelText =
  <T extends string>(C: Record<T, string>, key: T) =>
    ({ text }: Copy = { text: C[key] }) =>
      cy.findByLabelText(text);

/*
    Given a Union type, if the selector is a Copy then it uses this
    else falls back to a defined func with the args as NonCopy. This is used for cases
    where the default copy is a function and not a static member
  
    i.e.
  
    type MyType = Copy | { predicate: boolean }
  
    const selector = findByTextAndDynamicCopy<MyType>((data) => defaultCopy.someDynamicFunction(readingDate.predicate))
  
    selector({ text }) // cy.findByText(text)
  
    selector({ predicate }) // cy.findByText(func({ predicate }))
  */
//   export const findByTextAndDynamicCopy =
//     <T extends Copy | Record<string, unknown>>(
//       func: (args: NonCopy<T>) => string,
//     ) =>
//     (args: T) =>
//       cy.findByText(isCopyType(args) ? args.text : func(args as NonCopy<T>))

/*
    Similar to findByText but searches for an input by established placeholder
  */

/*
  const shuffleArray = <T>(array: T[]): T[] => { ... }: This line defines a function named shuffleArray that takes a generic array array as input and returns a shuffled version of the array. The <T> syntax indicates that the function is generic, meaning it can accept arrays of any type

  for (let i = array.length - 1; i > 0; i--) { ... }: This is a loop that iterates over the elements of the array starting from the last element (array.length - 1) and going backward until the second element (i > 0). This loop is used to shuffle the array

  const j = Math.floor(Math.random() * (i + 1));: Inside the loop, a random index j is generated using Math.random() function. Math.random() returns a floating-point number between 0 (inclusive) and 1 (exclusive). By multiplying it with (i + 1), we get a random floating-point number between 0 (inclusive) and i + 1 (exclusive). Math.floor() rounds this number down to the nearest integer, ensuring j is an integer within the range [0, i]

  [array[i], array[j]] = [array[j], array[i]];: This line swaps the elements at indices i and j in the array. It uses destructuring assignment to achieve this. The value of array[i] is assigned to array[j], and the value of array[j] is assigned to array[i]. This effectively swaps the positions of the elements at indices i and j
*/
export const findByPlaceholder =
  <T extends string>(C: Record<T, string>, key: T) =>
    ({ placeholder }: CopyPlaceholder = { placeholder: C[key] }) =>
      cy.get(`input[placeholder="${placeholder}"]`);

export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
