# Robot Chicken

Robot Chicken is an easy to build animatronic creature that contains 7 servos which allow you to give your creature a lot of expression and personality. 

## GETTING STARTED

### Robot Construction
You can find the build instructions over on Make:Projects

### Espruino Code
The robotchicken module has everything you need. All you have to do is assign it to a variable called ```robotchicken```.

**Include it from your Espruino IDE's local projects folder:**

You can download the robotchicken.js file from this repo and include it in your Espruino IDE project, then include it in your program like so:

```const* robotchicken = require("robotchicken");```

-or-

**Include it directly from the github repo:**

```const robotchicken = require("https://raw.githubusercontent.com/robotictheater/robotchicken/main/robotchicken.js");```

That's all there is to it!

Now you are ready to give your creature some personality.

------------------------------

## Programming Your Robot

### Prerequisites

 1. You will need a recent version of the Chrome web browser
 2. Windows fully supports Web Bluetooth, if you are on a Mac or Linux machine, then follow these instructions: [http://www.espruino.com/Quick+Start+BLE#with-web-bluetooth](http://www.espruino.com/Quick+Start+BLE#with-web-bluetooth)

### Using The Robotic Theater Studio  (RTStudio)

RTStudio allows you to program your creature via your web browser using a block programming language similar to Scratch. 

  *  Using the **Chrome** web browser, goto [https://robotictheater.com/studio](https://robotictheater.com/studio), add your blocks and click "Run" to bring your creation to life. 
  *  You can also download some sample applications from the **/studio** folder in this repo.
     *  Once downloaded you can import them into your "Program Library" in RTStudio


### Using The Espruino IDE

-------------------------------

## Built-in Expressions

Each expression is also available in the RTStudio under the "Robot Chicken" category.

### Home
  *  ```robotchicken.home()```
     *  Move all servos to their home position.


### Hand
  *  ```robotchicken.hand(shape, moveTime, holdTime, callback)```
     *  **shape** - What shape do you want the hand to form. The availble shapes are: (rock  |  paper  |  scissors)
     *  **moveTime** - The number of milliseconds to take to complete the movement.
     *  **holdTime** - The number of milliseconds to hold the shape before the servos release
     *  **callback** - The function to call when the movement is complete.  This happens after the moveTime and holdTime have elapsed.