interface Car {
    manufacturer: string;
    model: string;
    color?: string;
    optionalFeature?: string;
  }
  
  function createCar(manufacturer: string, model: string, options?: { color?: string, optionalFeature?: string }): Car {
    return {
      manufacturer,
      model,
      ...options
    };
  }
  
  const carInfo: Car = createCar('Toyota', 'Camry', { color: 'Blue', optionalFeature: 'Sunroof' });
  
  console.log('Car Information:');
  console.log(carInfo);
export{};  