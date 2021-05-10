const input = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const clearBtn = document.getElementById('clear');
const name = document.querySelector('.name');

const displayName = () => {
  name.textContent = localStorage.getItem('name');
  input.value = '';
};
displayName();

const handleClick = () => {
  localStorage.setItem('name', input.value);
  displayName();
};

const clearName = () => {
  localStorage.clear();
  displayName();
};

// event handlers
submitBtn.addEventListener('click', handleClick);
clearBtn.addEventListener('click', clearName);