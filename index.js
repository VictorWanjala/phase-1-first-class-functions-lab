// Code your solution in this file!
const returnFirstTwoDrivers = function(driversargument) {
    return driversargument.slice(0, 2);
  };
  
  
  const returnLastTwoDrivers = function(driversargument) {
    return driversargument.slice(-2);
  };
  
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  
  const fareDoubler = createFareMultiplier(2);
  
  
  const fareTripler = createFareMultiplier(3);
  
  
  const selectDifferentDrivers = function(driversargument, returnDriversFunction) {
    return returnDriversFunction(driversargument);
  };