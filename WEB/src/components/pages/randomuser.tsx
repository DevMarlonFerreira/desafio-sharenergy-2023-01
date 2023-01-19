import { useEffect, useState } from "react";
import { RandomUserService } from "../../service/ramdomUser";
import { RandomUserData } from "../../typings/randomUser.d";

import Grid from "../atoms/Grid";
import Img from "../atoms/Img";
import Root from "../atoms/Root";
import Pagination from "../molecules/Pagination";
import ContainerInput from "../atoms/ContainerInput";
import Button from "../atoms/Button";



const RandomUser = (data: RandomUserData[]) => {
    const [randomUser, setRandomUser] = useState(data);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        setRandomUser(data)
    }, [data]);

    async function getRandomUser(page: number) {
        const randomUserService = new RandomUserService();
        const RESULTS = 6;

        const result = await randomUserService.getRandomUser(RESULTS, page, name, email, username);
        if (result)
            setRandomUser(result)
    }

    return <>
        <Grid>
            <ContainerInput>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
            </ContainerInput>
        </Grid>
        <Button onClick={e => getRandomUser(1)}>
            Buscar
        </Button>
        <Grid>
            {
                Object.values(randomUser).map((user: RandomUserData, key) => (
                    <Root key={key}>
                        <h3>
                            {user.name}
                        </h3>
                        <Img src={user.picture} alt={user.name} />
                        <div>
                            {user.email}
                        </div>
                        <div>
                            {user.age}
                        </div>
                        <div>
                            {user.username}
                        </div>
                    </Root>
                ))
            }
        </Grid>
        <div>
            <Pagination callback={getRandomUser} />
        </div>
    </>
};

export default RandomUser;
