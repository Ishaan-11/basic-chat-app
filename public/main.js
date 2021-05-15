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
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on('user left', msg => {
  const item = document.createElement('li');
  item.textContent = msg;
  item.className= 'log';
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on('user joined', msg => {
  const item = document.createElement('li');
  item.textContent = msg;
  item.className= 'log';
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});