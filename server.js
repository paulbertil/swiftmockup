require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json())

const mockupRouter = require('./routes/mockup-api')
app.use('/api/', mockupRouter)

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


const port = 4000;
app.listen(port, () => console.log(`Server running on port ${port}`))