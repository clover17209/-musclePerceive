let 값 = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("근육을 측정")
})
function 변수에_저장시리얼_차트데이터LED차트 () {
    값 = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("e", 값)
    led.plotBarGraph(
    값,
    1023
    )
}
basic.forever(function () {
    변수에_저장시리얼_차트데이터LED차트()
})
