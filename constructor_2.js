class Employee{
    constructor(){

        this.salary = 50000;
        this.paidleaves = 21;
        this.sickleaves = 5;

    }
    getAnnualSalary(){
    console.log(this.salary*12);
    }

    get PaidLeaves(){

    }

    get SickLeaves(){
        
    }
}
e1=new Employee;
e1.getAnnualSalary();