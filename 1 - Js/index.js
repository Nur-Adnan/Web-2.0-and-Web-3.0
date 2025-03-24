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
