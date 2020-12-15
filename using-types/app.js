var add = function (num1, num2) { return num1 + num2; }; // works fine, try to not define return types explicitly and let typescript do that for you unless you really need to define return type;
// const anotherAdd = (num1: number, num2: number): string => num1 + num2 // cause an error because we defined return type to be string but function actually returns number type;
var yetAnotherAdd = function (num1, num2) { return num1 + num2; }; // works fine because typescript will handle the return type;
var printResult = function (result) {
    // in here, the return type is void. This is only in typescript. javascript does not know what really void is.
    console.log("Result: " + result);
};
var combineResults;
combineResults = add;
// combineResults = 4; // ERROR
// combineResults = printResult; // ERROR because combineResults expects a function to accept two parameters of type number and return type to be number but printResult takes one param and returns void;
console.log(combineResults(3, 5));
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
addAndHandle(5, 7, function (result) {
    console.log(result);
});
