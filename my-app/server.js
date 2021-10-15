const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(express.json());

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'dist/uploads')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname)
  }
})

var upload = multer({ storage: storage }).single('file');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      res.status(500).send(err);
    } else if (err) {
      res.status(500).send(err);
    } 
    res.status(200).send(req.file.path);
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})