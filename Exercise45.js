"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, options) {
    return Object.assign({ manufacturer,
        model }, options);
}
const carInfo = createCar('Toyota', 'Camry', { color: 'Blue', optionalFeature: 'Sunroof' });
console.log('Car Information:');
console.log(carInfo);
