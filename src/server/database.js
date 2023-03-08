const users = [
  {
    id: 0,
    name: 'Dmirtii',
    lastName: 'Demyanov',
    password: 'hello123',
    email: 'a@b.gmail.com',
  },
  {
    id: 1,
    name: 'Dmirtii I',
    lastName: 'Demyanov',
    password: '123hello',
    email: 'c@d.gmail.com',
  },
  {
    id: 2,
    name: 'Dmirtii II',
    lastName: 'Demyanov',
    password: 'he12',
    email: 'e@f.gmail.com',
  },
];

// function setDelay(response, delay = 1000) {
//   return new Promise((resolve, reject) => {
//     // setTimeout(() => reject('Oops, something went wrong'), 2000);
//     setTimeout(() => resolve(response), delay);
//   });
// }

function checkPassword(email, pass) {
  const result = users.some((el) => el.email === email && el.password === pass);
  return result;
  /*return await setDelay(result)
    .then((res) => res)
    .catch((e) => {
      console.log(`Error in promise: ${e}`);
      return 'Error Happens';
    });*/
}

function getUser(email) {
  const user = users.find((el) => el.email === email);
  return user;
  /*return await setDelay(user)
    .then((res) => res)
    .catch((e) => {
      console.log(`Error in promise: ${e}`);
      return 'Error Happens';
    });*/
}

//console.log(getUser('e@f.gmail.com')); //user
// console.log(await checkPassword('c@d.gmail.com', '123hello')); // true
// console.log(await checkPassword('c@d.gmail.com', '4123hello')); // false

export default {
  getUser,
  checkPassword,
};
