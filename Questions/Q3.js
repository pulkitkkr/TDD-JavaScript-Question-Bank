/*
write a function, showFaliures, which takes in an Array Containing Object,
related to students details, the function should return an Array of students
who are marked faliures, i.e. have percentage less than 40%, use the Array
defined
for Eg, the StudentsData array (defined below) when passed to showFaliures
function should return an array,

[{
    name: 'Jai',
    rollNumber: 30,
    percentage: 28
  },
  {
    name: 'Kishan',
    rollNumber: 3,
    percentage: 22
  }
];
*/
const StudentsData = [
  {
    name: 'Ravi',
    rollNumber: 1,
    percentage: 44
  },
  {
    name: 'Jai',
    rollNumber: 30,
    percentage: 28
  },
  {
    name: 'Mehak',
    rollNumber: 22,
    percentage: 98
  },
  {
    name: 'Kishan',
    rollNumber: 3,
    percentage: 22
  },
  {
    name: 'Mohit',
    rollNumber: 2,
    percentage: 54
  },
];

function showFaliures(studentsArray = StudentsData) {
  // write code Here
  return null  
}

module.exports = showFaliures;
