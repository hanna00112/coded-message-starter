//console.log("Does this work?");
let btn = document.getElementById("decodeButton");

function translateNumbers(encodedMessage) {
  let decodedMessage = "";
  for (let i = 0; i < encodedMessage.length; i++) {
    if (encodedMessage.charAt(i) == "3") {
      decodedMessage += "w";
    } else if (encodedMessage.charAt(i) == "7") {
      decodedMessage += "l";
    } else {
      decodedMessage += encodedMessage.charAt(i);
    }
  }

  return decodedMessage;
}

function reverseWords(str) {
  // Split the string into an array of individual words
  const wordsArray = str.split(" ");
  // Reverse the order of the words in the array
  const reversedWordsArray = wordsArray.reverse();
  // Join the reversed words back into a single string
  const reversedString = reversedWordsArray.join(" ");

  // Return the new string with the reversed word order
  return reversedString;
}

function shiftCharacters(encodedMessage) {

    let decodedMessage = ""


    for (let i = 0; i < encodedMessage.length; i++) {
        if (encodedMessage.charAt(i) == )
    }
}

btn.addEventListener("click", function () {
  //message that is inputted
  const encodedMessage = document.getElementById("encodedInput").value;
  // calls the function
  const decodedMessage = translateNumbers(encodedMessage);
  const reversedMessage = reverseWords(decodedMessage);
  // calls for the decoded output
  const message = document.getElementById("decodedOutput");
  // adds the decodedMessage to the screen
  message.innerText = reversedMessage;
});
