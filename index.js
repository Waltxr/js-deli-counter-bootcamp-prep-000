var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing() {
  return katzDeliLine[0];
  katzDeliLine = katzDeliLine.slice(1, katzDeliLine.length - 1);
}
