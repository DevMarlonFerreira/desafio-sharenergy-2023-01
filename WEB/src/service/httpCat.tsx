const HTTPCAT = "http://localhost:3000/httpcat";

export class HttpCatService {
    public async getHttpCat(status_code: string): Promise<any | void> {
        return await fetch(
            `${HTTPCAT}?status_code=${status_code}`, {
            method: 'GET',
        })
            .then((response) => response.blob())
            .then(async (blob) => {
                const imagem = new Blob([blob], { type: "image/jpg" });

                // URL.revokeObjectURL(imagem)
                const url = URL.createObjectURL(imagem);
                return url;
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
