const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const uri = "mongodb+srv://Gianluca:Bragraprecia19@giangi-rjfa9.mongodb.net/test?retryWrites=true&w=majority";
const { v4: uuidv4 } = require('uuid');
var faker = require('faker');

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to DB');
}).catch((e) => {
  console.log('There was an error:', e);

});

const app = express();
const port = process.env.PORT || 3000;
const Cat = mongoose.model('Cat', { id: String, name: String });
const Employees = mongoose.model('Employees', { _id: mongoose.Types.ObjectId, name: String, email: String, salary: Number, firedable: Boolean })

//MIDDLEWARE
app.use(express.static(path.resolve(__dirname, 'build')));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

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
      if (users) {
        users.forEach(function (user) {
          userMap.push(user);
        });
      }

      res.send(userMap);
    });
  } catch (error) {
    console.log(error);

  }

})

app.post('/employees/update', (req, res) => {
  try {

    //console.log('impiegato da aggiornare: ', req.body);
    const user = req.body;
    console.log('id', user._id, 'nome: ', user.name);
    Employees.findById({ _id: user._id }, (err, risp) => {
      //console.log(risp);
      risp.name = user.name;
      risp.email = user.email;
      risp.salary = user.salary;
      risp.firedable = user.firedable;

      risp.save((resp) => {
        console.log(resp);
        res.status(200).send(user);
      })
    })
  } catch (error) {
    console.log(error);

  }

})

app.post('/employees/generaterandom/:number', (req, res) => {
  try {

    console.log('elementi da inserire: ', req.params.number);
    const elements = req.params.number;
    const finalArray = [];
    let i = 0;
    for (i = 0; i < elements; i++) {
      finalArray.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        salary: faker.finance.amount(),
        firedable: faker.random.boolean()
      });
    }

    Employees.insertMany(finalArray, (error, docs) => {
      if (error)
        console.log(error);

    })

    res.status(200).send(finalArray);

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