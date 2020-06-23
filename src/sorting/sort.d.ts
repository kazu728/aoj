export type inputElement = string | number;
export type inputType = [number, number[]];

export type GenericInputType = <T extends [number, inputElement[]]>(input: T) => inputElement[]