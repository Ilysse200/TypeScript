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
    id:number,
    plateNumber:string,
    model:string,
    transmissionType:transmission.AUTOMATIC
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
            this.vehicles.push(vehicl);
            console.log(`The vehiche with plate number: ${vehicl.plateNumber} \n`);       
        }

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

    displayVehicles():void{
        //Check if vehicles are present in the database

        for(let a:number=0; a<this.vehicles.length;a++){
            
        }

    }
}