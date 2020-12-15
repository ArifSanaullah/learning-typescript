const add = function (n1: number, n2: number, displayResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (displayResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
};

const num1 = 4;
const num2 = 8.2;
const showResult = true;
const phrase = "The result is: ";

add(num1, num2, showResult, phrase);
