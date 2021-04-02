# Robot Chicken

Robot Chicken is an easy to build animatronic creature that contains 7 servos which allow you to give your creature a lot of expression and personality. 

## GETTING STARTED

### Build Instructions
You can find the build instructions over on Make:Projects

### Espruino Code
The robotchicken module has everything in it to control all 7 servos manually as well as a set of ready-built expressions. See the list below. 

**Include it from your Espruino IDE's local projects folder**
```const robotchicken = require("robotchicken");```

-or-

**Include it directly from the github repo**
```const robotchicken = require("https://raw.githubusercontent.com/robotictheater/robotchicken/main/robotchicken.js");```

That's all there is to it.  Now you are ready to start programming some personality inot your creature. 

-------------------------------

## Built-in Expressions

### Home
  *  ```robotchicken.home()```
     *  Move all servos to their home position.


### Hand
  *  ```robotchicken.hand(shape, moveTime, holdtime, callback)```
     *  **shape** - What shape do you want the hand to form. The availble shapes are: (rock  |  paper  |  scissors)
     *  **moveTime** - The number of milliseconds to take to complete the movement.
     *  **holdTime** - The number of milliseconds to hold the shape before the servos release
     *  **callback** - The function to call when the movement is complete.  This happens after the moveTime and holdTime have elapsed.