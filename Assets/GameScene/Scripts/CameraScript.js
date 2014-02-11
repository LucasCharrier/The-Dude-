#pragma strict

/*
*	Permit to do most of the actions. As moving the bathtube to the left, right, up, down,
*	dealing with modifying the vision hitting a join and dealing with most of collision event.
*	It also communicating with the C# file using message.
*/

var hitTenpin : AudioClip;
var smoke : AudioClip;
var outch : AudioClip;
var getBall : AudioClip;
var getRussian : AudioClip;
var speed : int = 5;
var nbBall : int = 0;
var TimerStoned : float = 0.0;
var TimerBlackRussianed : float = 0.0;
var isStoned : boolean = false; 
var isUnstoned : boolean = false; 
var blackRussianed : boolean = false; 
public var joystick : Vector2;
var stonedSkybox : Material;
var basicSkybox : Material;
var hasBeenHit : boolean;
var texture : Texture2D; 
var Piste : GameObject;


function Start () {
	texture = new Texture2D(1, 1);
	var colors = new Color[4];
	colors[0] = Color.red;
	colors[1] = Color.red;
	colors[2] = Color.red;
	colors[3] = Color.red;
	colors[0].a = 0.4;
	colors[1].a = 0.4;
	colors[2].a = 0.4;
	colors[3].a = 0.4;
	Piste = GameObject.Find("Terrain");
    texture.SetPixels(colors);
    texture.Apply( true );
}

function Update () {
	
	transform.position += transform.forward*speed ;
	
	if(blackRussianed){
		if(Input.GetKey("down")){
			transform.Translate(Vector3.up*speed/2);
		}else if(Input.GetKey("up")){
			transform.Translate(Vector3.down*speed/2);
		}else 
		if(Input.GetKey("left")){
			transform.Translate(Vector3.right*speed/2);
		}else if(Input.GetKey("right")){
			transform.Translate(Vector3.left*speed/2);
		}
	}else{
	//f(joystick == -1)
		transform.Translate(Vector3.up*joystick.y*speed/8);
	//if(joystick == 1)
		transform.Translate(Vector3.right*joystick.x*speed/2);
		
	if(Input.GetKey("up")){
		transform.Translate(Vector3.up*speed/2);
	}else if(Input.GetKey("down")){
		transform.Translate(Vector3.down*speed/2);
	}else 
	if(Input.GetKey("right")){
		transform.Translate(Vector3.right*speed/2);
	}else if(Input.GetKey("left")){
		transform.Translate(Vector3.left*speed/2);
	}if(Input.GetKey("a"))
		transform.Rotate(0,-1,0);
	if(Input.GetKey("z"))
		transform.Rotate(0,1,0);
	}
	
	if(isStoned||isUnstoned){
		TimerStoned += Time.deltaTime;
		
		if(TimerStoned >= 5.0){
			isStoned = false;
			isUnstoned = true;
		}
		if(TimerStoned >= 10.0){
			isUnstoned = false;
			TimerStoned = 0.0;
			Camera.main.fieldOfView = 70;
			RenderSettings.skybox = basicSkybox;
		}
	}
	if(blackRussianed){
		TimerBlackRussianed += Time.deltaTime;
		
		if(TimerBlackRussianed >= 5.0){
			blackRussianed = false;
		}
	}
	/*var joy : MoveWithJoy;
	joy =  gameObject.GetComponent("MoveWithJoy");
	transform.position.x += joy.WandAxisVertical;*/
	
	/*if(Input.GetKey("up"))
		transform.Translate(Vector3.up*speed/2);
	if(Input.GetKey("right")){
		transform.Translate(Vector3.right*speed/2);
	}else if(Input.GetKey("left")){
		transform.Translate(Vector3.left*speed/2);
	}if(Input.GetKey("a"))
		transform.Rotate(0,-1,0);
	if(Input.GetKey("z"))
		transform.Rotate(0,1,0);
	if(isStoned||isUnstoned){
		Timer += Time.deltaTime;
		
		if(Timer >= 5.0){
			isStoned = false;
			isUnstoned = true;
		}
		if(Timer >= 10.0){
			isUnstoned = false;
			Timer = 0.0;
			Camera.main.backgroundColor = Color.blue;
		}
	}*/
	

}

function ChangeFieldOfView()
{
    while(isStoned)
    {
        Camera.main.fieldOfView++;
        yield WaitForSeconds(0.1);
    }
    while(isUnstoned){
    	Camera.main.fieldOfView--; 
    	yield WaitForSeconds(0.1);
    	speed = 5;
    }
}

function OnCollisionEnter(collideEvent : Collision){
	if(collideEvent.gameObject.tag == "bong"){
			audio.PlayOneShot(smoke);
			Destroy(collideEvent.gameObject);
			isStoned = true;
			ChangeFieldOfView();
			RenderSettings.skybox = stonedSkybox;
			speed = 7;					
	}else if(collideEvent.gameObject.tag == "ball"){
			//audio.PlayOneShot(getBall);
			Destroy(collideEvent.gameObject);
			nbBall++;
			SendMessageUpwards("GetBall");
			audio.PlayOneShot(getBall);	
	}else if(collideEvent.gameObject.tag == "tenpin"){
			hasBeenHit = true;
			audio.PlayOneShot(hitTenpin);
			//FlashWhenHit();
			audio.PlayOneShot(outch);
			yield WaitForSeconds(0.1);
			hasBeenHit = false;
    }else if(collideEvent.gameObject.tag == "whiteRussian"){
    		Destroy(collideEvent.gameObject);
    		audio.PlayOneShot(getRussian);
    		SendMessageUpwards("GetWhiteRussian");
    }else if(collideEvent.gameObject.tag == "blackRussian"){
    		Destroy(collideEvent.gameObject);
    		audio.PlayOneShot(getRussian);
    		blackRussianed = true;
    		SendMessageUpwards("GetBlackRussian");
    }
	

}

function OnGUI(){
	
if(hasBeenHit){
	
	GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), texture, ScaleMode.StretchToFill, true, 0.5f);
	 	
}
	
}


function MoveJoystick(theJoystick : Vector2){
 	joystick = 	theJoystick;
 	Debug.Log("move with joy");
 	Debug.Log(joystick.x);
 	Debug.Log(joystick.y);
 }


