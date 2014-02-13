#pragma strict


/*
*	Manage the menu which explain the game at the beginning
*	
*/


var PlayOff : Texture2D;
var PlayOn : Texture2D;
var QuitOff : Texture2D;
var QuitOn : Texture2D;
var Right : Texture2D;
var Left : Texture2D;
var Up : Texture2D;
var Down : Texture2D;
var SpaceButton : Texture2D;
var showArrow : boolean = true;
private var Character : GameObject;
var distance : int;

function Start () {
	Character = GameObject.Find("Main Camera");
}

function Update () {
	distance = Character.transform.position.z;
	if(distance > 1700){
		showArrow = false;
	}
}

function OnGUI(){
	var widthButton : int = 200;
	var heightButton : int = 100;
	
	var x : int = Screen.width/2 - widthButton/2;
	var y : int = Screen.height/2; 
	
	if(GUI.Button(Rect(x-130,10,widthButton,heightButton),PlayOff))
		Application.LoadLevel("TheDude5");
	if(GUI.Button(Rect(x+130,10,widthButton,heightButton),QuitOff))
		Application.Quit();
	
	if(showArrow){
		GUI.Button(Rect(x+120,y+55,50,50),Left);
		GUI.Button(Rect(x+175,y+55,50,50),Down);
		GUI.Button(Rect(x+175,y+0,50,50),Up);
		GUI.Button(Rect(x+230,y+55,50,50),Right);
		GUI.Button(Rect(x+120,y+110,160,50),SpaceButton);
		GUI.Button(Rect(x-140,y-30,250,200),"Press space to launch a ball \n\n Press arrows to move");
	}	
		

}