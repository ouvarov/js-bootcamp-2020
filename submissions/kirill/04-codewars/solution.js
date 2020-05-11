// Get Planet Name By ID
/* eslint-disable no-unused-vars */
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
  }
  return name;
}
// END Get Planet Name By ID

// Abbreviate a Two Word Name
function abbrevName(name) {
  return name.match(/\b\w/g).join('.').toUpperCase();
}
// END Abbreviate a Two Word Name
