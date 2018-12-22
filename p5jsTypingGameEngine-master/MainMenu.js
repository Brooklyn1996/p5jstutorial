var buttonEasyGame;
var buttonEasyGameDARK;

function preloadMainMenu()
{
	
}

function setupMainMenu()
{

}

function drawMainMenu()
{
	background(125,125,125)
	typingBox.hide();
	textSize(32);
	fill(255,255,255);
	text("Main Menu!",50,50);
	textSize(8);

		textSize(32);
	    fill(255,255,255);
	    text("TYPING GAME",100,100);
	    textSize(12);



	// --------------------------------------------------------------------------------------------------------
    fill(255,200,0);
    stroke(0,0,0);
	strokeWeight(1);
	rect(10,180,100,50);	

    textSize(32);
	fill(255,255,255);
	textSize(12);
	text("Hard Game",30,210);


	if (mouseX > 10 && mouseX < 10+100 && mouseY > 180 && mouseY < 180+50 && mouseIsPressed)
	{
		typingBox.show();
		canvasID = 200;
	}
	// --------------------------------------------------------------------------------------------------------



    // --------------------------------------------------------------------------------------------------------

    fill(255,200,0);
    stroke(0,0,0);
	strokeWeight(1);
	rect(200,180,100,50);	

    textSize(32);
	fill(255,255,255);
	textSize(12);
	text("Easy Game",220,210);

	if (mouseX > 200 && mouseX < 200+100 && mouseY > 180 && mouseY < 180+50 && mouseIsPressed)
	{
		typingBox.show();
		canvasID = 100;
	}
	
	// --------------------------------------------------------------------------------------------------------


	
}