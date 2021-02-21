import express from "express";
import data from "./data.js"

const app = express();
const port  = process.env.PORT || 5000;
app.get('/api/getProducts', (req, res) => {
    res.send(data);
})

app.get('/', (req, res) => {
    res.send("Serve is ready")
})
app.listen(port, () => {
    console.log(`Server at http:localhost:${port}`)
})