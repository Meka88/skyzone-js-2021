const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionaireBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");
const personWealth = document.querySelector("main");
// list of all users
let users = [];
// Get Random User
getRandomUser();
getRandomUser();
getRandomUser();
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];
  const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000),
  };
  addUser(newUser);
}
const addUser = (newUser) => {
  users.push(newUser);
  updateDOM();
};
function updateDOM(providedUsers = users) {
  // clear main
  personWealth.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;
  providedUsers.forEach((user) => {
    const element = document.createElement("div");
    element.classList.add("person");
    // element.innerHTML = `
    //     <strong>${user.name}</strong> ${user.money}
    // `;
    const userName = document.createElement("h5");
    userName.textContent = `${user.name}`;
    const userMoney = document.createElement("h5");
    userMoney.textContent = `${user.money}`;
    element.append(userName);
    element.append(userMoney);
    personWealth.appendChild(element);
  });
  // check
  console.log("users :>> ", users);
}
// double money
const doubleMoney = () => {
    // code
    users = users.map(user => {
        return {...user, money: user.money  * 2} // user.name, user.last, user.money: user.money * 2
    })
   updateDOM();
}

// sort
const sortMoney = () => {
    // sort money, sort()
    users = users.sort(user => {
      return {...user, money: user.money }
    })
    updateDOM();
}
// filter millionaires
const showMillionaire = () => {
    // filter
    // users = users.filter(user => {
    //   return {}
    // })  
    updateDOM();
}
// calculate total wealth
const calculateWealthFun = () => {
    // total wealth, reduce()
    // users = users.reduce(user => {
    //   return {...user, money: user.money}
    // })
    updateDOM();
}
// formating a money
// console.log(users[0]); // undefined
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortMoney);
showMillionaireBtn.addEventListener('click', showMillionaire);
calculateWealthBtn.addEventListener('click', calculateWealthFun);