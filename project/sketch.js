const density = '¶@ØÆMåBNÊßÔR#8Q&mÃ0À$GXZA5ñk2S%±3Fz¢yÝCJf1t7ªLc¿+?(r/¤²!*;"^:,.`                                     ';

let girl;

function preload() {
  girl = loadImage("assets/purple.jpg");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0)

  let w = width / girl.width;
  let h = height / girl.height;
  girl.loadPixels();

  for (let i = 0; i < girl.width; i++) {
    for (let j = 0; j < girl.height; j++) {
      let pixelIndex = (i + j * girl.width) * 4;
      const r = girl.pixels[pixelIndex + 0];
      const g = girl.pixels[pixelIndex + 1];
      const b = girl.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;

      noStroke();
      fill(255);

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);

    }
  }
}