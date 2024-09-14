import { Request, Response } from "express";
import * as Service from "../services/players-service";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await Service.getPlayerService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await Service.getPlayerByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
    const bodyContent = req.body;
    const httpResponse = await Service.createPlayerService(bodyContent);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await Service.deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyContent: StatisticsModel = req.body;

    const httpResponse = await Service.updatePlayerService(id, bodyContent);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
