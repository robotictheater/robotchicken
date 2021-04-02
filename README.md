# Robot Chicken

Robot Chicken is an easy to build animatronic creature that contains 7 servos which allow you to give your creature a lot of expression and personality. 

## GETTING STARTED

### Robot Construction
You can find the build instructions over on Make:Projects

### Espruino Code
The robotchicken module has everything you need. All you have to do is assign it to a variable called ```robotchicken```.

**Include it from your Espruino IDE's local projects folder:**

You can download the robotchicken.js file from this repo and include it in your Espruino IDE project, then include it in your program like so:

```const robotchicken = require("robotchicken");```

-or-

**Include it directly from the github repo:**

```const robotchicken = require("https://raw.githubusercontent.com/robotictheater/robotchicken/main/robotchicken.js");```

That's all there is to it!

Now you are ready to give your creature some personality.

## Programming Your Robot

### Using The Robotic Theater Studio

  *  Using the Chrome webbrowser, goto [https://robotictheater.com/studio](https://robotictheater.com/studio)

-------------------------------

## Built-in Expressions

### Home
  *  ```robotchicken.home()```
     *  Move all servos to their home position.


### Hand
  *  ```robotchicken.hand(shape, moveTime, holdTime, callback)```
     *  **shape** - What shape do you want the hand to form. The availble shapes are: (rock  |  paper  |  scissors)
     *  **moveTime** - The number of milliseconds to take to complete the movement.
     *  **holdTime** - The number of milliseconds to hold the shape before the servos release
     *  **callback** - The function to call when the movement is complete.  This happens after the moveTime and holdTime have elapsed.