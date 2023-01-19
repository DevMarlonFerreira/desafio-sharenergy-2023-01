import { useState, useEffect } from "react";
import { HttpCatService } from "../service/httpCat";

import HttpCatPage from "../components/pages/httpCat";
// import { HttpCat } from "../typings/httpCat.d";

const HttpCat = () => {
    const [httpCat, setHttpCat] = useState<any>();

    async function getHttpCat() {
        const httpCatService = new HttpCatService();
        const result = await httpCatService.getHttpCat("300");
        if (result)
            setHttpCat(result)
    }

    useEffect(() => {
        getHttpCat();
    }, []);

    return <HttpCatPage httpCat={httpCat} />;
};
export default HttpCat;