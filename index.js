const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('I am starting to learn node js from today???!!!')
})

// app.get('/users', (req, res) => {
//     res.send('Hello from users')
// })

const users = [
    { id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone: '017888888'},
    { id: 2, name: 'tabana', email: 'tabana@gmail.com', phone: '017888888'},
    { id: 3, name: 'babana', email: 'babana@gmail.com', phone: '017888888'},
    { id: 4, name: 'labana', email: 'labana@gmail.com', phone: '017888888'},
    { id: 5, name: 'shucona', email: 'shucona@gmail.com', phone: '017888888'},
    { id: 6, name: 'babita', email: 'babita@gmail.com', phone: '017888888'},
    { id: 7, name: 'latina', email: 'latina@gmail.com', phone: '017888888'},
    { id: 8, name: 'lamina', email: 'lamima@gmail.com', phone: '017888888'},
    { id: 9, name: 'moinina', email: 'mounina@gmail.com', phone: '017888888'}
]

app.get('/users', (req, res) => {
    // console.log('query', req.query); 
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched) 
    }
    else {
    res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    // console.log(req.params);
    const id = req.params.id;
    // const user = users[id];
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('listening to port', port)
})