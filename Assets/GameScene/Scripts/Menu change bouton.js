#pragma strict

var levelToLoad:String; 
var normalTexture: Texture2D;
var rollOverTexture: Texture2D;
var bruit: AudioClip;
var QuitButton: boolean = false;

function OnMouseEnter () {
	guiTexture.texture = rollOverTexture;

}

function OnMouseExit () {
	guiTexture.texture = normalTexture;

}

function onMouseUp(){
	audio.PlayOneShot(bruit);
	yield new WaitForSeconds(0.35);
	
if(QuitButton){
	Application.Quit();
	Debug.Log("Ok pour le quit");
	}
else{
	Application.LoadLevel(levelToLoad);
	}
}