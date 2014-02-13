using UnityEngine;
using System.Runtime.InteropServices;
using MiddleVR_Unity3D;
using System;


public class MoveWithJoy : MonoBehaviour {
	public Vector2 objectJoystick;
	public float WandAxisVertical = 0.0f;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		vrDeviceManager dmgr = MiddleVR.VRDeviceMgr;
		objectJoystick.y = dmgr.GetWandVerticalAxisValue();
		objectJoystick.x = dmgr.GetWandHorizontalAxisValue();
		//WandAxisHorizontal = dmgr.GetWandVerticallAxisValue();
		SendMessage("MoveJoystick",objectJoystick);
        }
	
}
