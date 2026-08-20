
/* Hide all list items on page load */
window.onload = function() {
  hideAllItems();
};

/* Function to Clear the input field text */
function myFunctionCal() {
  hideAllItems(); document.getElementById("myInput").value = ""; 
}

/* function to hide the list */
function hideAllItems() {
  var li = document.getElementById("myUL").getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
    li[i].style.display = "none";
  }
}







/* Logic to search and filter charts */
function myFunction() {
  var input = document.getElementById("myInput");
  var filter = input.value.trim().toLowerCase();
  var li = document.getElementById("myUL").getElementsByTagName("li");

  if (filter === "") {
    hideAllItems();
    return;
  }

  // Split input into an array of keywords, removing empty strings
  var searchTerms = filter.split(/\s+/);

  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("a")[0];
    
    // Normalize text: remove accents and convert to lowercase
    var text = a.textContent || a.innerText;
    var normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    // Split text into individual words
    var textWords = normalizedText.split(/\s+/);

    // Check if search terms match in EXACT order AND count
    var match = false;
    
    // Only proceed if text has at least as many words as search terms
    if (textWords.length >= searchTerms.length) {
      // Check each possible starting position in the text
      for (var j = 0; j <= textWords.length - searchTerms.length; j++) {
        var isMatch = true;
        
        // Check if search terms match at this position in order
        for (var k = 0; k < searchTerms.length; k++) {
          var normalizedKW = searchTerms[k].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          
          // Compare normalized words
          if (textWords[j + k] !== normalizedKW) {
            isMatch = false;
            break;
          }
        }
        
        if (isMatch) {
          match = true;
          break;
        }
      }
    }

    // Display or hide the item
    li[i].style.display = match ? "" : "none";
  }
}

// Helper function to hide all items (called when input is empty)
function hideAllItems() {
  var li = document.getElementById("myUL").getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
    li[i].style.display = "none";
  }
}