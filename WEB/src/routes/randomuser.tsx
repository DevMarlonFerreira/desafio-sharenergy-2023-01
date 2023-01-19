import { useState, useEffect } from "react";
import { RandomUserService } from "../service/ramdomUser";

import RandomUserPage from "../components/pages/randomuser";
import { RandomUserData } from "../typings/randomUser.d";

const RandomUser = () => {
    const [randomUser, setRandomUser] = useState<[RandomUserData]>([{
        age: 0,
        email: "",
        name: "",
        picture: "",
        username: "",
    }]);

    async function getRandomUser() {
        const randomUserService = new RandomUserService();
        const result = await randomUserService.getRandomUser(6, 1, "", "", "");
        if (result)
            setRandomUser(result)
    }

    useEffect(() => {
        getRandomUser();
    }, []);

    return <RandomUserPage {...randomUser} />;
};
export default RandomUser;