using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CopyFlower : MonoBehaviour
{
    public Button waterBtn;
    public Button loveBtn;
    public Button sunBtn;
    public Text hightNumber,waterNum,lightingNum,loverNum;
    public ParticleSystem rainVfx,sunVfx,loveVfx;
    private Animator growing;
    private int num;
    public GameObject flower;
    void Start()
    {
        rainVfx.Stop();
        sunVfx.Stop();
        loveVfx.Stop();
        transform.position = flower.transform.GetChild(2).position;
        
    }
    public void Copyflowers()
    {

    }
    public void waterActive()
    {
        rainVfx.Play();
    }
    public void sunActive()
    {
        sunVfx.Play();
    }
    public void loveActive()
    {
        loveVfx.Play();
    }
    public void ShowFlowerHight(string hight)
    {
        hightNumber.text = hight;
        
    }
    public void ShowFlowerWater(string num)
    {
        waterNum.text= num;
    }
    public void ShowFlowerHighting(string num)
    {
        lightingNum.text = num;
    }
    public void ShowFlowerLove(string num)
    {
        loverNum.text = num;
    }
}
