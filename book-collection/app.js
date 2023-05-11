const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send("Hello Express JS");
})

app.listen(8000, () => console.log("Server is listening at 8000"));