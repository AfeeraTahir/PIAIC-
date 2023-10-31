"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function order_sandwich(...items) {
    console.log('Sandwich Summary:');
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log('Enjoy your sandwich!\n');
}
// Calling the function with different numbers of arguments
order_sandwich('Lettuce', 'Tomato', 'Cheese', 'Ham');
order_sandwich('Bacon', 'Egg', 'Sausage');
order_sandwich('Turkey', 'Swiss cheese', 'Lettuce', 'Mustard');
