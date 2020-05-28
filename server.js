const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const uri = "mongodb+srv://Gianluca:Bragraprecia19@giangi-rjfa9.mongodb.net/test?retryWrites=true&w=majority";
const { v4: uuidv4 } = require('uuid');

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to DB');
}).catch((e) => {
  console.log('There was an error:', e);

});

const app = express();
const port = process.env.PORT || 3000;
const Cat = mongoose.model('Cat', { id: String, name: String });
const Employees = mongoose.model('Employees', { name: String, email: String, salary: Number, firedable: Boolean })

app.use(express.static(path.resolve(__dirname, 'build')));

app.post('/mongo/addcat', (req, res) => {
  try {
    const kitty = new Cat({ id: uuidv4(), name: 'Zildjian' });
    kitty.save().then(() => {
      console.log('meow')
      res.status(200).send('Aggiunto gattino!');
    }).catch((error) => {
      console.log(error);
      res.status(400).send('NON aggiunto gattino!');
    });
  } catch (error) {
    console.log(error);

  }

})

app.get('/employees', (req, res) => {
  try {
    Employees.find({}, function (err, users) {
      var userMap = [];

      users.forEach(function (user) {
        userMap.push(user);
      });

      res.send(userMap);
    });
  } catch (error) {
    console.log(error);

  }

})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.info(`Server listening on port ${port}`);
});