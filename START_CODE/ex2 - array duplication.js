// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { id: 1, firstName: "An", age: 20 },
  { id: 2, firstName: "Bình", age: 22 },
  { id: 3, firstName: "Cẩm", age: 21 },
  { id: 4, firstName: "An", age: 19 }, // Duplicate first name ! but unique ID 
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {age} newAge  - the student new age
 * @param {number} id
 */
function updateStudentAge(id, newAge) {
  let student = STUDENTS_DATA.find((s) => s.id === id);

  if (student) {
    student.age = newAge;
    console.log(`Updated age for student ID ${id} to ${newAge}`);
  } else {
    console.log(`Student with ID ${id} not found.`);
  }
}

// 1 - Update An's age (ID 1) to 30
updateStudentAge(1, 30);

// 2 - Update Bình's age (ID 2) to 32
updateStudentAge(2, 32);

// 3 - Update Cẩm's age (ID 3) to 31
updateStudentAge(3, 31);

// 4 - Update the second An's age (ID 4) to 29
updateStudentAge(4, 29);

//5 - Update ID 5 to 34
updateStudentAge(5, 29);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA, null, 2));
