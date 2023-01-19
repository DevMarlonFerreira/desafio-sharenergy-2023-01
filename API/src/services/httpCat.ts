const debug = require("debug")("services.HttpCat.ts"); debug.enabled = true;

import * as HTTPUtil from "../util/request";

const URL = "https://http.cat";

export class HttpCatService {
    static request: HTTPUtil.Request;
    constructor(protected request = new HTTPUtil.Request()) { }

    public async get(status_code: string): Promise<(HTTPUtil.Response<any>)> {
        debug(`${URL}/${status_code}.jpg`)
        const { data } = await this.request.get<any>(`${URL}/${status_code}.jpg`);
        return data;
    }
}
