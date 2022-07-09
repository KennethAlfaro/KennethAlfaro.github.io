function getData(){
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '0698d44561msh6d12b1adf980ca5p13fe73jsnd800ef5c0e9f',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
	.then(response => response.json())
	.then(response => printText(response))
	.catch(err => console.error(err));
}

function printText(data){
	const text = document.getElementById("fact");
	text.innerHTML = data.value;
}