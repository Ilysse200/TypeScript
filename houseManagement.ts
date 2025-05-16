//This is a house management application

//I am creating an enum of house category
enum houseCategory{
    RSIDENTIALS = 'residential',
    HOTEL = 'hotel'
}

interface house{
    id:number,
    district:string,
    roomsNumber:number,
    category:houseCategory
}

//Create a class of house management

class HouseManagement{
    public houses:house[] = []; 

    constructor(){}

    //Create a function to create a new house
    addHouse(house1:house):void{
        //Before creating a new house, check whether its not already there!
        if(this.isHouseAvailable(house1.id)){
           console.log(`House with id: ${house1.id} already exists!\n`);
           return;
        }
        else{
            this.houses.push(house1);// Add the new house
            console.log(`House ${house1.id} added successfully \n`);
            
        }


    }

    removeHouse(identifier: number):void{

        //Check whether the house exists
        if(this.isHouseAvailable(identifier)){
            this.houses = this.houses.filter((h:house)=>h.id!==identifier)
            console.log(`House with id: ${identifier} removed \n`);
       
        }
        else{
            console.log(`House with id ${identifier} not found!`);
            
        }

    }

    displayHouse():void{

        if(this.houses.length==0){
            console.log('No houses records available \n');
            return;
            
        }
        //Retrieve all the houses recorded prior
        for(let a:number=0; a<this.houses.length;a++){
            console.log(`House with id: ${this.houses[a].id} has ${this.houses[a].roomsNumber} rooms and is located in district: ${this.houses[a].district}`);
            
        }
    }
    isHouseAvailable(value:number):boolean{
        return this.houses.find((h:house)=> h.id===value)? true: false
    }
}

const household:HouseManagement = new HouseManagement();

let hs1:house = {id:122, district:'Kicukiro', roomsNumber:3, category:houseCategory.RSIDENTIALS};
let hs2:house = {id:123, district:'Gasabo', roomsNumber:4, category:houseCategory.RSIDENTIALS};
let hs3:house = {id:124, district:'Nyarugenge', roomsNumber:6, category:houseCategory.HOTEL};
let hs4:house = {id:125, district:'Kicukiro', roomsNumber:3, category:houseCategory.RSIDENTIALS};
let hs5:house = {id:125, district:'Kicukiro', roomsNumber:3, category:houseCategory.RSIDENTIALS};

household.addHouse(hs1);
household.addHouse(hs2);
household.addHouse(hs3);
household.addHouse(hs4);
household.addHouse(hs5);

//Display houses
household.displayHouse();

//Remove houses
household.removeHouse(125);

//Display houses
household.displayHouse();
