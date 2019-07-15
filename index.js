/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, you might want to read it really slow, don't worry be happy
in every line there may be trouble, but if you worry you make it double, don't worry, be happy
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, be happy
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just API…
I need this code, just don't know where, perhaps should make some middleware, don't worry, be happy

Go code!
*/

const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h2>Welcome to Lambda Schools</h2>');
});

app.use('/api', routes);

app.all('*', (req, res) => {
  res.status(404).send({
    message: 'The resource you are looking for does not exist',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
