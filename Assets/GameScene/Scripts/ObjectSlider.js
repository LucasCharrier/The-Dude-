#pragma strict

/*
*	This function obliged the bathtube to stay in a certain area
*
*/

function Start () {

}

function Update () {
	if(transform.position.x>94.02943) transform.position.x=94.02943;
	if(transform.position.x<-94.02943) transform.position.x=-94.02943;
	if(transform.position.y>73.77377) transform.position.y=73.77377;
	if(transform.position.y<0) transform.position.y=0;
}