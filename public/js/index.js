var socket = io();

socket.on('connect', function() {
  console.log('Conected to server');

  socket.emit('createMessage', {
    to: 'Dude',
    text:' sup dude'
  });

});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});


socket.on('newMessage', function(email){
  console.log('New Message',email);
});
