input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
    }
})
