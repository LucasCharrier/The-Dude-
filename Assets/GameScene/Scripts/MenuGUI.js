#pragma strict

function Start () {

}

function Update () {

}

function OnGUI(){
	var widthButton : int = 100;
	var heightButton : int = 20;
	
	var x : int = Screen.width/2 - widthButton/2;
	var y : int = Screen.height/2; 
	
	GUI.Label(new Rect(x,y,widthButton,heightButton),"Menu!");
	if(GUI.Button(new Rect(x,y+20,widthButton,heightButton),"Play!"));
		Application.LoadLevel("Scene1");
	if(GUI.Button(new Rect(x,y+20,widthButton,heightButton),"QUIT!"));
		Application.Quit();
}