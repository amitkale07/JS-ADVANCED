class Person{
    constructor(){
        this.firstname='amit';
        this.lastname='kale';

    }
    getFullName(){
        console.log("my name is "+this.firstname+" " + this.lastname+"");
    }
}
p1=new Person();
p1.getFullName();
console.log(this.firstname);