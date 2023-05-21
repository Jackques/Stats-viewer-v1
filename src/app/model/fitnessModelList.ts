import { FitnessModel } from "./fitnessModel";

export class FitnessModelList {
    private fitnessModelList: FitnessModel[] = [];

    public addFitnessModel(fitnessModel: FitnessModel): void {
        this.fitnessModelList.push(fitnessModel);
    }

    public getDatumsList(): string[] {
        return this.fitnessModelList.map((fitnessModel: FitnessModel)=>{
            return fitnessModel.getDatum();
        });
    }
}