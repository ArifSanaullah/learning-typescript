const add = (num1: number, num2: number): number => num1 + num2; // works fine, try to not define return types explicitly and let typescript do that for you unless you really need to define return type;
// const anotherAdd = (num1: number, num2: number): string => num1 + num2 // cause an error because we defined return type to be string but function actually returns number type;
const yetAnotherAdd = (num1: number, num2: number) => num1 + num2; // works fine because typescript will handle the return type;

const printResult = (result: number) => {
  // in here, the return type is void. This is only in typescript. javascript does not know what really void is.
  console.log("Result: " + result);
};

let combineResults: (num1: number, num2: number) => number;

combineResults = add;
// combineResults = 4; // ERROR
// combineResults = printResult; // ERROR because combineResults expects a function to accept two parameters of type number and return type to be number but printResult takes one param and returns void;

console.log(combineResults(3, 5));

const addAndHandle = (n1: number, n2: number, cb: (result: number) => void) => {
  // in here, we explicitly said that cb will return void. so no matter what we do in our cb defination, we'll always get void as a return type from cb function
  const result = n1 + n2;
  cb(result);
};

addAndHandle(5, 7, (result) => {
  console.log(result);
  return result; // we are trying to return something from cb but this will not cause any error and neither we'll be able to return anything from here.
});
