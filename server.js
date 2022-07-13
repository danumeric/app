const express = require('express')
//const serveStatic = require('serve-static')
const path = require('path')


const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));
const history = require('connect-history-api-fallback');//
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);



const app = express()

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});//app.use('/auth', router.push("/auth"))


const port = process.env.PORT || 8080

var server = app.listen(port || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

