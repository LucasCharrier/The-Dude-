#pragma strict

var speed : double = 5;

public var soundEffect : AudioClip;

function Start () {

}

function Update () {
	UpdateKeyboardMovements();
}

function UpdateKeyboardMovements(){
	if(Input.GetKey("right")){
	rigidbody.AddForce(Vector3.right*speed);
			
	}else if(Input.GetKey("left")){
		rigidbody.AddForce(Vector3.left*speed);
		
	}else if(Input.GetKey("up")){
		rigidbody.AddForce(Vector3.forward*speed);
	
	}else if(Input.GetKey("down")){
		rigidbody.AddForce(Vector3.back*speed);
	}
}

function OnCollisionEnter(collideEvent:Collision){
	audio.PlayOneShot(soundEffect);

}