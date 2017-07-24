const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const randtoken = require('rand-token');
const fs = require('fs');
const my_db = require('./my_db.js');

const cors = require('cors');

let Cat = my_db.model('cats');
let User = my_db.model('user');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/auth', (req, res, next) => {
  let newToken;
  let user = User.find();
  // console.log('work');
  // console.log(' req.body ',req.body);
  // console.log('req.header ', req.header('Authentication'));

  checkToken(req, user);
  if (req.user) {
    console.log(' req.user ', req.user);
  } else {
    console.log(' no req.user ');
  }
console.log('USer ', req.body);
// console.log('USer ', User.find());
if (req.body.user_token) {
  user.forEach(function (el) {
    if (req.body.user_token === el.user_token) {
      console.log(el);
      res.status(200).send(el);
    } //if
  }) // forEach
  res.status(404).send('Not found user');
} else {

  user.forEach(function (el) {
    if (req.body.username === el.username) {
      if (req.body.password === el.password) {
        newToken = randtoken.generate(32);
        console.log('newToken = ', newToken);

        fs.readFile('./models/user.json', function (err, data) {
          var users = JSON.parse(data);
          // console.log('users = ', el);
          users[0].user_token = newToken;
           // el.user_token = newToken;
          fs.writeFile('./models/user.json', JSON.stringify(users, '', 4), function (err) {
            if (err) {
              console.log('ERROR is ', err);
            } else {
              // res.header('Authentication') = newToken;
              res.status(200).send(newToken);
            }
          });
        });//fs.readFile
      }
    }
  })// forEach

  // console.log('Not found user');
};
}); //app.post('/auth'

app.get('/cats', (req, res, next) => {
  console.log('work get /cats');
  let test = Cat.find();
  res.status(200).send(Cat.find());
}) // app.get('/cats', (req, res, next)




app.get('/cats/:id', (req, res, next) => {
  console.log('work get /cats/:id');
  let splitArr = req.url.split('/');
  let id = splitArr[splitArr.length - 1];
  // let id = getID(req);
  let result = Cat.find(id);
  console.log('result = ',result)

result.then(function (data) {
  console.log('data333 = ', data);
  res.status(200).send(data);
})
}) // app.get('/cats', (req, res, next)





app.post('/cats', (req, res, next) => {
// console.log(req.body);
  let newCatObj = req.body;
  Cat.add(newCatObj);
  res.status(200).send('New cat was added');
})

app.put('/cats/:id', (req, res, next) => {
// console.log(req.body);
  let url = req.url;
  let id = getID(req);
  getCat(id, req);

  req.cat.then(function (data) {
    let catUpdate = req.body;
    // console.log('catUpdate = ', catUpdate);
    let cats = Cat.update(catUpdate);
    console.log('data333 = ', cats);
    res.status(200).send(cats);
  }).catch(function (err) {
    res.status(500).send(err);
    console.log(err);
  })
})

app.delete('/cats/:id', (req, res, next) => {
  // let splitArr = req.url.split('/');
  // let id = splitArr[splitArr.length - 1];
  let id = getID(req);
  console.log('id = ', id);
  Cat.delete(id);
  res.status(200).send('The cat was deleted');
})

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
  next(err);
});
});

let getID = (req) => {
  let splitArr = req.url.split('/');
  return id = splitArr[splitArr.length - 1];
}


let getCat = (ID, req) => {
  req.cat = Cat.find(ID);
  console.log('req.cat =', req.cat);
} //let getCat = (ID, req) =>


let checkToken = (req,users) => {
  console.log('req.body = ', req.body)
  if(req.body.user_token){
    users.forEach(function (el) {
      if (req.header('Authentication') == el.user_token){
        req.user = el;
      }
    })
  }else {
    console.log('no req.body.token ')
  }


}

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
