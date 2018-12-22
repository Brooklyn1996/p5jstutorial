

function preloadEasyGame()
{
	
}

function setupEasyGame()
{

}

function drawEasyGame()
{
	background(125,125,125)
	fill(225,225,225)
	

	if(mouseX > 100 && mouseX < 100+100 && mouseY > 380 && mouseY < 380+50)
	{
		image(buttonEasyGameDARK,100,380);
		if(mouseIsPressed)
		{
			canvasID = 2;
		}
	}
	else
	{
		image(buttonEasyGame,100,380);
	}

} 
function mouseReleased()
{
	locked = false;
}