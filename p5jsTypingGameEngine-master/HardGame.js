function preloadHardGame()
{

}

function setupHardGame()
{

}

function drawHardGame()
{

   if (canvasID == 200)
	{
		typingBox.show();
		showQuestion(words1[6],201);
	}
	else if (canvasID == 201)
	{
		showQuestion(words1[7],202);
	}
	else if (canvasID == 202)
	{
		showQuestion(words1[8],203);
	}
	else if (canvasID == 203)
	{
		showQuestion(words1[9],204);
	}
	else if (canvasID == 204)
	{
		showQuestion(words1[10],205);
	}
	else if (canvasID == 205)
	{
		endOfSection2();
	}


unction endOfSection2()
{
	typingBox.hide();
	textSize(32);
	fill(255,255,255);
	text("Hard complete!",50,50);
	textSize(12);


	// --------------------------------------------------------------------------------------------------------
	fill(255,200,0);
    stroke(0,0,0);
	strokeWeight(3);
	rect(180,180,100,50);	

    textSize(32);
	fill(255,255,255);
	textSize(12);
	text("Main menu",200,210);

		if (mouseX > 180 && mouseX < 180+100 && mouseY > 180 && mouseY < 180+50 && mouseIsPressed)
	{
		canvasID = 2;
	}
	// --------------------------------------------------------------------------------------------------------

}



}