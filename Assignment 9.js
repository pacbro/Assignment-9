var canvas = document.querySelector("#myCanvas1");
var ctx = canvas.getContext("2d");

ctx.save(); // save previous display state
//  set drawing properties for the sign
ctx.lineWidth = 32; // nice wide line		
ctx.lineJoin = "round"; // rounded corners
ctx.strokeStyle = "red";
ctx.fillStyle = "white";


// create triangle linear path
ctx.beginPath();
ctx.moveTo(250, 100);
ctx.lineTo(500, 450);
ctx.lineTo(50, 450);
ctx.closePath();
ctx.stroke();
ctx.save();
ctx.fill();

//create indicator lines
ctx.strokeStyle = "black";
ctx.lineJoin = "miter";
ctx.beginPath();
ctx.moveTo(225, 237);
ctx.lineTo(225, 300);
ctx.lineTo(200, 350);
ctx.lineTo(200, 415);
ctx.moveTo(300, 237);
ctx.lineTo(300, 415);
ctx.closePath();
ctx.stroke();

ctx.save();
ctx.restore();


var canvas2 = document.querySelector("#myCanvas2");
var ctx1 = canvas2.getContext("2d");

ctx1.save(); // save previous display state
//  set drawing properties for the sign
ctx1.strokeStyle = "red";
ctx1.fillStyle = "red";


// create circle
ctx1.beginPath();
ctx1.arc(200, 150, 100, 0, 2 * Math.PI);
ctx1.closePath();
ctx1.stroke();
ctx1.fill();
ctx1.save();

//for middle line
ctx1.strokeStyle = "white";
ctx1.lineWidth = 22;
ctx1.beginPath();
ctx1.moveTo(120, 155);
ctx1.lineTo(280, 155);
ctx1.closePath();
ctx1.stroke();

ctx1.save();

//create text
ctx1.fillStyle = "white";
ctx1.font = "bold 30px Arial";
ctx1.fillText("DO NOT", 140, 120);
ctx1.fillText("ENTER", 150, 210);
ctx1.save();
ctx1.restore(); // restore previous display state
