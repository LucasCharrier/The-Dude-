#pragma strict


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