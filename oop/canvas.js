const canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const c = canvas.getContext('2d');

c.fillRect(100,100,100,100);
c.fillRect(200,100,100,100);
c.fillRect(300,100,100,100);
c.fillRect(400,100,100,100);