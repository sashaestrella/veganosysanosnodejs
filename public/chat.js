const socket = io.connect('http://localhost:3001');

// Query DOM elements
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const sendButton = document.getElementById('send');
const output = document.getElementById('output');
const announcements = document.querySelectorAll('.announcements');
const feedback = document.getElementById('feedback');
const rightPanel = document.getElementById('right-panel');

//create date object
const date = new Date();

sendButton.addEventListener('click', function(){
    /*make sure user does not send an empty message with an empty handle which is annoying and spammy*/
    if(message.value.length > 0 & handle.value.length > 0){
        socket.emit('chat', {
            message: message.value,
            handle: handle.value
        });
    }else {
        alert("Por favor verifique su nickname y su mensaje")
    }
  //once the message is sent, reset the innerHTML of the message div to an empty string
    message.value = "";
});

socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p>'+ '<span id="date">' + date.toDateString()  + "  " + '</span>' + ' - ' + '<span id="time">' + date.toTimeString() + "  " + '</span>' + ' / ' + '<span id="style-handle">' + data.handle + '  :   ' + '</span>'  + data.message + '</p>';
});

message.addEventListener('keypress', function(){
    if(handle.value.length > 0){
        socket.emit('typing', handle.value);
    }
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' está escribiendo...</em></p>';
});

socket.on('message',function(data){
    announcements[0].innerHTML+= data.greeting;
});

socket.on('newClientConnect',function(data) {
    rightPanel.innerHTML= data.description;
});
