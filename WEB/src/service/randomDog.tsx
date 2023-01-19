
const URL = "http://localhost:3000/randomdog";

export class RandomDogService {
    public async getRandomDog(): Promise<any> {
        return await fetch(
            `${URL}`, {
            method: 'GET',
        })
            .then(async (res) => {
                const result: any = await res.json();
                return (result.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
