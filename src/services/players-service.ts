import { response } from "express";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();

    let response = null;

    if (!data) {
        response = await HttpResponse.noContent();
    } else {
        response = await HttpResponse.ok(data);
    }

    return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);

    let response = null;

    if (!data) {
        response = await HttpResponse.noContent();
    } else {
        response = await HttpResponse.ok(data);
    }

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    if (Object.keys(player).length === 0) {
        return await HttpResponse.badRequest();
    } else {
        await PlayerRepository.insertPlayer(player);
        return await HttpResponse.created();
    }
};

export const deletePlayerService = async (id: number) => {
    const isDeleted = await PlayerRepository.deletePlayer(id);
    let response = null;

    if (!isDeleted) {
        return await HttpResponse.badRequest();
    }

    response = await HttpResponse.ok({ message: "Deleted" });
    return response;
};

export const updatePlayerService = async (
    id: number,
    statistics: StatisticsModel
) => {
    let data = await PlayerRepository.findAndModifyPlayer(id, statistics);
    let response = null;

    if (!data) {
        response = await HttpResponse.badRequest();

        return response;
    }

    response = await HttpResponse.ok(data);

    return response;
};
