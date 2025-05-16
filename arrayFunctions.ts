//Array functions
// interface Student{
//     names: string,
//     age: number,
//     rollNumber: number
// }

// class StudentOperations{
//     public students: Student[] = [];

//     constructor(){}

//     addStudent(student:Student):void{

//         //Check whether the students already exists using the roll number
//         if(this.students.find((st:Student)=>st.rollNumber ===student.rollNumber)){
//             console.log(`Student with this ${student.rollNumber} already exists.`);
//             return;
//         }
//         else{
//             this.students.push(student);
//             console.log('Student added successfully');
            
//         }
        
//     }

//     removeStudent(rollNumber: number):void{
//         //check whether the student to remove exist

//         if(this.isStudentExist(rollNumber)){
//             this.students=this.students.filter((t:Student)=>t.rollNumber!==rollNumber);
//             console.log('Student removed');

            
//         }else{
//             console.log('Student not found');
            
//         }

//     }
//     isStudentExist(rollNumber: number):boolean{
//         return this.students.find((st:Student) =>st.rollNumber===rollNumber)? true : false 
//     }
// }

// const educationStudents: StudentOperations = new StudentOperations();
// let st1: Student = {names:'Aimee', age:20, rollNumber:893};
// let st2: Student = {names:'Vanessa', age:17, rollNumber:894};
// let st3: Student = {names:'Lola', age:28, rollNumber:897};
// let st4: Student = {names:'Blandine', age:22, rollNumber:896};
// let st5: Student = {names:'Blandine', age:22, rollNumber:896};

// educationStudents.addStudent(st1);
// educationStudents.addStudent(st2);
// educationStudents.addStudent(st3);
// educationStudents.addStudent(st4);
// educationStudents.addStudent(st5);

//Switch cases

const country: string = 'KENYA';

switch (country){
    case 'RWANDA':{
        console.log('This is Rwanda');
        break;
        
    }
    case 'GHANA':{
        console.log('This is Ghana');
        break;
        
    }
    case 'KENYA':{
        console.log('This is Kenya');
        break;
        
    }
    default:
        console.log('The name is that of a planet');
        break;
        

}