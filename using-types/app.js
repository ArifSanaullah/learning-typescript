var userInput;
var userName;
userInput = 4;
userInput = "Max";
// userName = userInput; // causes an error and that's good. With this, typescript forces us to do a typecheck before we assign unknown type of value to a known(string) type of value. like following
if (typeof userInput === "string") {
    userName = userInput; // now, this works fine.
}
var throwError = function (message, code) {
    // it's return type is never
    throw { message: message, code: code };
};
console.log(throwError("An error occured", 500)); // will show nothing in consol. not even undefined
throwError("An error occured", 500);
