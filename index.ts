//datatypes number, string, bigint
// let age: number=9;
// let country: string='Rwanda';
// let counry: any = 'Rwanda';
// counry = 8;
// let sum: number = counry as number +9;
// console.log('Hello');


// let ages: number[]=[];
// let countries: string[] = [];
// let countryRead:readonly string[] = ['Rwanda', 'Kigali'];// Defining an array with read only means you don't want to change it later on
// countries.push('');// This adds an element to the end of an array, but in read only it will return an array

///custom types (type, interface)
// type imibare = number; // initiation of a custom type
// type inyuguti = string; // created a custom type that is string
// type person = {
//     gender: string,
//     country:string,
//     names:string,
// }

// let person1:person={

//     gender:'FEMALE',
//     country:'RWANDA',
//     names:'Camilia',
// }
// console.log(person1.country);
// // let age:imibare = 10;
// //enum allows for consistency in data, for values that doesn't change throughout
// enum gender{
//     FEMALE ='FEMALE',
//     MALE = 'MALE'
// }
// let gender: gender = gender.MALE;

// enum status{
//     ACTIVE = 'ACTIVE',
//     INACTIVE = 'INACTIVE',
// }

// //function uses: reusability, code separation
// //return void functions

// function deposit(currentBalance: number, amount: number): void{
//     //business logic here
//     let balance:number = currentBalance + amount;
// }

//  //returrn  value function

//  function depositReturn(currentBalance:number, amount:number): number{
//     return currentBalance + amount;
//  }
// // Class where everything is public

// class Stock{
//     // constructor appears by default as long as there is an instance in a class

//     //use public when you want an element to be accessed everywhere
//     public stockBalance: number;
//     private difference: number; // can be accessed only within the class

//     constructor(balance: number){
//         this.stockBalance = balance;
//         this.difference = 0;

//     }

//     stockIn(quantity: number):void{
//         this.stockBalance += quantity;

//     }

//     stockOut(quantity:number):void{
//         this.stockBalance-=quantity;
//     }

//     getDifference():number{
//         return this.difference;
//     }
// }

// let stock = new Stock(200);
// let stockTwo = new Stock(500);
// let stockThree = new Stock(1000);
// stock.stockIn(50);
// stock.stockIn(10);
// stock.getDifference();


// class Car{

//     public kilometers:number;


//     constructor(distance: number){
//         this.kilometers = distance;
//     }

//     driving(initialDistance:number):void{
//         this.kilometers +=initialDistance;
//     }

//     stop():void{}

// }

// let path = new Car(200);
// let pathways = new Car(60);

// path.driving(100);
// pathways.driving(40);



//car class example

// class Car{
//     //member

//     public distanceInKm: number; // can be accessible inside the class, outside the class and within a class that has inherited 
//     private speed: number;


//     constructor(currentDistance: number){
//         this.distanceInKm = currentDistance;
//         this.speed =0;

//     }

//     drive(km:number):void{
//         this.distanceInKm +=km;
//     }
//     stop():number{
//         return this.speed;    
//     }
//     setSpeed(ms:number):number{
//         return this.speed = ms;
//     }
// }

//Exercise 2

// class User{
//     public lastName: string='';
//     public firstName: string='';

//     private age:number=0;

//     // constructor(name1: string, name2: string){
//     //     this.firstName = name1;
//     //     this.lastName = name2;
//     //     this.age = 0;


//     // }

//     registered(fname: string, lname:string, age:number): void{
//         this.firstName = fname;
//         this.lastName = lname;
//         this.age = age;
//         console.log(`${this.firstName+this.lastName}`);
//     }

//     getRegisteredUser(){
//         return (`The user is: ${this.firstName}${this.lastName} ${this.age}`);
//     }


// }
// let user = new User();
// user.registered('Wanda', 'Guela', 24);

// user.getRegisteredUser;

// 

// Assessment 2 of inheritance

// class House{

//     public size:number;
//     public floors:number;
//     public district:string;

//     constructor(measure:number, baseFloor:number, districts:string){
//         this.size = measure;
//         this.floors = baseFloor;
//         this.district = districts;

//     }
// }

// class NyarugengeHouse extends House{
//     constructor(){
//         super(8, 4, 'Nyarugenge');

//     }
// }

// class KicukiroHouse extends House{
//     constructor(){
//         super(10, 3, 'Kicukiro');
//     }
// }

// const house = new KicukiroHouse();
// house.floors;
// house.district;

// const houses = new NyarugengeHouse();
// houses.floors;
// houses.district;

// interface Person{
//     names: string;
//     age: number;
//     address: string;
// }

// const personOne: Person = {
//     names: 'Mugisha',
//     age: 20,
//     address: 'Rwanda'
// };

// const {names, age} = personOne;
// console.log(names);


// const countries:string[] = ['Rwanda','Ghana', 'Burundi'];
// const [countryOne, countryTwo] = countries;

// console.log(countryOne);
// console.log(countryTwo);


//practice to test my understanding of the for loop
//create an array of 5 students and print the names of the students using for loop

// 

//Check whether certain values are even or odd

// const values: number[] = [];//This is an empty array declared on which, I will be operating on
//Add elements in our array or instantiate the array with numbers
// values.push(12);
// values.push(11);
// values.push(6);
// values.push(4);

// console.log(`The length of the array is: `, values.length);

//We are going to display the values in the array using the for loop
// for (let a:number=0; a<values.length; a++){
//     console.log(`${a}-`, values[a]);
// }

//We are going to check if the values are even or odd
// for (let i: number = 0; i < values.length; i++) {
//     if (values[i] % 2 == 0) {
//         console.log(`The number ${values[i]} at index ${[i]} is even`);

//     } else {
//         console.log(`The number ${values[i]} at index ${[i]} is odd`);
//     }
// }

//We are going to try displaying this numbers using a normal loop, above we had used a for loop


//The constant within the normal loop will access the value of the array
// for(const value of values){
//     console.log(value);
// }


//Here I am trying to use a for loop of for ...of with something different from a const

// for(let value of values){
//     console.log(value);

// }

//We are going to look at how, I can display the elements in the array of values using a while loop
// let a:number=0;
// while(a <values.length){
//     console.log(values[a]);
//     a++;

// }

//Here I am trying to create an interface

import promptSync from 'prompt-sync';
const prompt = promptSync();


interface StudentOperations {
    addStudent: (st:Student) => void;
    displayStudent: () => void;
    calculateAverageGrade: () => void;
}
interface Student{
    name: string,
    rollNumber: number,
    grade: number
}

class StudentManager {

    public student1: Student[] = [];

    addStudent(st:Student): void {
        if(this.existingStudent(st.rollNumber)){
            console.log(`The student with roll number ${st.rollNumber} already exists`);
            return;
        }

        this.student1.push(st);
        console.log(`Student ${st.name} added successfully\n`);
    }
    displayStudent(): void {
        for (let i: number = 0; i < this.student1.length; i++) {
            console.log(`Student ${i +1} with the name of ${this.student1[i].name} has roll number ${this.student1[i].rollNumber} and grade ${this.student1[i].grade}`);

        }
        // let index = 0;
        // while (index < this.student1.length) {
        //     console.log(`Hello student ${this.student1[index].name}, I hope you enjoyed your studies!`);
        //     index++;

        // }
    }
    calculateAverageGrade(): void {
        let sum: number = 0;
        if(this.student1.length===0){
            console.log(`There is no students`);
            return;
            
            
        }
        {
            for (let i: number = 0; i < this.student1.length; i++) {
                sum += this.student1[i].grade;
            }
            let average: number = sum / this.student1.length;

            console.log(`The average of the ${this.student1.length} students is: ${average}`);


        }

    }
    removeStudent(rollNumber:number):void{
        //check whether the student exists by their rollNumber
        if(this.existingStudent(rollNumber)){
            this.student1 = this.student1.filter((st:Student)=>st.rollNumber!==rollNumber);
            console.log(`Student removed!`);
            
        }
        else{
            console.log('Student not found!');
            
        }
    }

    existingStudent(rollNumber:number):boolean{
        return this.student1.find((st:Student)=> st.rollNumber===rollNumber)?true : false

    }

    getMenu(): void {
        let chooser=0;
        while (chooser !==4) {
            console.log(`
        MENU
=========================================
        1. Add a new student
        2. Display all students
        3. Calculate the average grade
        4. Exit
        \n
        `);
        chooser = parseInt(prompt("Enter your choice (1-4): "));
         if (chooser === 1) {
            // let student:any[]=['Welsh', 210, 40];

           let stud1 = {name:'Malia', rollNumber:303, grade:55};
           let stud2= {name:'Carine', rollNumber:302, grade:77};
           let stud3 = {name:'Arine', rollNumber:301, grade:70};
           let stud4 = {name:'Arine', rollNumber:301, grade:70};

           s.addStudent(stud1);
           s.addStudent(stud2);
           s.addStudent(stud3);
           s.addStudent(stud4);
           
            
        }
        
        if(chooser ===2){
            //Display the existing students
            this.displayStudent();
        }
      
        if(chooser===3){
            //Calculate the average
            this.calculateAverageGrade();
        }
      
        if(chooser===4){
            console.log(`Thank you for your time!! Until next time.`);
        }
    }

        }
       
}
const s = new StudentManager();
s.getMenu();






