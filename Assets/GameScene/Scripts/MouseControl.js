#pragma strict

/*
*	This file originaly permits to send the ball, using the mouse. If lauching the ball in the direction
*	in which you clicked on the Screen. It is simplified for the use of the Occulus and permit to send 
*	the ball hitting space key
*/

public var Target : GameObject;
var sendBall : AudioClip;

function Start () {


}

function Update () {
		
var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
var cameraScript : CameraScript = GetComponent (CameraScript);

if(cameraScript.nbBall > 0){
		if(Input.GetKeyDown("space")){
			var newInstance : GameObject = Instantiate (Target , transform.position + transform.forward*50, transform.rotation ) ;
			var force:float = 400;
			var direction: Vector3 = transform.forward;
			newInstance.rigidbody.AddForce(force*direction*cameraScript.speed,ForceMode.Impulse);;
			gameObject.audio.PlayOneShot(sendBall);
			SendMessageUpwards("SendBall");
			cameraScript.nbBall--;
		}	
	/*if (Input.GetMouseButtonDown(0)){
		var newInstance : GameObject = Instantiate (Target , transform.position + transform.forward*50, transform.rotation ) ;
		var force:float = 200;
		var direction: Vector3 = transform.forward;
		newInstance.rigidbody.AddForce(force*ray.direction, ForceMode.Impulse); 
		newInstance.audio.Play();
		SendMessageUpwards("SendBall");
		cameraScript.nbBall--;
	}*/
		
	}	
}

