const apiKey = '2adeaa2be6msh80980fcbeb1b49ap1eca83jsndd1d02df27c5';
const apiUrl = 'rapidapi.com';

const url = 'https://diagnosis.p.rapidapi.com/api/DDxItems/GetTests?AuthenticationID=' + apiKey;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2adeaa2be6msh80980fcbeb1b49ap1eca83jsndd1d02df27c5',
		'X-RapidAPI-Host': 'diagnosis.p.rapidapi.com'
	}
};

//Change to .then and get fetch to work //
try {
	const response = fetch(url, options);
	const result =  response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}






document.addEventListener('DOMContentLoaded', function() {
   
    var form = document.getElementById('symptom-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      
      var checkboxes = form.querySelectorAll('input[name="symptoms"]:checked');
  
      
      checkboxes.forEach(function(checkbox) {
        console.log(checkbox.value);
      });
    });
  });