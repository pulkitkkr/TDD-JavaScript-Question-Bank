/*
A university allows students to enroll for multiple subjects, a database is
mantained for students who opted for particular subject as an array
the whole data base schema is below, considering all student have unique
roll number

  const database = {
    subjectName1: [
      {
        name:"student 1",
        rollNumber: 1
      },
      {
        name:"student 2",
        rollNumber: 2
      },
    ],
    subjectName2: [
      {
        name:"student 1",
        rollNumber: 1
      },
      {
        name:"student 3",
        rollNumber: 3
      }
    ],
    subjectName3: [
      {
        name:"student 4",
        rollNumber: 1
      },
      {
        name:"student 3",
        rollNumber: 3
      }
    ]
  }

create a function "getCandidates" which accepts an object db, with schema as
mentioned above, and an array which contains subjects like ['subjectName1',subjectName2]
return an array containing names of student who have enrolled in subjects supplied in
array

for example if above schema is passed as an argument and array of subject is
const subjects = ['subjectName1', 'subjectName2'] then
getCandidates(db, subjects) should return an array with students who have enrolled
in both subjectName1 and subjectName2

so result will be : [{
  name: 'student 1',
  rollNumber: 1
  }
]
*/

function getCandidates(db, subjects) {
  // write your code here
  return null;
}
module.exports = getCandidates;
