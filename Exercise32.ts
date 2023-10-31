let current_users: string[] = ['John', 'Eric', 'Mike', 'Alice', 'Bob'];
let new_users: string[] = ['Anna', 'john', 'Alex', 'Sam', 'ERIC'];

for (let new_user of new_users) {
  let isTaken = current_users.some(username => username.toLowerCase() === new_user.toLowerCase());
  if (isTaken) {
    console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
  } else {
    console.log(`The username "${new_user}" is available.`);
  }
}
export{};