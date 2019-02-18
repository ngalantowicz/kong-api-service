import express from 'express';
import bodyParse from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParse.json());

app.use('/api/non-auth', (req, res) => {
  res.status(200).json({status: 200, data: 'Ding Dong Kong. Welcome Non-Secret Member'});
});

app.use('/api/auth',(req, res) => {
  res.status(200).json({status: 200, data: 'Ding Dong Kong. Welcome Secret Member'});
});

app.listen(8041, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Port is 8041');
  }
});

module.export = app;
