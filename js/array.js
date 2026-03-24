//reduce
const prices = [10, 20, 30, 40];
const total = prices.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(total);

//Mapping Function
const students = [
  { name: "Bishesh", grade: 85 },
  { name: "Sumit", grade: 92 },
  { name: "Notnishans", grade: 78 }
];

const studentGrades = students.map(student => {
    return { ...student, grade: student.grade + 5 }; // ...student is used to sepread the properties of the student object and create a new object with the same properties, but with an updated grade.
});
console.log(studentGrades);
const passingStudents = students.filter(student => student.grade >= 80);
console.log(passingStudents);