using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class flowers : MonoBehaviour
{

    void Start()
    {
    }
    public void GrowingFlower(string  num)
    {
      int currentHight = 0;
      int  hight= Mathf.RoundToInt(Mathf.Log(int.Parse(num), 2));
      List<GameObject> cloneLis = new List<GameObject>();
        if (currentHight < hight)
        {
            for (int i = 0; i < hight; i++)
            {
                GameObject clone = Resources.Load<GameObject>("clone01");
                GameObject ob = Instantiate(clone, new Vector3(0, 0, 0), Quaternion.identity);

                cloneLis.Add(ob);
            }
        }
        for (int i = 1; i < cloneLis.Count; i++)
        {
            cloneLis[0].transform.SetPositionAndRotation(new Vector3(0, 1.6f, 0), Quaternion.Euler(-89.98f, 0, 0));
            cloneLis[0].transform.SetParent(transform);
            cloneLis[i].transform.SetParent(transform);
            cloneLis[i].transform.SetPositionAndRotation(new Vector3(0, cloneLis[i - 1].transform.position.y + 0.2f, 0), Quaternion.Euler(-89.98f, 0, 0));
        }
        //Debug.Log(cloneLis.Count);
        transform.GetChild(2).SetPositionAndRotation(new Vector3(0f, cloneLis[cloneLis.Count - 1].transform.position.y + 0.5f, 0f), Quaternion.Euler(-89.98f, 0, 0));
        //Debug.Log(transform.GetChild(2).name);
        //Debug.Log(transform.childCount);
        for (int i = 3; i < transform.childCount-hight; i++)
        {
            if (transform.childCount!=hight+3)
            {
                //Debug.Log("!!!!!!!!!:"+transform.childCount);
                GameObject.Destroy(transform.GetChild(i).gameObject);
            }

        }
        //Debug.Log(transform.childCount);
    }
}
