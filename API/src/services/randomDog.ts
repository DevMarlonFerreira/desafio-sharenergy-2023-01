const debug = require("debug")("services.randomDog.ts"); debug.enabled = true;

import * as HTTPUtil from "../util/request";

const URL = "https://random.dog/woof.json";

export class RandomDogService {
    static request: HTTPUtil.Request;
    constructor(protected request = new HTTPUtil.Request()) { }

    public async get(): Promise<(HTTPUtil.Response<any>)> {
        const { data } = await this.request.get<any>(`${URL}`);
        return data;
    }
}
