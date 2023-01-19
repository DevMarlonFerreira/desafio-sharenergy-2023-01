const URL = "http://localhost:3000/client";

export class ClientService {
    public async getClients(): Promise<any> {
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

    public async postClient(data: any): Promise<any> {
        await fetch(
            `${URL}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(async (res) => {
                const result: any = await res.json();
                return (result.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    public async patchClient(data: any): Promise<any> {
        await fetch(
            `${URL}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(async (res) => {
                const result: any = await res.json();
                return (result.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    public async deleteClient(id: any): Promise<any> {
        await fetch(
            `${URL}/${id}`, {
            method: 'DELETE',
            // headers: { 'Content-Type': 'application/json' },
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
