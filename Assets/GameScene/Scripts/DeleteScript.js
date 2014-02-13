#pragma strict

/*
*	This file take care of removing of the object previouly met
*	Indeed for optimization we can destruc this object because the character won't go back
*	We add 200 to make it more real, indeed the user can look behind him, we then wait for a certain
* 	distance to destruct the objects.
*/

private var Character : GameObject;

function Start () {
 	Character = GameObject.Find("Lebowski");
}

function Update () {

if(transform.position.z+200 < Character.transform.position.z){
	Destroy(gameObject);
}

}