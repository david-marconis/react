let age: number;

age = 30;

let username: string;

username = "Dave";

let isStudent: boolean;

isStudent = true;

let hobbies: string[];

hobbies = ["Gaming", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Dave",
  age: 30
};

let people: Person[];

let course: string | number = "Cool course";

course = 1234;

function adds(a: number, b: number) {
  return a + b;
}

function printOutput(value: any): void {
  console.log(value);
}

function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "0");

// updatedArray[0].split("");
stringArray[0].split("");
