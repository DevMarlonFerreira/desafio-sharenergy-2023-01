import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "../atoms/Button";
import Root from "../atoms/Root";

const URL = "http://localhost:3000/user/auth"

const Input = styled.input`
    font-size: 14px;
    padding: 10px;
    border-radius: 20px;
    margin: 15px 10px;
`;

export function LoginForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('@token');
        if (token)
            navigate("/randomuser");
    }, []);

    async function login() {
        await fetch(
            URL,
            {
                method: 'GET',
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    username: username,
                    password: password
                },
            })
            .then(async (res) => {
                const result = await res.json();

                if (remember) {
                    localStorage.setItem('@username', result.username);
                    localStorage.setItem('@token', result.token);
                }
                else {
                    sessionStorage.setItem('@username', result.username);
                    sessionStorage.setItem('@token', result.token);
                }

                navigate("/randomuser");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const rememberMe = () => {
        setRemember(!remember);
    };

    return (
        <Root>
            <h1>
                LOGIN TESTE SHARENERGY 2023/01
            </h1>
            <div>
                <Input type="text" onChange={(e: React.FormEvent<HTMLInputElement>) => setUsername((e.target as HTMLInputElement).value)} placeholder="Usuário" required />
            </div>
            <div>
                <Input type="password" onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword((e.target as HTMLInputElement).value)} placeholder="Senha" required />
            </div>
            <div>
                <Button onClick={e => login()}>ENTRAR</Button>
            </div>
            <div>
                <p>Remember me: <input onChange={rememberMe} type="checkbox" /></p>

            </div>
        </Root>
    );
}