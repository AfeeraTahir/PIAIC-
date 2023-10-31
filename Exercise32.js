"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ['John', 'Eric', 'Mike', 'Alice', 'Bob'];
let new_users = ['Anna', 'john', 'Alex', 'Sam', 'ERIC'];
for (let new_user of new_users) {
    let isTaken = current_users.some(username => username.toLowerCase() === new_user.toLowerCase());
    if (isTaken) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username "${new_user}" is available.`);
    }
}
