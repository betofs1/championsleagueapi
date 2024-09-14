import { StatisticsModel } from "./statistics-model";

export interface PlayerModel {
    id: number;
    name: string;
    club: string;
    nationality: string;
    position: string;
    statistics: StatisticsModel;
}
