var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing() {
  if (katzDeliLine > 0 ) {
    var serving = katzDeliLine[0]
    katzDeliLine.shift(0)
  } else {
    return "There is nobody waiting to be served."
  }
}
