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
