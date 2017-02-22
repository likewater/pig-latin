$(function() {
  var pigLatin = function(userInput) {

    // debugger;
    if (consonant(userInput.charAt(0))){
      //consonants
      for (var i = 0; i < userInput.length; i++) {
        //for every character
        var firstLetter = userInput.slice(0, 1);
        //if first is still consonant
        if (consonant(firstLetter)) {
          userInput = userInput.slice(1, (userInput.length));
          userInput = userInput.concat(firstLetter);
        }
      }
      var result = userInput.concat("ay")
      return result;
      alert(result);
    } else {
      result = userInput.concat("ay");
      return result;
    }
  }
  var consonant = function(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      return false;
    } else {
      return true;
    }
  }
  // var consonant = function(letter){
  //   if ((letter === "a")){
  //     return false;
  //   } else if (letter === "e") {
  //     return false;
  //   } else if (letter === "i") {
  //     return false;
  //   } else if (letter === "o"){
  //     return false;
  //   } else if (letter === "u") {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }


  $("form").submit(function(){
    event.preventDefault();
    var userInput = $("#text-input").val();
    var result = pigLatin(userInput);
    alert(result);
  });
});
