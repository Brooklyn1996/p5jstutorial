function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);
  
}

function draw()
{
  //create a background using RGB values
  background(242,255,175)

  // change the paint brush to a specific color according to RGB values
  fill(175,255,240);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(500,0,200,100);

    fill(255,175,175);

  rect(0,0,200,100);

  fill(225,175,234);

    rect(0,400,200,100);

    fill(194,175,255);

      rect(500,400,200,100);

      fill(175,218,255);

      rect(250,200,200,100);

      fill(0,0,0);
}