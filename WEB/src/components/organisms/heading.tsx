import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 15px;
`;

const Title = styled.h4`
    cursor: pointer;
`;

const Line = styled.hr`
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
`;

const Heading = () => {
    return (
        <>
            <Container>
                <Title as={Link} to={`/randomuser`}>Random User</Title>
                <Title as={Link} to={`/httpcat`}>HTTP Cat</Title>
                <Title as={Link} to={`/randomdog`}>Random Dog</Title>
                <Title as={Link} to={`/client`}>Clientes</Title>
            </Container>
            <Line />
        </>
    )
}

export default Heading;