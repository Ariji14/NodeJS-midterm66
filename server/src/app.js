let express = require('express')
let bodyParser = require('body-parser')
const que1 = require('./que1');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./route')(app)

app.get('/status', function (req,res){
    res.send('Hello nodejs server')
})

app.get('/hello/:name', function (req,res) {
    console.log('hello - ' + req.params.name)
    res.send('sey hello with ' + req.params.name) 
   })

app.post('/que1', (req, res) => {
  const { x } = req.body; // รับค่า x จาก request body
  if (x === undefined) {
    return res.status(400).json({ error: 'กรุณาระบุค่า x' });
  }

  const result = que1(x);
  return res.json({ result });
});

let port = 8082
app.listen(port, function(){
    console.log('server running on ' + port)
})