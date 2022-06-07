const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'hello there' }));

// define our routes
app.use('/api/client', require('./routes/client'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started on port 5000'));
