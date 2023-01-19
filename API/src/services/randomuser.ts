const debug = require("debug")("services.randomuser.ts"); debug.enabled = true;

import * as HTTPUtil from "../util/request";

const URL = "https://randomuser.me/api";

export class RandomUserService {
    static request: HTTPUtil.Request;
    constructor(protected request = new HTTPUtil.Request()) { }

    public async get(name: string, email: string, username: string, results = '3', page = '1'): Promise<(HTTPUtil.Response<any>)> {

        const params = this.normalizeParams(name, email, username, results, page);
        const response = await this.request.get<any>(`${URL}/${params}`);
        return response;
    }

    private normalizeParams(
        name: string, email: string, username: string, results: string, page: string
    ): string {
        return `?results=${results}&page=${page} ${name ? `&${name}` : ""} ${email ? `&${email}` : ""} ${username ? `&${username}` : ""}`;
    }
}
