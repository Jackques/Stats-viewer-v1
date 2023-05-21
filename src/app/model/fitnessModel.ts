import { StringFloatConverter } from "../util/stringFloatConverter";

export class FitnessModel {
    private no: number | null = NaN;
    private metingDoor: string = "";
    private datum: string = "";
    private gewicht: number | null = NaN;
    private vetPercentage: number | null = NaN;
    private spierMassa: number | null = NaN;
    private spierMassaInPercentage: number | null = NaN;
    private lichaamsvocht: number | null = NaN;
    private lichaamsvochtInPercentage: number | null = NaN;
    private botmassa: number | null = NaN;
    private botmassaInPercentage: number | null = NaN;
    private notities: string = "";

    constructor(){}

    public setNo(no: string){
        this.no = StringFloatConverter.convertStringFloatToFloatNumber(no);
        debugger;
    }

    public setMetingDoor(metingDoor: string){
        this.metingDoor = metingDoor;
    }

    public setDatum(datum: string){
        this.datum = datum;
    }

    public getDatum(): string {
        return this.datum;
    }

    public setGewicht(gewicht: string){
        this.gewicht = StringFloatConverter.convertStringFloatToFloatNumber(gewicht);
        debugger;
    }

    public setVetPercentage(vetPercentage: string){
        this.vetPercentage = StringFloatConverter.convertStringFloatToFloatNumber(vetPercentage);
    }

    public setSpierMassa(spierMassa: string){
        this.spierMassa = StringFloatConverter.convertStringFloatToFloatNumber(spierMassa);
    }

    public setSpierMassaInPercentage(spierMassaInPercentage: string){
        this.spierMassaInPercentage = StringFloatConverter.convertStringFloatToFloatNumber(spierMassaInPercentage);
    }

    public setLichaamsvocht(lichaamsvocht: string){
        this.lichaamsvocht = StringFloatConverter.convertStringFloatToFloatNumber(lichaamsvocht);
    }

    public setLichaamsvochtInPercentage(lichaamsvochtInPercentage: string){
        this.lichaamsvochtInPercentage = StringFloatConverter.convertStringFloatToFloatNumber(lichaamsvochtInPercentage);
    }

    public setBotmassa(botmassa: string){
        this.botmassa = StringFloatConverter.convertStringFloatToFloatNumber(botmassa);
    }

    public setBotmassaInPercentage(botmassaInPercentage: string){
        this.botmassaInPercentage = StringFloatConverter.convertStringFloatToFloatNumber(botmassaInPercentage);
    }

    public setNotities(notities: string){
        this.notities = notities;
    }
}