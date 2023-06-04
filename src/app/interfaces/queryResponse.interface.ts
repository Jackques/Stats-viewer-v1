import { ProfileData } from "./profileData.interface"

export interface QueryResponse {
    description: string,
    id: string,
    name: string,
    projectName: string,
    queries: {
        amount: string,
        colorQuery: string,
        fromDate: string,
        fromProfiles: ProfileData[],
        labelForThisQuery: string,
        queryParameters: [],
        returnFields: string[],
        toDate: string,
        visibilityQuery: boolean
    }[],
    queryMetaData: {
        affectedProfileNames: ProfileData[],
        graphType: string,
    },
    querySetResults: {
        amountOfQueries: number,
        queryResults: {
            id: string,
            labelForThisQuery: string,
            totalResults: number
        }[],
        totalResults: number
    }
}