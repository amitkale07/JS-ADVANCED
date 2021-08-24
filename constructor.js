class Car{

    constructor(){
        this.carname="BMW";
    }

    carName(){

        this.carname="FORD"
        console.log(this.carname);
    }
}
c1=new Car();
console.log(c1.carname);
c1.carName();