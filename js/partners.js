const renderItems = (date) => {
	console.log(date);

}

fetch('https://food-delivery-65da2-default-rtdb.firebaseio.com/db/partners.json')
	.then((Response) => Response.json())
	.then((date) => {
		renderItems(date);
	})
	.catch((error) => {
		console.log(error);
	})


