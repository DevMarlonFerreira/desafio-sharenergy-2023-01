import { useEffect, useState } from "react";
import { RandomDogService } from "../../service/randomDog";

import Button from "../atoms/Button";
import Img from "../atoms/Img";

const RandomDog = () => {
    const [randomDog, setRandomDog] = useState();

    useEffect(() => {
        getRandomDog()
    }, []);

    async function getRandomDog() {
        const randomDogService = new RandomDogService();

        const result = await randomDogService.getRandomDog();
        if (result)
            setRandomDog(result)
    }

    return <>
        <div>
            <Img src={randomDog} alt={randomDog} />
        </div>
        <div>
            <Button onClick={e => getRandomDog()}>
                REFRESH
            </Button>
        </div>
    </>
};

export default RandomDog;
