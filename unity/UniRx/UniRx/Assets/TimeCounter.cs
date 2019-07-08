using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TimerCounter : MonoBehaviour
{
    public delegate void TimerEventHandler(int time);

    public event TimerEventHandler OnTimeChanged;

    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(TimerCoroutine());
    }

    IEnumerator TimerCoroutine()
    {
        var time = 100;
        while (time > 0)
        {
            time--;

            OnTimeChanged(time);

            yield return new WaitForSeconds(1);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
