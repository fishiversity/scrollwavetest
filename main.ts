input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        wave.scrollImage(1, 200)
    }
    basic.clearScreen()
})
let wave: Image = null
wave = images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . # . . . # . . .
    . # . # . # . # . .
    # . . . # . . . # #
    `)
