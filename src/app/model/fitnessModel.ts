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

    // public getAvailableProperties(): string[] {
    //     return Object.getOwnPropertyNames(this);
    // }

    public setNo(no: string){
        const convertedNo: number | null = StringFloatConverter.convertStringFloatToFloatNumber(no);
        this.no = convertedNo ? convertedNo : 0;
        //todo: if 0 has already been set once,.. throw error if another 0 appears!
    }
    
    public getMetingDoor(): string {
        return this.metingDoor;
    }

    public setMetingDoor(metingDoor: string){
        this.metingDoor = metingDoor;
        //todo: throw error if empty (string)
    }

    public setDatum(datum: string){
        this.datum = datum;
        //todo: throw error if empty (string)
    }

    public getDatum(): string {
        return this.datum;
    }

    public setGewicht(gewicht: string){
        const convertedGewicht: number | null = StringFloatConverter.convertStringFloatToFloatNumber(gewicht);
        this.gewicht = convertedGewicht ? convertedGewicht : null;
        // debugger;
        //todo: gewicht is a minimum necessary value? throw error if empty or 0?
    }

    public getGewicht(): number | null {
        return this.gewicht;
    }

    public setVetPercentage(vetPercentage: string){
        const convertedVetPercentage: number | null = StringFloatConverter.convertStringFloatToFloatNumber(vetPercentage);
        this.vetPercentage = convertedVetPercentage ? convertedVetPercentage : null;
    }

    public getVetPercentage(): number | null {
        return this.vetPercentage;
    }

    public setSpierMassa(spierMassa: string){
        const convertedSpierMassa: number | null = StringFloatConverter.convertStringFloatToFloatNumber(spierMassa);
        this.spierMassa = convertedSpierMassa ? convertedSpierMassa : null;
    }

    public getSpierMassa(): number | null {
        return this.spierMassa;
    }

    public setSpierMassaInPercentage(spierMassaInPercentage: string){
        const convertedSpierMassaPercentage: number | null = StringFloatConverter.convertStringFloatToFloatNumber(spierMassaInPercentage);
        this.spierMassaInPercentage = convertedSpierMassaPercentage ? convertedSpierMassaPercentage : null;
    }

    public getLichaamsvocht(): number | null {
        return this.lichaamsvocht;
    }

    public setLichaamsvocht(lichaamsvocht: string){
        const convertedLichaamsVocht = StringFloatConverter.convertStringFloatToFloatNumber(lichaamsvocht);
        this.lichaamsvocht = convertedLichaamsVocht ? convertedLichaamsVocht : null;
    }

    public setLichaamsvochtInPercentage(lichaamsvochtInPercentage: string){
        const convertedLichaamsVocht = StringFloatConverter.convertStringFloatToFloatNumber(lichaamsvochtInPercentage);
        this.lichaamsvochtInPercentage = convertedLichaamsVocht ? convertedLichaamsVocht : null;
    }

    public setBotmassa(botmassa: string){
        const convertedBotMassa = StringFloatConverter.convertStringFloatToFloatNumber(botmassa);
        this.botmassa = convertedBotMassa ? convertedBotMassa : null;
    }

    public setBotmassaInPercentage(botmassaInPercentage: string){
        const convertedBotMassa = StringFloatConverter.convertStringFloatToFloatNumber(botmassaInPercentage);
        this.botmassaInPercentage = convertedBotMassa ? convertedBotMassa : null;
    }

    public setNotities(notities: string){
        this.notities = notities;
    }
}