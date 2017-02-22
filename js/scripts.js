$(function() {
  var resultArray = [];
  var pigLatin = function(userInput) {
    var words = userInput.split(" ");
    words.forEach(function(currentWord) {
      console.log(currentWord);
      // debugger;
      if (consonant(currentWord.charAt(0))){
        //consonants
        for (var i = 0; i < currentWord.length; i++) {
          //for every character
          var firstLetter = currentWord.slice(0, 1);
          //if first is still consonant

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
        var result = currentWord.concat("ay");
      } else {
        var result = currentWord.concat("ay");
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

  $("form").submit(function(){
    event.preventDefault();
    var userInput = $("#text-input").val();
    var result = pigLatin(userInput);

  });
});
