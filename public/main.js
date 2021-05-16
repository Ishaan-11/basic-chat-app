const socket = io();

const messages = $('#messages');
const form = $('#form');
const input = $('#input');

form.on('submit', e => {
  e.preventDefault();
  if(input.val()) {
    socket.emit('chat message', input.val());
    input.val('');
    input.focus();
  }
});

socket.on('chat message', msg => {
  const item = $('<li></li>');
  item.text(msg);
  addMesageElement(item);
});

socket.on('user left', msg => {
  log(msg);
});

socket.on('user joined', msg => {
  log(msg);
});



function log(msg) {
  const item = $('<li></li>');
  item.text(msg);
  item.addClass('log');
  addMesageElement(item);
}

function addMesageElement(ele) {
  messages.append(ele);
  window.scrollTo(0, document.body.scrollHeight);
}