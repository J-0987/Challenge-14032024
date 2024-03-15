// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  /* TODO: Get user input to create and return an array of employee objects.
  Need a prompt, like in RPS game. 
  */
 //create array
  const employees = [];
//prompt to add more employees. While loop to keep the prompt showong up
    let addMoreEmployees = true;
    while (addMoreEmployees) {
    const firstName = prompt("Enter first name:");
        const lastName = prompt("Enter employee's last name:");
        const salaryInput = prompt("Enter employee's salary:");
        // ?: is a version of if/else. If i were to do it as if/else, it would be if the salary input, Found this online but not sure how to use:const salary = isNaN(Number(salaryInput)) ? 0 : Number(salaryInput);
        if (isNaN(Number(salaryInput))) {
          salary = 0;
      } else {
          salary = Number(salaryInput);
      }
      
     

        const employee = {
            firstName: firstName,
            lastName: lastName,
            salary: salary
        };

        employees.push(employee);
    

        const continueInput = prompt("Do you want to add another employee? (yes/no)");
        addMoreEmployees = continueInput.toLowerCase() === 'yes';
    }
  
  }



// Display the average salary
const displayAverageSalary = function(employeesArray) {

function calculateAverageSalary(salaries) {
  let totalSalary = 0;
  employees.forEach(employee => {
      totalSalary += employee.salary;
  });

  const averageSalary = totalSalary / employees.length;
  return averageSalary;


}
}


//Select a random employee
// const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  
  const getRandomEmployee = function(employeesArray) {
    // Generate a random index within the range of the employees array
    const randomIndex = Math.floor(Math.random() * employeesArray.length);

    // Get the random employee object using the random index
    const randomEmployee = employeesArray[randomIndex];

    // Log the full name of the random employee to the console
    console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
