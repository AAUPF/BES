class Car { 
    //field 
    engine:string; 
    
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
    
    //function 
    disp():void { 
       console.log("Function displays Engine is  :   "+this.engine) 
    } 
 } 
 
 //create an object 
 var obj = new Car("XXSY1")