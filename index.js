var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    console.log("Welcome " + name + ". You are number " + katzDeliLine.length + " in line.")
    return katzDeliLine.length
}

function nowServing(katzDeliLine) {
    if(katzDeliLine.length > 0) {
        var name = katzDeliLine.shift()
        return name
    } else {
        return "There is nobody waiting to be served!"
    }
}

function currentLine(katzDeliLine) {

    if(katzDeliLine.length > 0) {
        var str = "The line is currently:"

        for(var i=0; i<katzDeliLine.length; i++) {
            str += (i + 1) + ". " + katzDeliLine[i]

            if(i <katzDeliLine.length -1)
                str += ", "
        }

        return str
    } else {
        return "The line is currently empty."
    }

}
