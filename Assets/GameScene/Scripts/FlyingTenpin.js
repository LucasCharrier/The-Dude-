#pragma strict

/* For the end of the track, the Tenpin must be created dynamicaly and move in direction of the user */

public var flyingTenpin : GameObject;

function Start () {

}

function Update () {
	
	 var tenpin : GameObject = Instantiate(flyingTenpin,transform.position, transform.rotation);
	 tenpin.transform.position.z =- 1;
	 
}