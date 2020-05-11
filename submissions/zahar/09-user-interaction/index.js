/* eslint-disable */
function onLoad() {
  console.log('Загрузилось!!!');
  prompt();
  confirm();
  alert();
}

function onBlur(evt) {
  console.log(evt.target.value);
}

function onClick() {
  const answer = prompt('Are you ready');
  const paragraph = document.getElementById('prgrph');
  paragraph.innerText = answer || 'default text';
}
