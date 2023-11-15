function drawNinja() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext("2d");
  
    ctx.beginPath();
  
    ctx.moveTo(400, 200);
    ctx.lineTo(550, 200);
    ctx.lineTo(550, 230);
    ctx.lineTo(550, 230);
    ctx.lineTo(600, 230);
    ctx.lineTo(600, 260);
    ctx.lineTo(650, 260);
    ctx.lineTo(650, 290);
    ctx.lineTo(700, 290);
    ctx.lineTo(700, 600);
    ctx.lineTo(650, 600);
    ctx.lineTo(650, 620);
    ctx.lineTo(600, 620);
    ctx.lineTo(600, 640);
    ctx.lineTo(400, 640);
    ctx.lineTo(400, 620);
    ctx.lineTo(350, 620);
    ctx.lineTo(350, 620);
    ctx.lineTo(350, 600);
    ctx.lineTo(300, 600);
    ctx.lineTo(300, 300);
    ctx.lineTo(330, 300);
    ctx.lineTo(330, 270);
    ctx.lineTo(350, 270);
    ctx.lineTo(350, 240);
    ctx.lineTo(370, 240);
    ctx.lineTo(395, 240);
    ctx.lineTo(395, 220);
    ctx.lineTo(400, 220);
    ctx.lineTo(400, 200);

    ctx.moveTo(700, 350);
    ctx.lineTo(500, 350);
    ctx.lineTo(500, 400);
    ctx.lineTo(480, 400);
    ctx.lineTo(480, 450);
    ctx.lineTo(700, 450);

    ctx.fill();
    ctx.stroke();

    drawBandana();
}

function drawBandana() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext("2d");
  
    ctx.beginPath();
    ctx.rect(400, 290, 300, 50);
    ctx.rect(220, 270, 200, 30);
    ctx.rect(220, 320, 200, 30);

    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

    drawNinjaEyes();
}

function drawNinjaEyes() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext("2d");
  
    ctx.beginPath();
    ctx.rect(650, 350, 30, 30);
    ctx.rect(550, 350, 30, 30);

    ctx.fillStyle = "blue";

    ctx.fill();
}
  
  drawNinja();