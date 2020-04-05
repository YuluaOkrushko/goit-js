import users from "./users.js";

// TASK 1

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));

// TASK 2

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue"));

// TASK 3

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, "male"));

// TASK 4

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users));

// TASK 5

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

// TASK 6

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => min <= user.age && max >= user.age);
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// TASK 7

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users));

// TASK 8

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.some(friend => friend === friendName))
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

// TASK 9

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

// TASK 10

const getSortedUniqueSkills = users => {
  const allSkills = users.reduce(
    (allSkills, user) => allSkills.concat(user.skills),
    []
  );
  return allSkills.filter((skill, i) => allSkills.indexOf(skill) === i).sort();
};

console.log(getSortedUniqueSkills(users));
