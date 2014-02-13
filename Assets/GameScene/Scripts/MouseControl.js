#pragma strict


/*
*	Manage the lauch of the ball. At the beginning it was using the mouse to lauch ball according to 
*	the position of the mouse on the screen when hitting the right Key, but for more convenience when 
*	using the Occulus, it eventually lauch the ball hitting space Key. 
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

