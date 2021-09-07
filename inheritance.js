class Parent {

    constructor(){

        this.age = 58;
    }


    displayName(){
        console.log('parent name is Ketan');
    }

}

class Child extends Parent{

    constructor(){
        super();
    }

    getAgeOfMyFather(){
        console.log('fathers age is '+this.age);
    }

}
c1 = new Child();
c1.displayName();
c1.getAgeOfMyFather();