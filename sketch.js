console.log('Edx_Homework_week_3');

  
function setup() {
  createCanvas(2000, 1700);
  frameRate(2);
  noLoop();

  }


function draw(){
  let z = random(height - 10);
  
  background(255);
   
  
  beginShape(); 
  for(let i = 10; i < 30; i++){
    fill(100, 149, 237);
    stroke(0);
    strokeWeight(3);
    
    vertex(i* random(100), random(z));

    // fill('blue');
    // vertex(100, 50);
  }

  endShape(CLOSE);

  beginShape(); 
  for(let i = 5; i < 24; i++){
    fill(0,0,255);
    stroke(100);
    strokeWeight(8);
    vertex(i* random(100), random(z));
  }

  endShape(CLOSE);
  
  }


  function mousePressed(){
    save('image.png');
  }