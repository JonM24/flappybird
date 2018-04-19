var bird;
var pipes = [];
var playing = false;
var s = 0;
function setup() {
  createCanvas(400, 600);
  textSize(32);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
if(playing){
  background(0);
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      location.reload(true);
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
      s++;
    }
  }

  bird.update();
  bird.show();

if (frameCount % 100 == 0) {
     pipes.push(new Pipe());
  }
  fill(0, 255, 0);
  text('score: ', 15, 575);
  text(s, 110, 577);
}
else {
  text('press spacebar to play', 50, 200);
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    playing = true;
  }
}
