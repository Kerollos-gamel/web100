// Function to toggle visibility of an element
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
  
  // Function to handle form submission
  function handleFormSubmission(event) {
    event.preventDefault();
    // You can add your form submission logic here
    const formData = new FormData(event.target);
    // Example: Logging form data to console
    for (const pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  }
  
  // Example: Adding event listeners
  document.addEventListener('DOMContentLoaded', function() {
    // Example: Toggle visibility of a div when a button is clicked
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function() {
      toggleVisibility('toggleDiv');
    });
  
    // Example: Handling form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmission);
  });
  