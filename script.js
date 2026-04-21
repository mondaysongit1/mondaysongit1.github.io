
/* Hide all list items on page load */
window.onload = function() {
  hideAllItems();
};

/* Short function to hide everything */
function myFunctionCal() {
  hideAllItems();
  // Optional: Clear the input field text manually if reset doesn't catch it
  document.getElementById("myInput").value = ""; 
}

/* Reusable logic to hide the list */
function hideAllItems() {
  var li = document.getElementById("myUL").getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
    li[i].style.display = "none";
  }
}

/* Your existing search function */
function myFunction() {
  var input = document.getElementById("myInput");
  var filter = input.value.trim().toLowerCase();
  var li = document.getElementById("myUL").getElementsByTagName("li");

  if (filter === "") {
    hideAllItems();
    return;
  }

  // Split input into an array of keywords, removing empty strings (extra spaces)
  var keywords = filter.split(/\s+/);

  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("a")[0];
    
    // Normalize text: remove accents and convert to lowercase
    var text = a.textContent || a.innerText;
    var normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    // Check if EVERY keyword is present in the text
    var match = keywords.every(function(kw) {
      var normalizedKW = kw.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return normalizedText.indexOf(normalizedKW) > -1;
    });

    li[i].style.display = match ? "" : "none";
  }
}
