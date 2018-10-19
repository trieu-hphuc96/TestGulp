var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;

// ROUTES
// ==============================================

/* route requests for static files to appropriate directory */
app.use('/', express.static(__dirname))

/* other routes defined before catch-all */
app.get('/tables', (req, res) => {
  res.sendFile(__dirname + '/src/tables-dynamic.html')
})

/* final catch-all route to index.html defined last */
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);