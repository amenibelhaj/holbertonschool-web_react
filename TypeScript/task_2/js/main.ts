// --------------------
// Task 5 & 6: Advanced Types & Employee functions
// --------------------

// Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Create employee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) return new Teacher();
  return new Director();
}

// --------------------
// Task 6: Functions for employees
// --------------------

// Type predicate to check if employee is Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Execute work depending on employee type
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// --------------------
// Test examples
// --------------------
const emp1 = createEmployee(200);
const emp2 = createEmployee(1000);

executeWork(emp1);  // Output: Getting to work
executeWork(emp2);  // Output: Getting to director tasks

// Optional: render to the browser page
[emp1, emp2].forEach(employee => {
  const pre = document.createElement("pre");
  pre.textContent = isDirector(employee)
    ? employee.workDirectorTasks()
    : employee.workTeacherTasks();
  document.body.appendChild(pre);
});
