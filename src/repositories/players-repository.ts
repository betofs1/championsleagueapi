import fs from "fs/promises";
import path from "path";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            overall: 87,
            pace: 93,
            shooting: 82,
            passing: 79,
            dribbling: 90,
            defending: 50,
            physical: 67,
        },
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            overall: 88,
            pace: 90,
            shooting: 85,
            passing: 77,
            dribbling: 88,
            defending: 40,
            physical: 78,
        },
    },
    {
        id: 3,
        name: "Robert Lewandowski",
        club: "Barcelona",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            overall: 89,
            pace: 81,
            shooting: 91,
            passing: 78,
            dribbling: 85,
            defending: 45,
            physical: 82,
        },
    },
    {
        id: 4,
        name: "Kylian Mbappe",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            overall: 90,
            pace: 97,
            shooting: 84,
            passing: 79,
            dribbling: 92,
            defending: 36,
            physical: 76,
        },
    },
    {
        id: 5,
        name: "Neymar Jr",
        club: "Paris Saint-Germain",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            overall: 88,
            pace: 91,
            shooting: 83,
            passing: 86,
            dribbling: 93,
            defending: 32,
            physical: 61,
        },
    },
    {
        id: 6,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            overall: 91,
            pace: 76,
            shooting: 84,
            passing: 93,
            dribbling: 87,
            defending: 60,
            physical: 74,
        },
    },
    {
        id: 7,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
            overall: 90,
            pace: 92,
            shooting: 87,
            passing: 81,
            dribbling: 89,
            defending: 45,
            physical: 76,
        },
    },
    {
        id: 8,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statistics: {
            overall: 89,
            pace: 76,
            shooting: 60,
            passing: 71,
            dribbling: 70,
            defending: 92,
            physical: 86,
        },
    },
    {
        id: 9,
        name: "Luka Modric",
        club: "Real Madrid",
        nationality: "Croatia",
        position: "Midfielder",
        statistics: {
            overall: 87,
            pace: 75,
            shooting: 75,
            passing: 89,
            dribbling: 89,
            defending: 70,
            physical: 65,
        },
    },
    {
        id: 10,
        name: "Karim Benzema",
        club: "Real Madrid",
        nationality: "France",
        position: "Forward",
        statistics: {
            overall: 89,
            pace: 80,
            shooting: 88,
            passing: 81,
            dribbling: 86,
            defending: 41,
            physical: 74,
        },
    },
    {
        id: 11,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            overall: 88,
            pace: 70,
            shooting: 75,
            passing: 86,
            dribbling: 84,
            defending: 82,
            physical: 77,
        },
    },
    {
        id: 12,
        name: "Sadio Mane",
        club: "Bayern Munich",
        nationality: "Senegal",
        position: "Forward",
        statistics: {
            overall: 88,
            pace: 91,
            shooting: 83,
            passing: 80,
            dribbling: 87,
            defending: 44,
            physical: 76,
        },
    },
    {
        id: 13,
        name: "Toni Kroos",
        club: "Real Madrid",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            overall: 88,
            pace: 60,
            shooting: 81,
            passing: 92,
            dribbling: 82,
            defending: 68,
            physical: 70,
        },
    },
    {
        id: 14,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Norway",
        position: "Forward",
        statistics: {
            overall: 88,
            pace: 89,
            shooting: 91,
            passing: 65,
            dribbling: 80,
            defending: 49,
            physical: 88,
        },
    },
    {
        id: 15,
        name: "Alisson Becker",
        club: "Liverpool",
        nationality: "Brazil",
        position: "Goalkeeper",
        statistics: {
            overall: 90,
            pace: 50,
            shooting: 45,
            passing: 68,
            dribbling: 61,
            defending: 18,
            physical: 82,
        },
    },
    {
        id: 16,
        name: "Jan Oblak",
        club: "Atletico Madrid",
        nationality: "Slovenia",
        position: "Goalkeeper",
        statistics: {
            overall: 91,
            pace: 49,
            shooting: 40,
            passing: 70,
            dribbling: 61,
            defending: 18,
            physical: 80,
        },
    },
    {
        id: 17,
        name: "Ederson",
        club: "Manchester City",
        nationality: "Brazil",
        position: "Goalkeeper",
        statistics: {
            overall: 89,
            pace: 60,
            shooting: 45,
            passing: 85,
            dribbling: 68,
            defending: 20,
            physical: 78,
        },
    },
    {
        id: 18,
        name: "N'Golo Kante",
        club: "Chelsea",
        nationality: "France",
        position: "Midfielder",
        statistics: {
            overall: 90,
            pace: 80,
            shooting: 60,
            passing: 80,
            dribbling: 82,
            defending: 92,
            physical: 87,
        },
    },
    {
        id: 19,
        name: "Sergio Ramos",
        club: "Paris Saint-Germain",
        nationality: "Spain",
        position: "Defender",
        statistics: {
            overall: 88,
            pace: 70,
            shooting: 65,
            passing: 75,
            dribbling: 70,
            defending: 89,
            physical: 84,
        },
    },
    {
        id: 20,
        name: "Paul Pogba",
        club: "Juventus",
        nationality: "France",
        position: "Midfielder",
        statistics: {
            overall: 87,
            pace: 75,
            shooting: 80,
            passing: 85,
            dribbling: 85,
            defending: 60,
            physical: 85,
        },
    },
    {
        id: 21,
        name: "Romelu Lukaku",
        club: "Inter Milan",
        nationality: "Belgium",
        position: "Forward",
        statistics: {
            overall: 86,
            pace: 85,
            shooting: 87,
            passing: 70,
            dribbling: 77,
            defending: 45,
            physical: 90,
        },
    },
    {
        id: 22,
        name: "Raheem Sterling",
        club: "Chelsea",
        nationality: "England",
        position: "Forward",
        statistics: {
            overall: 87,
            pace: 93,
            shooting: 81,
            passing: 78,
            dribbling: 89,
            defending: 40,
            physical: 65,
        },
    },
    {
        id: 23,
        name: "Trent Alexander-Arnold",
        club: "Liverpool",
        nationality: "England",
        position: "Defender",
        statistics: {
            overall: 87,
            pace: 82,
            shooting: 65,
            passing: 89,
            dribbling: 80,
            defending: 79,
            physical: 75,
        },
    },
    {
        id: 24,
        name: "Jadon Sancho",
        club: "Manchester United",
        nationality: "England",
        position: "Forward",
        statistics: {
            overall: 86,
            pace: 87,
            shooting: 77,
            passing: 80,
            dribbling: 90,
            defending: 40,
            physical: 65,
        },
    },
    {
        id: 25,
        name: "Gerard Pique",
        club: "Barcelona",
        nationality: "Spain",
        position: "Defender",
        statistics: {
            overall: 85,
            pace: 55,
            shooting: 60,
            passing: 75,
            dribbling: 70,
            defending: 87,
            physical: 80,
        },
    },
    {
        id: 26,
        name: "Phil Foden",
        club: "Manchester City",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            overall: 85,
            pace: 82,
            shooting: 75,
            passing: 80,
            dribbling: 89,
            defending: 55,
            physical: 70,
        },
    },
    {
        id: 27,
        name: "Frenkie de Jong",
        club: "Barcelona",
        nationality: "Netherlands",
        position: "Midfielder",
        statistics: {
            overall: 87,
            pace: 75,
            shooting: 70,
            passing: 86,
            dribbling: 89,
            defending: 80,
            physical: 78,
        },
    },
    {
        id: 28,
        name: "Mason Mount",
        club: "Chelsea",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            overall: 84,
            pace: 75,
            shooting: 78,
            passing: 80,
            dribbling: 82,
            defending: 70,
            physical: 70,
        },
    },
    {
        id: 29,
        name: "Gianluigi Donnarumma",
        club: "Paris Saint-Germain",
        nationality: "Italy",
        position: "Goalkeeper",
        statistics: {
            overall: 89,
            pace: 50,
            shooting: 45,
            passing: 60,
            dribbling: 50,
            defending: 18,
            physical: 80,
        },
    },
    {
        id: 30,
        name: "Thomas Muller",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Forward",
        statistics: {
            overall: 86,
            pace: 70,
            shooting: 82,
            passing: 80,
            dribbling: 76,
            defending: 55,
            physical: 75,
        },
    },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (
    id: number
): Promise<PlayerModel | undefined> => {
    const player = database.find((player) => player.id === id);

    return player;
};

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
};

export const deletePlayer = async (id: number) => {
    const index = database.findIndex((player) => player.id === id);

    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }

    return false;
};

export const findAndModifyPlayer = async (
    id: number,
    statistics: StatisticsModel
): Promise<PlayerModel> => {
    const playerIndex = database.findIndex((player) => player.id === id);

    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics;
    }

    return database[playerIndex];
};
