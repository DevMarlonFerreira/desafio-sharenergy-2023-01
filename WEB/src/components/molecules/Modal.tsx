import { useState } from "react";

import { ClientService } from "../../service/client";

import ContainerInput from "../atoms/ContainerInput";
import Button from "../atoms/Button";
import Close from "../atoms/Close";
import Root from "../atoms/RootModal";
import ModalContent from "../atoms/ModalContent";

interface IModal {
    data: any;
    callback: () => void;
}

const Modal = ({ data, callback }: IModal) => {
    const [nome, setNome] = useState(data ? data.nome : "");
    const [email, setEmail] = useState(data ? data.email : "");
    const [telefone, setTelefone] = useState(data ? data.telefone : "");
    const [endereco, setEndereco] = useState(data ? data.endereco : "");
    const [cpf, setCpf] = useState(data ? data.cpf : "");

    function fechar() {
        callback();
    }

    async function salvar() {
        const clientService = new ClientService();
        await clientService.postClient({
            nome,
            email,
            telefone,
            endereco,
            cpf
        })
        callback();
    }

    async function editar() {
        const clientService = new ClientService();
        await clientService.patchClient({
            nome,
            email,
            telefone,
            endereco,
            cpf
        })
        callback();
    }

    return (
        <>
            <Root>
                <ModalContent>
                    <>
                        <Close onClick={fechar}>&times;</Close>
                    </>
                    <ContainerInput>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            required
                            type="text"
                            id="nome"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="email">Email:</label>
                        <input
                            required
                            type="text"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="telefone">Telefone:</label>
                        <input
                            required
                            type="text"
                            id="telefone"
                            onChange={(e) => setTelefone(e.target.value)}
                            value={telefone}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="endereco">Endereço:</label>
                        <input
                            required
                            type="text"
                            id="endereco"
                            onChange={(e) => setEndereco(e.target.value)}
                            value={endereco}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="cpf">CPF:</label>
                        <input
                            required
                            type="text"
                            id="cpf"
                            onChange={(e) => setCpf(e.target.value)}
                            value={cpf}
                        />
                    </ContainerInput>
                    <div>
                        {data ?
                            <Button onClick={(e => editar())}>
                                Editar
                            </Button>
                            :
                            <Button onClick={(e => salvar())}>
                                Novo cliente
                            </Button>
                        }
                    </div>
                </ModalContent>
            </Root>
        </>
    );
};

export default Modal;
