const fetchISSTimesForMyLocation = require('./iss');

const printISSTimes = function (data) {

  for (ISSpass of data) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(ISSpass.risetime);
    const duration = ISSpass.duration;
    console.log(`The ISS will pass next on ${dateTime} for a duration of ${duration} seconds`);
  };

}

fetchISSTimesForMyLocation((data, error) => {
  if (error) {
    return console.log(error);
  };
  printISSTimes(data);
});