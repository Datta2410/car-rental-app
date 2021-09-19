const mongoose = require("mongoose");
const Car = require("../models/car");

exports.createCar = (req, res, next) => {
    console.log('hi')
    let urls = []
    req.body.urls.forEach(url => {
        urls.push({
            _id:mongoose.Types.ObjectId(),
            url: url
        })
    });
    const car = new Car({
        _id: mongoose.Types.ObjectId(),
        carName: req.body.carName,
        status: req.body.status || "Available",
        type: req.body.type,
        odometer: req.body.odometer,
        urls: urls
      });
      car
        .save()
        .then((response) => {
          res.status(200).json({
            message: "Car created!",
            data: response,
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
}

exports.getallCars = (req, res, next) => {
    Car.find()
        .then((result) => res.status(201).json(result))
        .catch(err => {
            res.status(500).json({
                error: err,
              })
        })
}

exports.getAvailCars = (req, res, next) => {
    Car.find({status: "Available"})
        .then((result) => res.status(201).json(result))
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })
}

exports.updateAvail = (req, res, next) => {
    Car.findByIdAndUpdate(req.body._id, {status: "Unavailable"})
        .then((result) => res.status(201).json(result))
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })
}