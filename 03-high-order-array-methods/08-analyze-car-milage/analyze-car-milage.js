const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
    { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
    { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
    { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
  ];

function analyzeCarMileage(cars) {
    // Get the total mileage;
  const totalMileage = cars.reduce((acc, car) => acc + car.mileage , 0);

  // Get the average mileage
  const averageMileage = totalMileage / cars.length;

  //  Get the height milage of the car
  highestMileageCar = cars.reduce((acc, car) => (car.mileage > acc.mileage ? car : acc), cars[0]);  
  
  //  Get the lowest milage of the car
  lowestMileageCar = cars.reduce((acc, car) => (car.mileage < acc.mileage ? car : acc), cars[0]);  
  
  
  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage
}
}

module.exports = analyzeCarMileage;
