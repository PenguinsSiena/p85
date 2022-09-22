canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
 
greencar_width =75;
greencar_height = 100;

var greencar_image;

greencar_x = 5;
greencar_y = 225;


function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadimg; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	greencar_imgTag = new Image(); //defining a variable with a new image
	greencar_imgTag.onload = uploadimg; // setting a function, onloading this variable
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {

	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}


function uploadgreencar() {

	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode
	console.log(keyPressed);

		if(keyPressed == '38')
		{
			up();
			console.log ("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log ("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log ("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log ("right");
		}
		
}
function up()
{
		if(greencar_y >=0)
		{
		greencar_y = greencar_y - 10;
		console.log("when up arrow is pressed, x = " + greencar_x + "| y = " + greencar_y);
		uploadBackground();
		uploadgreencar(); 
		}
	}
	function down()
	{
			if(greencar_y <=10)
			{
			greencar_y = greencar_y + 10;
			console.log("when down arrow is pressed, x = " + greencar_x + "| y = " + greencar_y);
			uploadBackground();
			uploadgreencar(); 
			}
}
	function right()
{
	if(greencar_y >=0)
	{
	greencar_y = greencar_y + 10;
	console.log("when right arrow is pressed, x = " + greencar_x + "| y = " + greencar_y);
	uploadBackground();
	uploadgreencar(); 
	}
}

function left()
{
		if(greencar_y <=10)
		{
		greencar_y = greencar_y - 10;
		console.log("when left arrow is pressed, x = " + greencar_x + "| y = " + greencar_y);
		uploadBackground();
		uploadgreencar(); 
		}
}



