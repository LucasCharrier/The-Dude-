#pragma strict

/*
*	This file is not used
*	
*/

var speed : double = 0.005;
function Start () {

}

function Update () {
		UpdateKeyMovements ();
}

function UpdateKeyMovements ()
{
	if (Input.GetKey("d"))
	{
		transform.Translate(Vector3.right*speed,Camera.main.transform);
	}	
	else if (Input.GetKey("q"))
	{
		transform.Translate(Vector3.left*speed,Camera.main.transform);
	}
	else if (Input.GetKey("z"))
	{
		transform.Translate(Vector3.forward*speed,Camera.main.transform);
	}
	else if (Input.GetKey("s"))
	{
		transform.Translate(Vector3.back*speed,Camera.main.transform);
	}
}
function OnCollisionEnter(collideEvent : Collision)
{
	if (collideEvent.gameObject.name == "Ball(Clone)")
	{
	Destroy (collideEvent.gameObject);
	}
}