#pragma strict
/*
*	On each object of style pin we had this file which permit to  
*	withdraw a life when the user collide with a Tenpin and make 
* 	its screen flash in red.
*	Ii permit also to destroy the pin and it collides with a ball 
*
*/

function Start () {

}

function Update () {

}

function OnCollisionEnter(collideEvent : Collision){
	if(collideEvent.gameObject.tag == "Player"){
		SendMessageUpwards("FallenTenpin");
	}
	if(collideEvent.gameObject.tag == "ball"){
	 	Destroy(gameObject);
	}
}