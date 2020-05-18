(function (window) {
  const _ = {};

  _.runTask = () => {
    const answer = prompt('Who is there?');

    if (!answer) {
      alert('Отменено');
    } else if (answer === 'Admin') {
      const secondAnswer = prompt('What is the password?');
      if (!secondAnswer) {
        alert('Отменено');
      } else if (secondAnswer === 'Я главный') {
        alert('Hello');
      } else {
        alert('Неправильный пароль');
      }
    } else {
      alert('I dont know you');
    }

    return;
  };

  _.addCounter = () => {
    const getCounter = () => {
      let counter = 0;
      return () => ++counter;
    };

    const counterSection = document.getElementById('counter-section');
    const newCounterBlock = document.createElement('div');
    const button = document.createElement('button');
    button.innerText = 'Increment counter';
    const counter = getCounter();
    const label = document.createElement('label');
    label.innerText = 0;
    button.onclick = () => {
      label.innerText = counter();
    };
    counterSection.append(newCounterBlock);
    newCounterBlock.append(button);
    newCounterBlock.append(label);
  };

  _.getFibonacchiNumber = () => {
    const fibFunc = (num) => {
      if (num === 0) {
        return 0;
      } else if (num === 1) {
        return 1;
      } else if (typeof num === 'number' && num > 0) {
        return fibFunc(num - 1) + fibFunc(num - 2);
      }
    };
    document.getElementById('fibonacchi-output').innerText = fibFunc(
      +document.getElementById('fib-value').value,
    );
  };

  window._ = _;
})(window);
