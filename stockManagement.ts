//This is a stock management application

interface Iproduct {
    name: string,
    id: number,
    price: number,
    quantity: number,
    // getInventory:()=>void;
}
interface productOperations {

    createProduct: (p: Iproduct) => void;

    getInventory: () => void;
    //restock, meaning adding quantity of a certain product
    restock: (id: number, amount: number) => void;

    //Removing quantities of products
    sell: (id: number, amount: number) => void;

}
// class Product implements productOperations {
//     public p: Iproduct[] = [];
//     constructor(products: Iproduct) {
//         this.p.push(products)

//     }

//     //Create new Product
//     createProduct(newProduct: Iproduct): void {

//         //check whether the product already exist using the id as reference
//         if (this.isProductExist(newProduct.id)) {
//             console.log(`${newProduct.name} already exists.\n`);
//             return;
//         }
//         else {
//             this.p.push(newProduct);
//             console.log(`${newProduct.name} added successfully.\n`);
//         }

//     }
//     isProductExist(value: number): boolean {

//         //Using the id given as a reference check from existing products if it exists
//         return this.p.find((pr: Iproduct) => pr.id === value) ? true : false
//     }

//     //Display our inventory

//     getInventory(): void {
//         for (let a: number = 0; a < this.p.length; a++) {
//             console.log(`${a}: ${this.p[a].name} has id: ${this.p[a].id}\n`);

//         }
//     };

//     //Add quantities of a given product

//     restock(identifier: number, amount: number): void {
//         //First check whether the item exists
//         if (this.isProductExist(identifier)) {
//                 const index = this.p.findIndex((prod: Iproduct) => prod.id === identifier);
//                 if (index !== -1) {
//                     console.log(`The previous quantity is ${this.p[index].quantity}\n`);
                    
//                     this.p[index].quantity += amount;
//                     console.log(`The new amount of ${this.p[index].name} is: ${this.p[index].quantity}\n`);

//                 }
//             }
//         }
    
//     sell(id: number, amount: number): void {
//         //Check whether the product exists
//         if (this.isProductExist(id)) {
//                 const index = this.p.findIndex((prod: Iproduct) => prod.id === id);
//                 if (index !== -1) {
//                     console.log(`The previous quantity is ${this.p[index].quantity}\n`);
                    
//                     this.p[index].quantity -= amount;
//                     console.log(`The new amount of ${this.p[index].name} is: ${this.p[index].quantity}\n`);

//                 }

//             }

//         }
// }

// let product1:Iproduct = {
//     name:'Charcoal',
//     id:456,
//     price:500,
//     quantity:5
// }

// //Create the first product
// const productExample = new Product(product1);

// let product2:Iproduct = {
//     name:'soy sauce package',
//     id:457,
//     price:600,
//     quantity:10
// }

// //Add the second product
// productExample.createProduct(product2);

// //Display the products
// productExample.getInventory();

// //Let's restock the product
// let id:number = 456;
// let amount1 = 3;
// productExample.restock(id, amount1);


// //Let's sell the products

// productExample.sell(id, amount1);


//Teacher's version


// class StockManagement implements productOperations{
//     public products:Iproduct[]=[];
//     constructor(){}
//     getInventory():void{
//         this.products.map((prod:Iproduct)=>{
//             console.log(`Product Name: ${prod.name}, Price: ${prod.price}, Quantity: ${prod.quantity}`);
            
//         });
//     }

//     restock(id: number, amount:number):number{
//         const product = this.products.find((product:Iproduct)=>product.id===id);
//         if(!product) return 0;
//         product.quantity +=amount;

//         const indexP =this.products.findIndex((prod:Iproduct)=>prod.id===id);
//         this.products[indexP] = product;
//         return product.quantity;
//     }
//     sell(id:number, amount:number): number{
//         const product = this.products.find((product:Iproduct)=>product.id===id);
//         if(!product) return 0;
//         if(product.quantity>amount){
//             product.quantity-=
//             const indexP =this.products.findIndex((prod:Iproduct)=>prod.id===id);
//         this.products[indexP] = product;

//         }

//     }
// }

