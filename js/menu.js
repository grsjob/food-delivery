const restourant = 'tanuki';

const renderItems = (date) => {

	console.log(date);

}

fetch(`./db/${restourant}.json`)

	.then((Response) => Response.json())
	.then((date) => {
		renderItems(date);
	})

	.catch((error) => {
		console.log(error);
	})
