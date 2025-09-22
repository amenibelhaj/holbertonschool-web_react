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

// --------------------
// Task 4: StudentClass
// --------------------

// Constructor interface
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Class interface
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test the class
const student1 = new StudentClass({ firstName: "Alice", lastName: "Johnson" });

console.log(student1.displayName());       // Alice
console.log(student1.workOnHomework());    // Currently working

// Optional: render student1 info on the page
const appStudent = document.createElement("pre");
appStudent.textContent = `Name: ${student1.displayName()}, Status: ${student1.workOnHomework()}`;
document.body.appendChild(appStudent);
