radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    line = serial.readLine()
    radio.sendString(line)
})
let line = ""
serial.redirectToUSB()
radio.setGroup(33)
