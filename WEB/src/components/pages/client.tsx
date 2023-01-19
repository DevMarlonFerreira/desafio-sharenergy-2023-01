import { useEffect, useState } from "react";
import { FaUserAlt, FaTrashAlt, FaPencilAlt } from "react-icons/fa";

import { ClientService } from "../../service/client";

import Button from "../atoms/Button";
import Root from "../atoms/Root";
import Row from "../atoms/Row";
import Icon from "../atoms/Icon";
import Table from "../atoms/Table";
import Field from "../atoms/Field";

import Modal from "../molecules/Modal";
import ModalRead from "../molecules/ModalRead";

const Client = (data: any) => {
    const [clients, setClients] = useState<any>();
    const [client, setClient] = useState<any>();

    const [modal, setModal] = useState(false);
    const [modalRead, setModalRead] = useState(false);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        if (refresh) {
            getClients();
            setRefresh(false)
        }
    }, [refresh]);

    async function getClients() {
        const clientService = new ClientService();
        const result = await clientService.getClients();
        setClients(result)
    }

    async function deleteClient(client: any) {
        const clientService = new ClientService();
        await clientService.deleteClient(client._id);
    }

    return <Root>
        {
            clients?.length > 0 ?
                <Table>
                    <Row>
                        <Field>
                            NOME
                        </Field>
                        <Field>
                            CPF
                        </Field>
                        <Field>
                            TELEFONE
                        </Field>
                        <Field>
                            DADOS
                        </Field>
                        <Field>
                            EDITAR
                        </Field>
                        <Field>
                            DELETAR
                        </Field>
                    </Row>
                    {clients.map((client: any, key: number) => (
                        <Row key={key}>
                            <Field>
                                {client.nome}
                            </Field>
                            <Field>
                                {client.cpf}
                            </Field>
                            <Field>
                                {client.telefone}
                            </Field>
                            <Icon onClick={(e => { setClient(client); setModalRead(true) })}>
                                <FaUserAlt />
                            </Icon>
                            <Icon onClick={(e => { setClient(client); setModal(true); setRefresh(true) })}>
                                <FaPencilAlt />
                            </Icon>
                            <Icon onClick={(e => { deleteClient(client); setModal(false); setRefresh(true) })}>
                                <FaTrashAlt />
                            </Icon>
                        </Row>
                    ))}
                </Table>
                :
                <>
                    <div>
                        Sem clientes
                    </div>
                </>
        }
        <Button onClick={(e => setModal(true))}>
            Novo cliente
        </Button>
        {modal &&
            <Modal data={client} callback={() => { setClient(""); setModal(false); setRefresh(true) }} />
        }
        {modalRead &&
            <ModalRead data={client} callback={() => { setModalRead(false) }} />
        }

    </Root>
};

export default Client;
