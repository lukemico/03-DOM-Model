// console.log("This is a test");

// Age
// Write a program that, given an age in seconds, calculates how old someone is in standard Earth years.
  // I want to output a person's age in standard years, given an age input in seconds.

    // 60 seconds p/minute
    // 60 seconds p/hour
    // 24 hours p/day
    // 365 days p/year
    // Leap years occur every four years *(ignore this in this instance)

    //  I want a function that

// Then use the program to answer the following question: If I am 1031 million seconds old, how old am I?
  // I want to calculate a person's age for a specific input

// Extensions

// Given an age in seconds, calculate how old someone would be on:

// Mercury (orbital period 0.2408467 Earth years)
// Venus (orbital period 0.61519726 Earth years)
// Mars (orbital period 1.8808158 Earth years)
// Jupiter (orbital period 11.862615 Earth years)
// Saturn (orbital period 29.447498 Earth years)
// Uranus (orbital period 84.016846 Earth years)
// Neptune (orbital period 164.79132 Earth years)
// An Earth year is roughly 365.25 days, or 31557600 seconds.





Mercury: 0.2408467,
Venus: 0.61519726,
Mars: 1.8808158,
Jupiter: 11.862615,
Saturn: 29.447498,
Uranus: 84.016846,
Neptune: 164.79132,

  var secondsToyears = function(seconds) {
  var ageInYears = seconds / 31557600;
  return ageInyears;
}

var planetAge = function( seconds, planet ) {
  var earthYear = secondsToYears( seconds );
  spaceYear = spaceAges[ planet] * earthYear;
};
