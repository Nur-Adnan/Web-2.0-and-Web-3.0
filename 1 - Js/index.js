function canVote(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

let person = canVote(19);
console.log(person);

let users = ["adnan", "oishi"];
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

let persons = {
  name: "Adnan",
  age: 26,
  gender: "male",
};
console.log(persons.name);
console.log(persons["age"]);

function greet(user) {
  console.log("Hi " + user.name + ", your age is " + user.age);
}

let user = {
  name: "Nur",
  age: 27,
};

greet(user);

let arr = [
  {
    name: "Nur",
    age: 27,
    cities: ["Dhaka", "Chittagong"],
  },
];

console.log(arr[0].cities[0]);

// create a function that takes an array of objects as input, and return the users whose age > 18 and are male

function solve(arr) {
  let filteredUsers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "male" && arr[i].age > 18) {
      filteredUsers.push(arr[i]);
    }
  }
  return filteredUsers;
}

let arrOfUsers = [
  {
    name: "Nur",
    age: 26,
    gender: "male",
  },
  {
    name: "Oishi",
    age: 20,
    gender: "female",
  },
  {
    name: "Adnan",
    age: 25,
    gender: "male",
  },
];

const filteredUsers = solve(arrOfUsers);
console.log(filteredUsers);
