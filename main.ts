input.onGesture(Gesture.Shake, function () {
    N += 1
    Display.show(N)
    basic.pause(100)
})
let N = 0
let Display: grove.TM1637 = null
Display = grove.createDisplay(DigitalPin.P0, DigitalPin.P14)
basic.forever(function () {
	
})
