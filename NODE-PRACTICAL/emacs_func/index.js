const {get} = require('https')

get('https://www.google.com', (res) => {
	res.on ('data', (chunck) => {
		console.log(`data chunck ${chunck}`);
	});

	res.on("end", () => {
    console.log("no more data");
  });
})
