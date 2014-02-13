#pragma strict

/*
*	This file is added to the glass, to destruct them 
*	on meeting the character
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