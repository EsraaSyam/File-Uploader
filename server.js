const express = require('express');
const routes = require('./routes/fileRoute');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.use('/', routes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
