import { useEffect, useState } from "react";
import { HttpCatService } from "../../service/httpCat";
import Button from "../atoms/Button";
import ContainerInput from "../atoms/ContainerInput";
import Root from "../atoms/Root";

const HttpCat = (url: any) => {
    const [cat, setCat] = useState<any>();
    const [code, setCode] = useState("");

    useEffect(() => {
        setCat(`${url.httpCat}.jpg`)
    }, [url]);

    async function getHttpCat() {
        const httpCatService = new HttpCatService();
        const result = await httpCatService.getHttpCat(code);
        if (result)
            setCat(result)
    }

    return <Root>
        <h1>Http Cat</h1>
        <ContainerInput>
            <label htmlFor="code">Code:</label>
            <input
                type="text"
                id="code"
                onChange={(e) => setCode(e.target.value)}
                value={code}
            />
        </ContainerInput>
        <Button onClick={e => getHttpCat()}>
            Buscar
        </Button>
        <div>
            <img src={cat} alt={cat} />
        </div>
    </Root>
};

export default HttpCat;
