var Anagram = function(word, checkList) {
  var comparisons = checkList.split(", ");
  var wordLetters = word.split("").sort();
  var legitAnagrams = []

  comparisons.forEach(function(comparison) {

    var comparisonLetters = comparison.split("").sort();
    var isAnagram = true

    comparisonLetters.forEach(function(letter) {

      if (wordLetters.indexOf(letter) === -1) {

        isAnagram = false
      }

    });
    if (isAnagram) {
      legitAnagrams.push(comparison)
    }
  });
  return legitAnagrams.join(", ");
};


$(document).ready(function() {
  $("form#anagram").submit(function(event) {
    var word = $("input#word").val();
    var checklist = $("input#checklist").val();
    var output = Anagram(word, checklist);

    $(".anagrams").text(output);
    $(".word").text(word);

    $("#result").show();

    event.preventDefault();
  });
});
