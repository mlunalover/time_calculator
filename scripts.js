var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('<p>There are ' + secondsPerDay + ' seconds in a day</p>');
var yearsAlive = prompt('How old are you?');
var yearsAliveSeconds = secondsPerDay * parseInt(yearsAlive);
document.write('<p>You have been alive ' + yearsAliveSeconds + ' seconds in your life</p>');
