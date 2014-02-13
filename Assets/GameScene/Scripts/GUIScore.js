#pragma strict


/*
*	Manage most of the information which are displayed on screen
*	
*/

private var score : int = 5;
private var nbBall : int = 0;
private var distance : int = 0 ;
private var Character : GameObject;
var endValue : Vector3;
var gameOver : boolean;
var win : boolean;
var TextStyle = new GUIStyle();

function Start () {
Character = GameObject.Find("Lebowski");

}

function Update () {
 distance = Character.transform.position.z/10;
 if(gameOver){
 	Character.transform.position = endValue;
 }
 if(distance > 3000){
 	win = true;
 }
}

function OnGUI(){
	var widthButton : int = 200;
	var heightButton : int = 100;
	TextStyle.fontSize = 50;
	TextStyle.fontStyle = FontStyle.Bold;

	var x : int = Screen.width/2 - widthButton/2;
	var y : int = Screen.height/2; 
	
	GUI.Label(new Rect(10,10,60,20),"Vie : " + score);
	GUI.Label(new Rect(10,30,60,20),"Ball : " + nbBall);
	GUI.Label(new Rect(Screen.width-200,10,200,20),"Distance : " + distance);
	if(gameOver){
		GUI.Box(Rect(x-130,y-100,2*widthButton+65,heightButton),"GAME OVER",TextStyle);
		if(GUI.Button(Rect(x-130,Screen.height-10-heightButton,widthButton,heightButton),"PLAY AGAIN")){
			Application.LoadLevel("TheDude5");
		}
		if(GUI.Button(Rect(x+130,Screen.height-10-heightButton,widthButton,heightButton),"QUIT")){
			Application.Quit();
		}
	}
	
	if(win){
			GUI.Box(Rect(x-130,y-100,2*widthButton+65,heightButton),"YOU WIN",TextStyle);
		if(GUI.Button(Rect(x-130,Screen.height-10-heightButton,widthButton,heightButton),"PLAY AGAIN")){
			Application.LoadLevel("TheDude5");
		}
		if(GUI.Button(Rect(x+130,Screen.height-10-heightButton,widthButton,heightButton),"QUIT")){
			Application.Quit();
		}
	
	}
}

function FallenTenpin(){
	if(score > 0){
		score--;
	}
	else{
		gameOver = true;
		endValue = Character.transform.position; 
	}
}

function TouchGlass(){
	score++;
}

function SendBall(){
	nbBall--;
}

function GetBall(){
	nbBall++;
}

function GetWhiteRussian(){
	if(score < 5){
	score++;
	}
}

function GetBlackRussian(){
	
}