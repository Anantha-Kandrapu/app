const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/front')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/back')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

const upload2 = multer({ storage: storage2 })

app.post('/upload', upload.single('image'), (req, res) => {
    console.log('Called frontFolder')
    res.send(JSON.stringify({ "status": "uploaded" }));
})

app.post('/upload2', upload2.single('image'), (req, res) => {
    console.log('Called BackFolder');
    res.send(JSON.stringify({ "status": "uploaded" }));
})


app.listen(3000);
console.log('listening on 3000');