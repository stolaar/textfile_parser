const express = require("express");
const app = express();

const port = process.env.PORT_NUMBER || 5000;
const bodyParser = require("body-parser");
const filesRouter = require("./routes/api/files");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.raw());

app.use("/api/files", filesRouter);

app.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        return res.send(err);
    }
})

app.listen(port, () => console.log("Listening to port " + port))