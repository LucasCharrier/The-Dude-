#pragma strict

/* 
*	For each object for optimization we want it to be destroy
*	when the character has passed them, it can't go back so 
* 	we don't need the object anymore
*/

private var Character : GameObject;

function Start () {
 	Character = GameObject.Find("Lebowski");
}

function Update () {

/* 
	we add 200 to the current position, the user can indeed turn the head and see 
	what is behind him. In order to make it more realistic we destroy the object after
	a distance of 200.
*/
if(transform.position.z+200 < Character.transform.position.z){
	Destroy(gameObject);
}

}