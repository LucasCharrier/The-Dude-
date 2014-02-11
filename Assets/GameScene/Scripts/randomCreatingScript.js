#pragma strict

/*
*	This file is not currently used. The objective was to instantiate 
*	dynamicaly all the objects.
*/

var Character : GameObject;
var p_tenpin_small_horizontal : GameObject; 
var p_tenpin_small_empty : GameObject; 
var p_tenpin_small : GameObject; 


var line_tenpin_medium_empty : GameObject; 
var line_tenpin_medium_mixed1 : GameObject;
var line_tenpin_medium_mixed2 : GameObject;  
var line_tenpin_medium : GameObject;
var triangle_tenpin_medium : GameObject;
var line_tenpin_small_horizontal : GameObject;

var line_tenpin_small : GameObject; 
var line_tenpin_small_empty : GameObject;
var line_tenpin_small_mixed1 : GameObject; 
var line_tenpin_small_mixed2 : GameObject; 
var triangle_tenpin_small : GameObject;
var circle_tenpin_small : GameObject;  

var ball : GameObject; 
  
var x : float;
function Start () {
	Character = GameObject.Find("Lebowski");
	
	/*for (var i : int = 1;i < 11; i++) {
		var line7 : GameObject = Instantiate(line_tenpin_small, Vector3(transform.position.x+10,transform.position.y+20,1000*i+10),transform.rotation);
			var line1 : GameObject = Instantiate(line_tenpin_medium_empty, Vector3(transform.position.x,transform.position.y+85,1000*i+50),transform.rotation);
	var line2 : GameObject = Instantiate(line_tenpin_medium_mixed1, Vector3(transform.position.x,transform.position.y+85,1000*i+100),transform.rotation);
 	var line3 : GameObject = Instantiate(line_tenpin_medium_mixed2, Vector3(transform.position.x,transform.position.y+85,1000*i+250),transform.rotation);
 	var line4 : GameObject = Instantiate(line_tenpin_medium, Vector3(transform.position.x-100,transform.position.y+85,1000*i+380),transform.rotation);
 	var line6 : GameObject = Instantiate(line_tenpin_small_horizontal, Vector3(transform.position.x,transform.position.y+85,1000*i+450),transform.rotation);
 	var line5 : GameObject = Instantiate(ball, Vector3(transform.position.x,transform.position.y,1000*i+520),transform.rotation);
 	var line8 : GameObject = Instantiate(line_tenpin_small_empty, Vector3(transform.position.x,transform.position.y,1000*i+600),transform.rotation);
 	var line9 : GameObject = Instantiate(line_tenpin_small_mixed1, Vector3(transform.position.x,transform.position.y,1000*i+650),transform.rotation);
 	var line10 : GameObject = Instantiate(line_tenpin_small_mixed2, Vector3(transform.position.x,transform.position.y,1000*i+720),transform.rotation);
 	var line11 : GameObject = Instantiate(triangle_tenpin_small, Vector3(transform.position.x,transform.position.y,1000*i+800),transform.rotation);
 	var line12 : GameObject = Instantiate(circle_tenpin_small, Vector3(transform.position.x,transform.position.y,1000*i+850),transform.rotation);
 	
 	

 	line1.transform.parent = transform;
 	line2.transform.parent = transform;
 	line3.transform.parent = transform;
 	line4.transform.parent = transform;
 	line5.transform.parent = transform;
 	line6.transform.parent = transform;
 	line7.transform.parent = transform;
 	line8.transform.parent = transform;
 	line9.transform.parent = transform;
 	line10.transform.parent = transform;
 	line11.transform.parent = transform;
 	line12.transform.parent = transform;
	}*/

 	
}

function Update () {
 if(Character.transform.position.z<10000){

 }
}
