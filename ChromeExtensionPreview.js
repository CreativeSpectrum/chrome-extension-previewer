// Listen for the page to fully load
document.addEventListener("DOMContentLoaded", function() {

  // Get the preview element and the code textarea
  var preview = document.getElementById("preview");
  var code = document.getElementById("code");

  // Update the preview with the code in the textarea
  function updatePreview() {
    preview.innerHTML = code.value;
  }

  // Call the updatePreview function on page load
  updatePreview();
});
