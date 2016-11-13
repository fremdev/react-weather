const express = require('express');

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  if(req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect(`http://${req.hostname}${req.url}`);
  }
});

const app = express();

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
})
