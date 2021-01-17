import users from "./users.js"

// №1
const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));

// №2
const getUsersWithEyeColor = (users, color) => users.filter(user=>color===user.eyeColor);
    
console.log(getUsersWithEyeColor(users, 'blue'));

// №3
const getUsersWithGender = (users, gender) => users.filter(user => gender === user.gender).map(user => user.name);

console.log(getUsersWithGender(users, 'male'));    
    
// №4
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users));

// №5
const getUserWithEmail = (users, email) => users.find(user=>user.email===email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// №6
const getUsersWithAge = (users, min, max) =>  users.filter(user=>user.age > min && user.age < max);

console.log(getUsersWithAge(users, 20, 30)); 
console.log(getUsersWithAge(users, 30, 40));

// №7
const calculateTotalBalance = users => users.reduce((acc, user) => acc += user.balance, 0);

console.log(calculateTotalBalance(users));


// №8
const getUsersWithFriend = (users, friendName) =>users.filter(user => user.friends.includes(friendName)).map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); 
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// №9
const getNamesSortedByFriendsCount = users => users.sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));

// №10
const getSortedUniqueSkills = users => users
  .flatMap(user => user.skills)
  .filter((user, index, arr) => arr.indexOf(user) === index)
  .sort();  

console.log(getSortedUniqueSkills(users));




 