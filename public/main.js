const socket = io();

const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', e => {
  e.preventDefault();
  if(input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
    input.focus();
  }
});

socket.on('chat message', msg => {
  const item = document.createElement('li');
  item.textContent = msg;
  addMesageElement(item);
});

socket.on('user left', msg => {
  log(msg);
});

socket.on('user joined', msg => {
  log(msg);
});



function log(msg) {
  const item = document.createElement('li');
  item.textContent = msg;
  item.className= 'log';
  addMesageElement(item);
}

function addMesageElement(ele) {
  messages.appendChild(ele);
  window.scrollTo(0, document.body.scrollHeight);
}