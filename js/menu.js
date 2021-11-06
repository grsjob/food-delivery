const restourant = 'tanuki';

const renderItems = (date) => {
	date.forEach((elem) => {
		console.log(elem);
	});
}

fetch(`./db/${restourant}.json`)

	.then((Response) => Response.json())
	.then((date) => {
		renderItems(date);
	})

	.catch((error) => {
		console.log(error);
	})
