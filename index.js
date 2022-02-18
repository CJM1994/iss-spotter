const fetchISSTimesForMyLocation = require('./iss');

const printISSTimes = function () {

  // Function to print results in a nicer format goes here

}

fetchISSTimesForMyLocation((data, error) => {
  if (error) {
    return console.log(error);
  };
  console.log(data);
});