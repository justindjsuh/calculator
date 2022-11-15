class Calculator {
  constructor() {
    this.total = 0;
    this.nums = [];
    this.func = '';
  }
  getTotal() {
    this.total = this.nums[0];
  }
  add(num1, num2) {
    return num1 + num2;
  }
  minus(num1, num2) {
    return num1 - num2;
  }
  times(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
  // power(num1, num2) {}
  performOperation(num1, num2) {
    if (this.func === 'add') {
      this.add(num1, num2);
    } else if (this.func === 'minus') {
      this.minus(num1, num2);
    } else if (this.func === 'times') {
      this.times(num1, num2);
    } else if (this.func === 'divide') {
      this.divide(num1, num2);
    }
  }
}
// this.nums push button number pushed
// display whatever that button number was

const calc = new Calculator();

const display = document.getElementsByClassName('display-input')[0];

// Arithmetic function buttons
const btnPlus = document.getElementsByClassName('btn-plus')[0];
btnPlus.addEventListener('click', () => {
  if (calc.nums.length === 2) {
    const num1 = calc.nums[0];
    calc.nums.pop();
    const num2 = calc.nums[0];
    calc.nums.pop();
    const total = calc.performOperation(num1, num2);
    calc.nums.push(total);
    calc.getTotal();
  }
  display.innerHTML = calc.total;
  calc.func = 'add';
});

const btnMinus = document.getElementsByClassName('btn-minus')[0];
btnMinus.addEventListener('click', () => {
  display.innerHTML = 0;
  calc.func = 'minus';
});

const btnTimes = document.getElementsByClassName('btn-times')[0];
btnTimes.addEventListener('click', () => {
  display.innerHTML = 0;
  calc.func = 'times';
});

const btnDivide = document.getElementsByClassName('btn-divide')[0];
btnDivide.addEventListener('click', () => {
  display.innerHTML = 0;
  calc.func = 'divide';
});

// Buttons 7-9
const btn7 = document.getElementsByClassName('btn-7')[0];
btn7.addEventListener('click', () => {
  display.innerHTML = 7;
  calc.nums.push(7);
});

const btn8 = document.getElementsByClassName('btn-8')[0];
btn8.addEventListener('click', () => {
  display.innerHTML = 8;
});

const btn9 = document.getElementsByClassName('btn-9')[0];
btn9.addEventListener('click', () => {
  display.innerHTML = 9;
});

// Buttons 4-6
const btn4 = document.getElementsByClassName('btn-4')[0];
btn4.addEventListener('click', () => {
  display.innerHTML = 4;
});

const btn5 = document.getElementsByClassName('btn-5')[0];
btn5.addEventListener('click', () => {
  display.innerHTML = 5;
});

const btn6 = document.getElementsByClassName('btn-6')[0];
btn6.addEventListener('click', () => {
  display.innerHTML = 6;
});

// Buttons 1-3
const btn1 = document.getElementsByClassName('btn-1')[0];
btn1.addEventListener('click', () => {
  display.innerHTML = 1;
});

const btn2 = document.getElementsByClassName('btn-2')[0];
btn2.addEventListener('click', () => {
  display.innerHTML = 2;
});

const btn3 = document.getElementsByClassName('btn-3')[0];
btn3.addEventListener('click', () => {
  display.innerHTML = 3;
});

const btn0 = document.getElementsByClassName('btn-0')[0];
btn0.addEventListener('click', () => {
  display.innerHTML = 0;
});
