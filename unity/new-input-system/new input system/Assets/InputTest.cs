using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Experimental.Input;

public class InputTest : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        Debug.LogFormat("Mouse Position : {0}", Mouse.current.position.ReadValue());
        Debug.LogFormat("Press Space Key : {0}", Keyboard.current.spaceKey.isPressed);
    }
}
