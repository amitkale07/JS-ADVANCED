function add(a,b,callback){
    console.log(a+b);
    callback();
}


function display(){
    console.log("This total is 15");
}

add(5,10,display);