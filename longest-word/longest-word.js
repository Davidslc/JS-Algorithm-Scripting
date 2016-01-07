function findLongestWord(str) {
  var word = str.split(' '); // Create an array of the words.
  var longest = 0; // Start the word comparison at zero.
  
  for (var i = 0; i < word.length; i++) {
    var removeNonAlpha = word[i].replace(/[_\W]/g, ''); // Remove non-alpha characters that may to connected to a word.
    if (removeNonAlpha.length > longest) { // Check to see if the current word is bigger than the last.
      longest = removeNonAlpha.length; // If it is, replace it with the current length.
      longestWord = removeNonAlpha;
    }
  }
  return "The longest word is '" + longestWord + ",' which is " + longest + " characters."; // At the end of the 'for' loop, the 'longest' variable will have the length of the longest word.
}

function getOption() {
    var obj = document.getElementById("mySelect").value;
    var word = findLongestWord(obj);
    document.getElementById("demo").innerHTML = word;
}

