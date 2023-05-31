const counterElement = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

let counter = 0;

function incrementCounter() {
  counter++;
  counterElement.textContent = counter;
}

function decrementCounter() {
  counter--;
  counterElement.textContent = counter;
}

function resetCounter() {
  counter = 0;
  counterElement.textContent = counter;
}

increaseBtn.addEventListener('click', incrementCounter);
decreaseBtn.addEventListener('click', decrementCounter);
resetBtn.addEventListener('click', resetCounter);

function updateCount() {
  countElement.textContent = count;
}

