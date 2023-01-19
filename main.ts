input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # # . . #
        # # . . #
        # # . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # . . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.showLeds(`
        . # # # #
        # . . . .
        # . . . .
        # . . . .
        . # # # #
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # .
        # . . . #
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # . . #
        # # . . #
        # . # . #
        # . . # #
        # . . # #
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # .
        # . . . #
        # . . . #
        # . . . #
        # # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # .
        . . . . #
        # # # # .
        `)
    basic.showLeds(`
        # . . # .
        # . . # .
        # # # # .
        . . . # .
        . . . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
})
basic.forever(function () {
	
})
