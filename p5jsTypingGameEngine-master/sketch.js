/*
canvas ID - 1 = Easy Game 
canvas ID - 2 = Main Menu
canvas ID - 3 = Question1
*/

var health;
var typingBox;
var canvasID;
var words1;
var maxTime;
var resetTime;
var lastRecordedTime;


function preload()
{
	preloadMainMenu();
}

function setup()
{
	createCanvas(800,600);

	setupMainMenu();


	frameRate(30);

	maxTime = 5;
	resetTime = false;

	// question bank number 1
	wordsMax1 = 9;
	words1 = new Array(wordsMax1);

	words1[0] = "car";
	words1[1] = "red";
	words1[2] = "Mad";
	words1[3] = "Late";
	words1[4] = "Mate";
	words1[5] = "Wear";
	words1[6] = "Case";
	words1[7] = "Port";
	words1[8] = "lemon";
	words1[9] = "Koala";
	words1[10] = "pores";
	// question bank number 1


	health = 300;
	canvasID = 2;
	locked = false;

	typingBox = createInput('');
	typingBox.position(110,210);
}

function draw()
{
	background(125,125,125);

	
	if(canvasID == 2)
	{
		drawMainMenu();
	}






	if (canvasID == -1)
	{
		gameOver();
	}
	else if (canvasID == 100)
	{
		showQuestion(words1[0],101);
	}
	else if (canvasID == 101)
	{
		showQuestion(words1[1],102);
	}
	else if (canvasID == 102)
	{
		showQuestion(words1[2],103);
	}
	else if (canvasID == 103)
	{
		showQuestion(words1[3],104);
	}
	else if (canvasID == 104)
	{
		showQuestion(words1[4],105);
	}
	else if (canvasID == 104)
	{
		showQuestion(words1[5],106);
	}
	else if (canvasID == 105)
	{
		endOfSection1();
	}



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


    console.log(canvasID);
    

   
}	

function showQuestion(wordToType,nextID)
{
	fill(0,0,0);
	text(wordToType,110,200);

	if (typingBox.value() == wordToType)
	{
		canvasID = nextID;
		typingBox.value("");
		resetTime = false;
	}

console.log('manage time');
	manageTime();
	showHealth();


}

function manageTime()
{
	if (resetTime == false)
	{
		resetTime = true;
		lastRecordedTime = frameCount + maxTime * 30;
	}
	else
	{
		if (frameCount >= lastRecordedTime)
		{
			resetTime = false;
			health = health - 50;
			canvasID++;
			typingBox.value("");
		}
	}

	fill(255,255,255);
	rect(50,500,(lastRecordedTime - frameCount)*4,50);

	fill(0,0,0);
	var s = int((lastRecordedTime - frameCount) / 30 + 1);
	text("Time Remaining: "+s,50,530);
}

// shows your health bar and check if you are dead or not
function showHealth()
{
	fill(0,255,0);
	rect(400,30,health,25);
	fill(0,0,0);
	text(health,410,30+20)
	if (health <= 0)
	{
		canvasID = -1;
	}
}

// checks what happens when you click on a button
function isButtonClicked(correct,nextID)
{
	var deductHealth = false;
	if (mouseIsPressed && !locked)
	{
		locked = true;
		for (var i = 0; i < numberOfAnswers; i++)
		{
			if (mouseX > questionX[i] && mouseX < questionX[i] + questionLength && mouseY > questionY[i] && mouseY < questionY[i] + questionHeight)
			{
				if (i == correct)
				{
					canvasID = nextID;
					return 0;
				}
				else
				{
					deductHealth = true;
				}
			}
		}
		if (deductHealth)
		{
			health = health - 50;
		}
	}
}

function endOfSection1()
{
	typingBox.hide();
	textSize(32);
	fill(255,255,255);
	text("Easy complete!",50,50);
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
		canvasID = -2;
	}
	// --------------------------------------------------------------------------------------------------------

}

function endOfSection2()
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
	rect(50,180,100,50);	

    textSize(32);
	fill(255,255,255);
	textSize(12);
	text("Main menu",70,210);

		if (mouseX > 50 && mouseX < 50+100 && mouseY > 180 && mouseY < 180+50 && mouseIsPressed)
	{
		canvasID = -2;
	}
	// --------------------------------------------------------------------------------------------------------

}


// handles all game over code
function gameOver()
{
	textSize(32);
	fill(255,255,255);
	text("GAME OVER!",50,50);
	textSize(12);
}



// locked is to prevent HOLDING onto the button
function mouseReleased()
{
	locked = false;

	if(canvasID == -1)
	{
		canvasID = 1
	}
	if(canvasID == -2)
	{
		canvasID = 2
	}
	if(canvasID == -3)
	{
		canvasID = 3
	}
}