import { useEffect, useState } from "react";
import { RandomDogService } from "../../service/randomDog";

import Root from "../atoms/Root";
import Button from "../atoms/Button";
import Img from "../atoms/Img";

const RandomDog = () => {
    const [randomDog, setRandomDog] = useState();

    useEffect(() => {
        getRandomDog();
    }, []);

    async function getRandomDog() {
        const randomDogService = new RandomDogService();

        let repeat = true;
        while (repeat) {
            const result = await randomDogService.getRandomDog();
            if (!result?.includes(".mp4")) {
                setRandomDog(result)
                repeat = false;
            }
        }
    }

    return <Root>
        <div>
            <Img src={randomDog} alt={randomDog} />
        </div>
        <div>
            <Button onClick={e => getRandomDog()}>
                REFRESH
            </Button>
        </div>
    </Root>
};

export default RandomDog;
