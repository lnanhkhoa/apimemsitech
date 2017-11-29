const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();



app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/api', function (req, res) {
   stepsCount = Math.random()*100 |0;
   res.send({results:stepsCount});
})