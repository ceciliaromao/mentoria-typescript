// Como podemos rodar isso em um arquivo .ts sem causar erros? 

class Employee{
   code: number = 0;
   name: string = "";
}

let employee = new Employee();
employee.code = 10;
employee.name = "John";

//let employee: { code: number, name: string } = { code: 10, name: 'John' } 

console.log(employee);