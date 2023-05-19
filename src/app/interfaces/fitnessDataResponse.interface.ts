import { FitnessData } from "./fitnessData.interface";

export interface FitnessDataResponse {
  response: {
    queryResultId: string;
    queryResultsList: FitnessData[];
  }[];
}
