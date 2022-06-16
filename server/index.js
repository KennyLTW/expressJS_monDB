import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//import usersRoutes from '../routes/api/users.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

//app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    console.log('index page');
    res.send('index page "/"');
});

//HTTP GET
app.get('/about', (req, res) => {
    console.log('about page');
    res.send('about page "/about"');
});

app.get('/getInbox', (req, res) => {
    res.json({ message: "Hello from server!" });
});

//HTTP POST
app.post('/', (req, res) => {
    
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('port: ' + port));



