// --------------------
// Task 5: Advanced Types
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
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}
// Helper function to render text to the page
function renderToPage(text: string) {
  const pre = document.createElement("pre");
  pre.textContent = text;
  document.body.appendChild(pre);
}

// Test outputs
const employee1 = createEmployee(200);   // Teacher
const employee2 = createEmployee(1000);  // Director
const employee3 = createEmployee("$500"); // Director

renderToPage(`Employee 1: ${employee1.constructor.name}`);
renderToPage(`Employee 2: ${employee2.constructor.name}`);
renderToPage(`Employee 3: ${employee3.constructor.name}`);

// Test outputs
console.log(createEmployee(200));    // Teacher
console.log(createEmployee(1000));   // Director
console.log(createEmployee("$500")); // Director
