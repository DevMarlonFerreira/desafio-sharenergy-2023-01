import { useState } from "react";

import ContainerInput from "../atoms/ContainerInput";
import Close from "../atoms/Close";
import Root from "../atoms/RootModal";
import ModalContent from "../atoms/ModalContent";

interface IModal {
    data: any;
    callback: () => void;
}

const Modal = ({ data, callback }: IModal) => {
    const [nome,] = useState(data.nome);
    const [email,] = useState(data.email);
    const [telefone,] = useState(data.telefone);
    const [endereco,] = useState(data.endereco);
    const [cpf,] = useState(data.cpf);

    function fechar() {
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
                            readOnly
                            type="text"
                            id="nome"
                            value={nome}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="email">Email:</label>
                        <input
                            readOnly
                            type="text"
                            id="email"
                            value={email}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="telefone">Telefone:</label>
                        <input
                            readOnly
                            type="text"
                            id="telefone"
                            value={telefone}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="endereco">Endereço:</label>
                        <input
                            readOnly
                            type="text"
                            id="endereco"
                            value={endereco}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="cpf">CPF:</label>
                        <input
                            readOnly
                            type="text"
                            id="cpf"
                            value={cpf}
                        />
                    </ContainerInput>
                </ModalContent>
            </Root>
        </>
    );
};

export default Modal;
