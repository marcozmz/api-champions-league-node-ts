import { StaticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositores/players-repository";
import * as httpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;

    if(data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }

    return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if(data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;

    if(Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player);

        response = await httpResponse.created();
    } else {
        console.log("bad request")
        response = await httpResponse.badRequest();
    }

    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    await PlayerRepository.deleteOnPlayer(id);
    const isDeleted = await PlayerRepository.deleteOnPlayer(id);

    if (isDeleted) {
        response = await httpResponse.ok({message: "Player deleted successfully"});
    } else {
        response = await httpResponse.badRequest();
    }
    
    return response;
};

export const updatePlayerService = async (id: number, statistics: StaticsModel) => {
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
    let response = await httpResponse.ok(data);

    if(!data || Object.keys(data).length === 0) {
        response = await httpResponse.badRequest();
    } else {
        response = await httpResponse.ok(data);
    }

    return response;
};