radio.setGroup(69)
joystickbit.initJoystickBit()
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendValue("front", 1)
    } else {
        radio.sendValue("front", 0)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendValue("back", 1)
    } else {
        radio.sendValue("back", 0)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendValue("stop", 1)
    } else {
        radio.sendValue("stop", 0)
    }
})
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 200) {
        radio.sendValue("left", 1)
    } else {
        radio.sendValue("left", 0)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 700) {
        radio.sendValue("right", 1)
    } else {
        radio.sendValue("right", 0)
    }
})
