import { RandomUserResponse, RandomUserData } from "../typings/randomUser.d";

const URL = "http://localhost:3000/randomuser";

export class RandomUserService {
    public async getRandomUser(results: number, page = 1, name: string, email: string, username: string): Promise<[RandomUserData] | void> {
        return await fetch(
            `${URL}?results=${results}&page=${page} ${name ? `&name=${name}` : ""} ${email ? `&email=${email}` : ""} ${username ? `&username=${username}` : ""}`, {
            method: 'GET',
        })
            .then(async (res) => {
                const result: RandomUserResponse = await res.json();
                return (result.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
