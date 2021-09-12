const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.font = '38pt Arial';
context.fillStyle = 'cornflowerblue';
context.strokeStyle = 'blue';

context.fillText('hello canvas', canvas.width / 2 - 150, canvas.height / 2 + 15);
context.strokeText('hello canvas', canvas.width / 2 - 150, convas.height / 2 + 15);