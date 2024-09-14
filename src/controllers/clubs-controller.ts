import { Request, Response } from "express";
import * as Service from "../services/clubs-service";

export const getClubs = async (req: Request, res: Response) => {
    const httpResponse = await Service.getClubService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
