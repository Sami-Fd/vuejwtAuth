const fs = require('fs');
const path = require('path');

module.exports.cars_get = (req, res) => {
    try {
        const cars = fs.readFileSync(path.resolve("./data/cars.json"), "utf8");
        res.send(cars);
    } catch (error) {
        console.log(error);
        res.send('error');
    }
}