const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config');
const port = 8000;

app.use(
    cors(),
    express.json(),
    express.urlencoded({extended: true})
);

require("./routes/pirate.routes")(app);


app.listen(port, () => console.log(`Listening on Port ${port}`));