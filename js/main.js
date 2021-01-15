import users from "./users.js"

// №1
const getUserNames = users => {
     return users.map(user => user.name);
};
console.log(getUserNames(users));

// №2
const getUsersWithEyeColor = (users, color) => {
    const qwe = users.filter(user => users.eyeColor);
    if (color === users.eyeColor) {
        return qwe;
    }
};

console.log(getUsersWithEyeColor(users, 'blue'));
