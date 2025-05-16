//library management system
// enum Availability{
//     available = 'available',
//     Unavailable = 'Not available',

// }

// interface BookDetails{
//     name: string;
//     publicationDate: string;
//     id :number;
//     author :string;
//     status: Availability;
// }

// class Book {
//     constructor(
//         book: BookDetails
//     ){}

//     borror(title:string, standing:Availability):void{
//         if(standing=== Availability.available){
//             console.log('You can borrow the book');
            
//         }
//         else{
//             console.log('The book was borrowed');
            
//         }

//     }

// }

    // borrow(title: string, id:number, standing:Availability):void{
    //     this.title = '';

//Libray management system according to the facilitator
//Library.ts

enum BookStatus {
    Available = "Available",
    Borrowed = "Borrowed"
  }
  
  interface Category {
    name: string;
  }
  
  interface Book {
    title: string;
    author: string;
    status: BookStatus;
    categories: Category[];
  }
  
  enum Gender {
    Female = 0,
    Male = 1
  }
  
  interface Librarian {
    names: string;
    gender: Gender;
  }
  
  class LibraryBranch {
    location: string;
    name: string;
    constructor(loc: string, n: string) {
      this.location = loc;
      this.name = n;
    }
  }
  
  class Library {
    location: string;
    name: string;
    constructor(loc: string, n: string) {
      this.location = loc;
      this.name = n;
    }
  }
  
  interface Library_ {
    name: string;
    location: string;
  }
  
  class KigaliLibrary extends Library {
    constructor(library: Library_) {
      super(library.location, library.name);
    }
  
    getLibraryName(): string {
      return this.name;
    }
  
    setLibraryLocation(location: string): void {
      this.location = location;
    }
  }
  
 
  const b: Library_ = {
    name: "DOHO library",
    location: "Gisozi",
  };
  
  const DohoLibrary = new KigaliLibrary(b);
  console.log(DohoLibrary.getLibraryName()); 
   

