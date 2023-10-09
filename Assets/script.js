var nameGenerateEl = document.querySelector('#name-generate');
var nameContainerEl = document.querySelector("#card-body");



const url = 'https://baby-names-by-api-ninjas.p.rapidapi.com/v1/babynames';
const options = {
	method: 'GET',
	headers: {
		//'X-RapidAPI-Key': '7cd0ee983emsh30418ed0a8e6e09p13acf1jsna1667b03e552',
		'X-RapidAPI-Host': 'baby-names-by-api-ninjas.p.rapidapi.com'
	}
};
var buttonClickHandler = function (event) {
  event.preventDefault();
      getApi(url, options);
};



    function getApi(requestUrl, options){
    
        fetch(requestUrl, options)
        .then(function (response){
            return response.json();
        })
        .then(function(data){
           // console.log(data);
           displayNames(data);
        });
    };

    var displayNames = function(data){
      nameContainerEl.textContent= "";  

      var namesEl = document.createElement("span");
      namesEl.textContent = "Possible Names: " + data;
      namesEl.classList = "list-group-item"
      nameContainerEl.appendChild(namesEl);
   
    };
    //getApi(url, options);
    nameGenerateEl.addEventListener('click', buttonClickHandler);


    //const infoElement = document.createElement('results');
    //infoElement.innerHTML = `<h3>${symptomName}</h3>`;
    //medicalInfo.appendChild(infoElement);

//document.getElementById('symptom-form').addEventListener('submit', function(event) {
  //event.preventDefault(); // Prevent page from refreshing

 // const formElements = document.forms['symptom-form'].elements['symptoms'];
  //const selectedSymptoms = Array.from(formElements)
    //.filter((checkbox) => checkbox.checked)
    //.map((checkbox) => checkbox.value);

  // Call the API to get medical information based on selected symptoms
  //fetch(`${apiUrl}?symptom=${selectedSymptoms.join(',')}`,options)
    //.then(response => response.json())
   // .then(data => {
      // Display the medical information on the page
     // displayMedicalInfo(data);
      //  console.log(response);
    //})
    //.catch(error => {
   //  console.error('Error:', error);
   // });
//});

//function displayMedicalInfo(data) {
 //const medicalInfo = document.getElementById('medicalInfo');
  // Clear previous medical information
 // medicalInfo.innerHTML = '';

  // Loop through the retrieved data and display it on the page
  //data.forEach((info) => {
   // const symptomName = info.name;
   // const symptomDescription = info.description;

   // const infoElement = document.createElement('results');
    //infoElement.innerHTML = `<h3>${symptomName}</h3><p>${symptomDescription}</p>`;
    //medicalInfo.appendChild(infoElement);
  //});
//}
