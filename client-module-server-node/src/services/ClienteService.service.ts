import { AbstractService } from "./AbstractService.service";
import { Request, Response } from 'express';
import { ClienteRepository } from "../repositories/ClienteRepository";
import { getCustomRepository } from "typeorm";

class ClienteService extends AbstractService {

    async listaClientes() {
        const clienteRepository: ClienteRepository = getCustomRepository(ClienteRepository);
        this.response.status(200).json(await clienteRepository.find());
    }

}

export { ClienteService };