// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // A tuple with exactly two elements first to be a number and second to be a string
// } = {
//   name: "Maximillian",
//   age: 30,
//   hobbies: ["programming", "cricket"],
//   role: [2, "author"],
// };
// let favActs: string[];
// favActs = ["Hello", "World"];
// // person.role[1] = 10; // will cause an error of assigning number type to string type
// // person.role.push("admin") // will not cause any error. Have to be taken care of explicitly.
// console.log(person.name);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
; // An enum; just like global constants in vanilla js. All the values are assigned the values starting from number 0 by default. We can assign these values by ourselves like below.
var Another_Enum;
(function (Another_Enum) {
    Another_Enum[Another_Enum["SUPER_ADMIN"] = 123] = "SUPER_ADMIN";
    Another_Enum["ANOTHER_AUTHOR"] = "ANOTHER_AUTHOR";
    Another_Enum[Another_Enum["NEW_USER"] = 743] = "NEW_USER";
})(Another_Enum || (Another_Enum = {}));
; // another enum with custom values
var person = {
    name: "Maximillian",
    age: 30,
    hobbies: ["programming", "cricket"],
    role: Role.ADMIN
};
