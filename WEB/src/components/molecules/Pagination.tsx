import { useState } from "react";

import styled from "styled-components";

import Button from "../atoms/Button";
import Grid from "../atoms/Grid";

const Root = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Container = styled.div`
    margin: 25px 0 0 0;
`;

const Pagination = ({ callback }: { callback: any }) => {
    const [page, setPage] = useState(1);

    return <Root>
            <Container>
                {page > 1 ?
                    <Button onClick={() => { if (page > 1) { setPage(page - 1); callback(page - 1) } }}>
                        Anterior
                    </Button>
                    : null
                }
            </ Container>
            <Container>
                Página {page}
            </ Container>
            <Container>
                {
                    <Button onClick={() => { setPage(page + 1); callback(page + 1) }}>
                        Próxima
                    </Button>
                }
            </ Container>
    </Root>
}

export default Pagination;