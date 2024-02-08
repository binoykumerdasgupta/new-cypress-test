export type Copy = {
    text: string
  }
  
  type NonCopy<T> = T extends Copy ? never : T
  
  export type CopyPlaceholder = {
    placeholder: string
  }
  
  /*
    Extract primitive { string: string } types from a given config
  */
  export type ExtractStringValueType<T> = {
    [I in keyof T]: T[I] extends string ? I : never
  }[keyof T]
  
  /* Determine whether object is a Copy object */
  export const isCopyType = (target: Record<string, unknown>): target is Copy =>
    'text' in target
  
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
      cy.findByRole(role, { name: text })
  
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
      cy.findByLabelText(text)
  
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
  export const findByPlaceholder =
    <T extends string>(C: Record<T, string>, key: T) =>
    ({ placeholder }: CopyPlaceholder = { placeholder: C[key] }) =>
      cy.get(`input[placeholder="${placeholder}"]`)