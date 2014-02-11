#pragma strict

/*
*	If the user touche a glass we destroy the glass and 
*   send a message to the track to change the value of 
*  	point of life 
*/

function Start () {

}

function Update () {

}

function OnCollisionEnter(collideEvent : Collision){
	if(collideEvent.gameObject.tag == "Player"){
		SendMessageUpwards("TouchGlass");
		Destroy(gameObject);
	}
}