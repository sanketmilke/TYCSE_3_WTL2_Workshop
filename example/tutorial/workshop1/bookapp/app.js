
// require("./app/routes/tutorial.routes.js")(app);
const express = require("express");
const cors = require("cors");
const app = express();
//this is still unnecessary but kept for the future. 
var corsOptions = {
  origin: "http://localhost:8081"
};

require("./routes/book.routes.js")(app);
app.use(cors(corsOptions));

	// parse requests of content-type - application/json
	app.use(express.json());

	// parse requests of content-type - application/x-www-form-urlencoded
	//extended:true, indicates the request body can be of any type
	app.use(express.urlencoded({ extended: true }));
	// simple route
	app.get("/", (req, res) => {
  		res.json({ message: "Welcome to book application." });
	});
	const PORT = process.env.PORT || 8080;
	app.listen(PORT, () => {
  		console.log(`Server is running on port ${PORT}.`);
	});

