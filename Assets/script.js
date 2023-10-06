const apiKey = '2adeaa2be6msh80980fcbeb1b49ap1eca83jsndd1d02df27c5';
const apiUrl = 'https://diagnosis.p.rapidapi.com/api/DDxItems/GetTests';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2adeaa2be6msh80980fcbeb1b49ap1eca83jsndd1d02df27c5',
		'X-RapidAPI-Host': 'diagnosis.p.rapidapi.com'
	}
};

document.getElementById('symptom-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page from refreshing

  const formElements = document.forms['symptom-form'].elements['symptoms'];
  const selectedSymptoms = Array.from(formElements)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  // Call the API to get medical information based on selected symptoms
  fetch(`${apiUrl}?symptom=${selectedSymptoms.join(',')}`,options)
    .then(response => response.json())
    .then(data => {
      // Display the medical information on the page
      displayMedicalInfo(data);
        console.log(response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

function displayMedicalInfo(data) {
  const medicalInfo = document.getElementById('medicalInfo');
  // Clear previous medical information
  medicalInfo.innerHTML = '';

  // Loop through the retrieved data and display it on the page
  data.forEach((info) => {
    const symptomName = info.name;
    const symptomDescription = info.description;

    const infoElement = document.createElement('results');
    infoElement.innerHTML = `<h3>${symptomName}</h3><p>${symptomDescription}</p>`;
    medicalInfo.appendChild(infoElement);
  });
}