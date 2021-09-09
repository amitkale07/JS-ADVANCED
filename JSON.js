// JSON is used to store and transport the data\

// employee JSON object
var employee={
    "firstname":"Amit",
    "lastname" :"kale",
    "salary" :35000,
    "Designation": "Full Stack Web Developer"
}
console.log("Laxman's salary is "+ employee.salary);


//Employee JSON Array

var employees = [
    {"firstname":"Amit","lastname" :"Kale","salary" :350000,"designation": "Full Stack Web Developer"},
    {"firstname":"Sumit","lastname" :"Battul","salary" :25000,"designation": " Python Developer"},
    {"firstname":"Omkar","lastname" :"Parab","salary" :85000,"designation": ".Net Developer"},
    {"firstname":"Swapnil","lastname" :"Chordiya","salary" :98000,"designation": "JAVA Developer"}
]

employees.forEach(function(employee){
    console.log(employee.firstname + " is a Employee ");
    console.log(employee.firstname +" is a "+employee.designation);
})