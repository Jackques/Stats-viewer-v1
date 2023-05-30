import { FitnessModel } from "./fitnessModel";

export class FitnessModelList {
    private fitnessModelList: FitnessModel[] = [];

    // public getFitnessModelPropertiesList(): string[] {
    //     const firstFitnessModel =  this.fitnessModelList.at(0) ? this.fitnessModelList.at(0) : null;
    //     if(firstFitnessModel){
    //         return Object.getOwnPropertyNames(firstFitnessModel);
    //     }
    //     return [];
    // }

    public addFitnessModel(fitnessModel: FitnessModel): void {
        this.fitnessModelList.push(fitnessModel);
    }

    public getMetingDoorList(){
        return this.fitnessModelList.map((fitnessModel: FitnessModel)=>{
            return fitnessModel.getMetingDoor();
        });
    }

    public getDatumsWithMetingDoorList(): string[] {
        return this.fitnessModelList.map((fitnessModel: FitnessModel)=>{
            return fitnessModel.getDatum() + ' - ' + fitnessModel.getMetingDoor();
        });
    }

    public getDatumsList(): string[] {
        return this.fitnessModelList.map((fitnessModel: FitnessModel)=>{
            return fitnessModel.getDatum();
        });
    }

    public getGewichtList(): (number | null)[] {
        return this.fitnessModelList.map((fitnessModel: FitnessModel)=>{
            return fitnessModel.getGewicht();
        });
    }

    public getSpierMassaList(): (number | null)[] {
        return this.fitnessModelList.map((fitnessModel: FitnessModel)=>{
            return fitnessModel.getSpierMassa();
        });
    }

    public getVetPercentageList(): (number | null)[] {
        return this.fitnessModelList.map((fitnessModel: FitnessModel)=>{
            return fitnessModel.getVetPercentage();
        });
    }

    public getLichaamsvochtList(): (number | null)[] {
        return this.fitnessModelList.map((fitnessModel: FitnessModel)=>{
            return fitnessModel.getLichaamsvocht();
        });
    }
}