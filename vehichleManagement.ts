//This is the vehicle Management system
/**
 * Vehicle Management System: Vehicle must have id, plate number, model, 
 * transmission(MNUAL,AUTOMATIC), add function in class to add vehicle, 
 * remove vehicle , edit vehicle and display recorded vehicles.
 */

enum transmission{
    MNUAL='manual',
    AUTOMATIC='automatic',
}

interface vehicle{
    id:number, //Id can be optional ?
    plateNumber:string,
    model:string,
    transmissionType:transmission
}

class vehicleManagement{

    public vehicles:vehicle[] = [];
    addVehicle(vehicl:vehicle):void{
        
        //Check whether the vehicle exist before adding it
        if(this.isVehichleAvailable(vehicl.plateNumber)){
            console.log(`vehicle with plate number: ${vehicl.plateNumber} already exists \n`);
            return;
            
        }
        else{
            //Add the vehicle
            vehicl.id =this.generateId();
            this.vehicles.push(vehicl);
            console.log(`The vehiche with plate number: ${vehicl.plateNumber} \n`);       
        }

    }

    generateId():number{
        return this.vehicles.length+1;
    }

    isVehichleAvailable(identifier: string):boolean{
        return this.vehicles.find((vehicleInstnce:vehicle)=> vehicleInstnce.plateNumber===identifier)? true: false
    }
    updateVehichleDetails(plate: string, model: string):string{

        // let modelNew: string = 'Toyota';
        if(this.isVehichleAvailable(plate)){
            //Look for the index of the vehichle with that plate number
            const index = this.vehicles.findIndex((vehic:vehicle)=> vehic.plateNumber===plate);
            this.vehicles[index].model=model;//Replace the vehichle with the value of the new model in the array;
        }
        return `Vehichle updated successfully`;
        
    }

    removeVehichles(): void{
        //Function to remove vehichles
    }

    displayVehicles():void{
        //Check if vehicles are present in the database

        for(let a:number=0; a<this.vehicles.length;a++){
            console.log(`Vehicle with id ${this.vehicles[a].id} has model: ${this.vehicles[a].model}`);
            "\n";
            
        }

    }
}

const vehicleExample:vehicleManagement = new vehicleManagement();
let v:number=0;

let vehichle1:vehicle = {id:v, plateNumber:'RAA567S', model:'TOYOTA', transmissionType:transmission.AUTOMATIC};
// v = vehicleExample.generateId(); This is a lot of work
let vehichle2:vehicle = {id:v, plateNumber:'RAA568L', model:'HONDA', transmissionType:transmission.MNUAL};
let vehichle3:vehicle = {id:v, plateNumber:'RAA567M', model:'FORD', transmissionType:transmission.AUTOMATIC};

//Add vehichles
vehicleExample.addVehicle(vehichle1);
vehicleExample.addVehicle(vehichle2);
vehicleExample.addVehicle(vehichle3);

//Display the vehichles
vehicleExample.displayVehicles();

//Check if update works
vehicleExample.updateVehichleDetails('RAA568L','Nissan');

//Display after updating
// vehicleExample.displayVehicles();

