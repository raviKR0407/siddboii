var request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=kBCbk9g3LgpOEOohW7Avy61RKiPTGaHc&tag=kitten');

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);
	
	var gifURL = parsedData.data.images.original.url;
	var gif = document.createElement('img');
	gif.setAttribute('src',gifURL);
	document.body.appendChild(gif);
};

request.send();
