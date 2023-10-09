var nameGenerateEl = document.querySelector("#name-generate");
var nameContainerEl = document.querySelector("#generateName");

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
            //console.log(data);
           displayNames(data);
        });
    };

    var displayNames = function(data){
      nameContainerEl.textContent="";  
      var namesEl = document.createElement("span");
      namesEl.textContent = "Possible Names: " + data;
      nameContainerEl.appendChild(namesEl);
    };
  
    nameGenerateEl.addEventListener('click', buttonClickHandler);


var nameGenerateEl = document.querySelector("#name-generate");
var nameContainerEl = document.querySelector("#generateName");

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
            //console.log(data);
           displayNames(data);
        });
    };

    var displayNames = function(data){
      nameContainerEl.textContent="";  
      var namesEl = document.createElement("span");
      namesEl.textContent = "Possible Names: " + data;
      nameContainerEl.appendChild(namesEl);
    };
  
    nameGenerateEl.addEventListener('click', buttonClickHandler);
