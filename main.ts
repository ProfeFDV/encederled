input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1000)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
})
led.enable(false)
pins.digitalWritePin(DigitalPin.P2, 0)
