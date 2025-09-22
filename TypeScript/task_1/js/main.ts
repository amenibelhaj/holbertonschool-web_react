// --------------------
// Task 1: Teacher
// --------------------
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow extra properties
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Optional: render teacher3 on the page
const appTeacher = document.createElement("pre");
appTeacher.textContent = JSON.stringify(teacher3, null, 2);
document.body.appendChild(appTeacher);

// --------------------
// Task 2: Directors
// --------------------
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Optional: render director1 on the page
const appDirector = document.createElement("pre");
appDirector.textContent = JSON.stringify(director1, null, 2);
document.body.appendChild(appDirector);

// --------------------
// Task 3: printTeacher function
// --------------------
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// Optional: render printTeacher result on the page
const appPrint = document.createElement("pre");
appPrint.textContent = printTeacher("John", "Doe");
document.body.appendChild(appPrint);
