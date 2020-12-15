/* UNION TYPES */

type Combinable = number | string; // custom types
type ResultTypeDescriptor = "as-number" | "as-string";

const combine = function (
  input1: Combinable,
  input2: Combinable,
  resultType: ResultTypeDescriptor // resultType is stricted to a string and to be "as-number" OR "as-string". Any other value/string will cause an error
) {
  let result: number | string;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

console.log(combine(2, 3, "as-number"));
console.log(combine("2", "3", "as-number"));
console.log(combine("Max", "Anna", "as-string"));
