const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {

const toggleUserState = (allUsers, userName) => {
  // const updatedUsers = allUsers.map(user =>
  //   user.name === userName ? { ...user, active: !user.active } : user,
  // );
  return new Promise(resolve => {
    resolve(
      allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      ),
    );
    // callback(updatedUsers);
  });
};

const logger = updatedUsers => console.table(updatedUsers);

console.log('users original');
console.table(users);
console.log('');
console.log('После переписывания функции на работу без callbackFn');

//    Сейчас работает так                     !  Нет! Работало так.

// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

//   Должно работать так                      !  А теперь работает так!
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
