
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/route.js');
// const Model = require('./model/notes.js');


 

const app = express();
const port = 3000;
const corsOption = {
    origin: true,
    credentials: true,
};

app.use(cors(corsOption));
app.use(express.json())

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const DB = 'mongodb+srv://sahil:sahil@cluster-khan.yr8cojh.mongodb.net/mern?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("db connect");
}).catch((err) => {
    console.log('oops not done');
})




app.use('/api', routes);

// Respond to POST request on the root route (/), the application’s home page:
// app.post('/', (req, res) => {
//     const data = new Model({
//         title: req.body.title,
//         description: req.body.description
//     })
//     res.send(data)
// })
//   Respond to a PUT request to the /user route:

// app.put('/user', (req, res) => {
//     res.send('Got a PUT request at /user')
// })
//   Respond to a DELETE request to the /user route:

// app.delete('/user', (req, res) => {
//     res.send('Got a DELETE request at /user')
// })

app.listen(port, () => console.log(`Hello worlds app listening on port ${port}!`))