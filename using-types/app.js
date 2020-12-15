/* UNION TYPES */
var combine = function (input1, input2, resultType // resultType is stricted to a string and to be "as-number" OR "as-string". Any other value/string will cause an error
) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
console.log(combine(2, 3, "as-number"));
console.log(combine("2", "3", "as-number"));
console.log(combine("Max", "Anna", "as-string"));
