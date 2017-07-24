const fs = require('fs');
(function () {
  // const cats = require('./models/cats.json');
  // const user = require('./models/user.json');


  function Model(modelName) {
    this.url = './models/' + modelName;

    this.find = function (id) {
      if (!id) {
        return require('./models/' + modelName);
      } else {
        let promise = new Promise(function (resolve, reject) {
          try {
            fs.readFile('./models/cats.json', function (err, data) {
              var result;
              var cats = JSON.parse(data);
              // console.log('all cats ', cats);
              // console.log('ID =  ', id);
              cats.forEach(function (el) {
                if (el.id === id) {
                  resolve(el);
                }
              })
            })
          } catch (err) {
            reject(err);
          }
        })//new Promise
        return promise;
/*
        promise.then(function (data) {
          console.log('data = ', data)
          res.status(200).send(data);
        })*/
      } // else
    }//find(id)function (id)

    this.add = function (newCat) {
      console.log('newCat = ', newCat);
      let id;


      // fs.readFile(url + '.json', function (err, data) {
      fs.readFile('./models/cats.json', function (err, data) {
        let cats = JSON.parse(data);
        id = cats[cats.length-1].id+1;
        newCat.id = id;
        console.log('cats', id);
        console.log('all cats before', cats);
        cats.push(newCat);
        console.log('all cats after', cats);
        fs.writeFile('./models/cats.json', JSON.stringify(cats, '', 4), function (err) {
          if (err) {
            console.log('ERROR is ', err);
          }
        })
      })
    } //this.add = function (id) {

    this.update = function (updateData) {
       console.log('Data = ', updateData);

      fs.readFile('./models/cats.json', function (err, data) {
        var cats = JSON.parse(data);
        console.log('all cats before', cats);
        let updateID = updateData.id;
        console.log('updateID = ', updateID);
        cats.forEach(function (el) {
          if (el.id === updateID) {
            for (key in el) {
              el[key] = updateData[key];
            }
          }
        })

        console.log('all cats after', cats);
        fs.writeFile('./models/cats.json', JSON.stringify(cats, '', 4), function (err) {
          if (err) {
            console.log('ERROR is ', err);
          }
        })
      })

    } //this.update = function (updateData)

    this.delete = function (deleteID) {
      console.log('updateData = ', deleteID);
      fs.readFile('./models/cats.json', function (err, data) {
        var cats = JSON.parse(data);
        console.log('all cats before', cats);
        let temp;
        cats.forEach(function (el,index) {
          if (el.id == deleteID) {
            console.log('el = ', el);
            cats.splice(index,1);
          }
        })
        console.log('all cats after', cats);
        fs.writeFile('./models/cats.json', JSON.stringify(cats, '', 4), function (err) {
          if (err) {
            console.log('ERROR is ', err);
          }
        })
      })
    } //this.update = function (updateData)

  };//  function Model(modelName) {


  module.exports = {
    model: function (modelName) {
      return new Model(modelName);
    }


    // Cat.find() возвращает все записи
    //   Cat.find(id: number) возвращает запись с указанным id
    // Cat.add(model: Cat) добавляет запись в коллекцию
    // Cat.update(model: Cat) находит запись по id модели и перезаписывает ее
    // Cat.remove(id: number) удаляет запись по id


  }
})();

