const scriptURL = 'https://script.google.com/macros/s/AKfycbxb9VSKIOJlBJQtkpAIFqYOH5ihseffltBMTc1mqI4qr2vlEbcsmsQKISGRoEaTrl_Upw/exec';
const form = document.forms['contact-form'];

// Function to get the user's IP address
function getUserIPAddress() {
  return fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => data.ip)
    .catch(error => {
      console.error('Error getting IP address:', error.message);
      return null;
    });
}

// Event listener when the form is submitted
form.addEventListener('submit', e => {
  e.preventDefault();
  // Get user's IP address
  getUserIPAddress().then(ip => {
    // Create FormData object with IP address and form data
    const formData = new FormData(form);
    formData.append('ip_address', ip); // Add IP address to form data
    // Send form data to Google Sheets script URL
    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        if (response.ok) {
          alert("Thank you! Your form is submitted successfully.");
          window.location.reload();
        } else {
          throw new Error('Failed to submit form');
        }
      })
      .catch(error => console.error('Error!', error.message));
  });
});

// Execute the code to get user's IP address when the page loads
window.addEventListener('load', () => {
  getUserIPAddress().then(ip => {
    console.log('User IP address:', ip);
    // You can optionally do something with the IP address here
  });
});
