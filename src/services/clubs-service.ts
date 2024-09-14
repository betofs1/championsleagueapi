import * as RepositoryClub from "../repositories/clubs-repository";
import * as HttpResponse from "../utils/http-helper";

export const getClubService = async () => {
    const data = await RepositoryClub.findAllClubs();
    let response = null;

    if (data.length === 0) {
        response = await HttpResponse.noContent();
        return response;
    }

    response = await HttpResponse.ok(data);

    return response;
};
