using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ConnectAndTransfor : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void water()
    {
        Application.ExternalCall("water", "浇水");
    }
    public void lighting()
    {
        Application.ExternalCall("lighting", "光照");
    }
    public void love()
    {
        Application.ExternalCall("love", "爱心");
    }
    public void connectNewMask(){
        Application.ExternalCall("connectNewMask");
    }
 
}
