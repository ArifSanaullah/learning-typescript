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

enum Role { ADMIN, AUTHOR, USER }; // An enum; just like global constants in vanilla js. All the values are assigned the values starting from number 0 by default. We can assign these values by ourselves like below.
enum Another_Enum { SUPER_ADMIN = 123, ANOTHER_AUTHOR = "ANOTHER_AUTHOR", NEW_USER = 743 }; // another enum with custom values

const person = {
  name: "Maximillian",
  age: 30,
  hobbies: ["programming", "cricket"],
  role: Role.ADMIN,
};