using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMove : MonoBehaviour
{
    public Transform tourCamera;
    //相机参数
    public float moveSpeed = 1.0f;
    public float rotateSpeed = 90.0f;
    public float shiftRate =2.0f;
    public float minDistance =0.5f;
    //运动速度和其每个方向的速度分量
    private Vector3 direction =Vector3.zero;
    private Vector3 speedForward;
    private Vector3 speedBack;
    private Vector3 speedLeft;
    private Vector3 speedRight;
    private Vector3 speedUp;
    private Vector3 speedDown;
    public Vector3 speddk;

    void Start()
    {
        if (tourCamera == null)
        tourCamera =gameObject.transform;
        //防止相机边缘穿透
        if (tourCamera.GetComponent<Camera>().nearClipPlane > minDistance/3)
        {
            tourCamera.GetComponent<Camera>().nearClipPlane/=3;
        }
    }

    void Update()
    {
        GetDirection();
        //检测是否离不可穿透表面过近
        RaycastHit hit;
        while (Physics.Raycast(tourCamera.position,direction,out hit,minDistance))
        {
            //消去垂直与不可穿透表面的运动速度分量
            float angle = Vector3.Angle(direction, hit.normal);
            float magnitude = Vector3.Magnitude(direction) * Mathf.Cos(Mathf.Deg2Rad * (180 - angle));
            direction += hit.normal * magnitude;
        }
        tourCamera.Translate(direction * moveSpeed * Time.deltaTime, Space.World);
    }
    private void  GetDirection(){
        //加速移动
        if(Input.GetKeyDown(KeyCode.LeftShift))
        moveSpeed*=shiftRate;
        if(Input.GetKeyUp(KeyCode.LeftShift))
        moveSpeed/=shiftRate;
        //键盘移动
        //复位
        speedForward=Vector3.zero;
        speedBack=Vector3.zero;
        speedLeft=Vector3.zero;
        speedRight=Vector3.zero;
        speedUp=Vector3.zero;
        speedDown=Vector3.zero;
        //获取按键输入
        if(Input.GetKey(KeyCode.W))
        speedForward=tourCamera.forward;
        if(Input.GetKey(KeyCode.S))
        speedBack=-tourCamera.forward;
        if(Input.GetKey(KeyCode.A))
        speedLeft=-tourCamera.right;
        if(Input.GetKey(KeyCode.D))
        speedRight=tourCamera.right;
        if(Input.GetKey(KeyCode.E))
        speedUp=Vector3.up;
        if(Input.GetKey(KeyCode.Q))
        speedDown=Vector3.down;
        direction=speedForward+speedBack+speedLeft+speedRight+speedUp+speedDown;
        //鼠标旋转
        if(Input.GetMouseButton(1))
        {
            tourCamera.RotateAround(tourCamera.position,Vector3.up,Input.GetAxis("Mouse X")*rotateSpeed*Time.deltaTime);
            tourCamera.RotateAround(tourCamera.position,tourCamera.right,-Input.GetAxis("Mouse Y")*rotateSpeed*Time.deltaTime);
            direction = V3RotateAround(direction,Vector3.up,Input.GetAxis("Mouse X")*rotateSpeed*Time.deltaTime);
            direction = V3RotateAround(direction, tourCamera.right, -Input.GetAxis("Mouse Y") * rotateSpeed * Time.deltaTime);
        }
    }
     public Vector3 V3RotateAround(Vector3 source,Vector3 axis,float angle)
    {
        //旋转系数
        Quaternion q = Quaternion.AngleAxis(angle, axis);
        //返回目标点
        return q * source;
    }
}
