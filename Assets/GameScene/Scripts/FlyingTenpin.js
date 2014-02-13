#pragma strict

/*
*	This file is not used
*	It was supposed to let the pin fly to the character being instaniate dynamically
* 	to make it more difficult for the user to arrive at the end of the track
*/

public var flyingTenpin : GameObject;

function Start () {

}

function Update () {
	
	 var tenpin : GameObject = Instantiate(flyingTenpin,transform.position, transform.rotation);
	 tenpin.transform.position.z =- 1;
	 
}