import { ProfileData } from "../interfaces/profileData.interface";

export class QueryModel {
    private description: string = "";
    private id: string = "";
    private name: string = "";
    private projectName: string = "";

    private totalAmountResults: number = NaN;
    private fromDate: string = "";
    private toDate: string = "";

    private fromProfile: ProfileData | null = null;
    private affectedProfile: ProfileData | null = null;

    private detailsId: string = "";

    constructor(
        description: string, 
        id: string, 
        name: string, 
        projectName: string, 
        totalAmountResults: number, 
        fromDate: string, 
        toDate: string, 
        fromProfile: ProfileData, 
        affectedProfile: ProfileData,
        detailsId: string
        ){
            this.description = description;
            this.id = id;
            this.name = name;
            this.projectName = projectName;
            this.totalAmountResults = totalAmountResults;
            this.fromDate = fromDate;
            this.toDate = toDate;
            this.fromProfile = fromProfile;
            this.affectedProfile = affectedProfile;
            this.detailsId = detailsId;
    }

    public isProfilesSet(): boolean {
        return this.fromProfile !== null && this.affectedProfile !== null ? true : false;
    }

    public getId(): string {
        return this.id;
    }

    public getDetailsId(): string {
        return this.detailsId;
    }

    public getdateTimeLatestResourceFromProfile(): string | undefined {
        return this.fromProfile?.dateTimeLatestResource;
    }
}