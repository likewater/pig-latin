$(function() {
  var resultArray = [];
  var punctuation = "";
  var pigLatin = function(userInput) {
    var words = userInput.split(" ");
    words.forEach(function(currentWord) {
      console.log(currentWord);
      // debugger;
      if (consonant(currentWord.charAt(0))){
        //consonants
        for (var i = 0; i <= currentWord.length; i++) {
          //for every character
          var firstLetter = currentWord.slice(0, 1);
          //if first is still consonant

          // debugger;
          if (punctuationCheck(currentWord.charAt(currentWord.length - 1))) {
            punctuation = currentWord.charAt(currentWord.length - 1);
            currentWord = currentWord.slice(0, currentWord.length - 1);
          }

          if (qCheck(firstLetter) && (currentWord.charAt(1) === "u")) {
            currentWord = currentWord.slice(2, currentWord.length);
            currentWord = currentWord.concat(firstLetter + "u");
          } else if (consonant(firstLetter)) {
            currentWord = currentWord.slice(1, currentWord.length);
            currentWord = currentWord.concat(firstLetter);
          } else {
            //do nothing
          }
        }
        var result = currentWord.concat("ay" + punctuation);
      } else {
        var result = currentWord.concat("ay" + punctuation);
      }
      resultArray.push(result);
    });

    //join the arrray!!


    console.log(resultArray);
    // console.log(words);

  }
  var consonant = function(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      return false;
    } else {
      return true;
    }
  }
  var qCheck = function(letter){
    if (letter === "q"){
      return true;
    } else {
      return false;
    }
  }
  var punctuationCheck = function(letter) {
    if (letter === "." || letter === "," || letter === "!" || letter === "?" || letter === ":" || letter === ";") {
      return true;
    } else {
      return false;
    }
  }

  $("form").submit(function(){
    event.preventDefault();
    var userInput = $("#text-input").val();
    var result = pigLatin(userInput);

  });
});
