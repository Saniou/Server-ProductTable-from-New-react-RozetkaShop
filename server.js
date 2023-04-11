let express = require('express')
let server = express();
let routes = require('./routes/routes')
const cors = require('cors');
server.use(cors({
    origin:'http://localhost:3000'
}))

let mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/est",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DB connected")
})
.catch((err) => {
    console.log("DB connection error:", err)
})

server.get('/', function (req, res) {
    res.send('Hello, World!');
  });

server.use(express.json())
server.use(routes);


server.listen(8000, 
    function check(error){
    if (error) {
        console.log('error')
    } else {
        console.log('start')
    }
});

