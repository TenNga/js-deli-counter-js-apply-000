var katzDeliLine = [];
let lineNumb
function takeANumber(katzDeliLine){
   = 1;
  katzDeliLine.push(lineNumb);
  const result = "Welcome, "+ ". You are number" + lineNumb;
  lineNumb += 1;
  
  return result;
} //   ["2","3"]

function nowServing (katzDeliLine) {
  
  const firstPerson = katzDeliLine.shift();
  
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + firstPerson +".";
  }
}

function currentLine (katzDeliLine) {
  
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var result = "The line is currently: " + 1 + ". " + katzDeliLine[0];
    for(var i = 2; i <= katzDeliLine.length; i++) {
       result = result + ", "+ i + ". " + katzDeliLine[i-1] 
    }
    
    return result;
  }
  
}