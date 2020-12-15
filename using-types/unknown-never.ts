let userInput: unknown;
let userName: string;

userInput = 4;
userInput = "Max";

// userName = userInput; // causes an error and that's good. With this, typescript forces us to do a typecheck before we assign unknown type of value to a known(string) type of value. like following
if (typeof userInput === "string") {
  userName = userInput; // now, this works fine.
}

const throwError = (message: string, code: number) => {
  // it's return type is never
  throw { message, code };
};

console.log(throwError("An error occured", 500)); // will show nothing in consol. not even undefined
throwError("An error occured", 500);
