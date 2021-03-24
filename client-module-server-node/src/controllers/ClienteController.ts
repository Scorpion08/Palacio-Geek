import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { ClienteRepository } from '../repositories/ClienteRepository';
import { ClienteService } from '../services/ClienteService.service';

class ClienteController {
    
    async listaClientes(request: Request, response: Response) {
        new ClienteService(request, response).listaClientes();
    }
    
    async encontraCliente(request: Request, response: Response) {
        const { cliente } = request.body;
        response.status(200).json(await getCustomRepository(ClienteRepository).findOne(cliente));
    }

    async criaCliente(request: Request, response: Response) {
        const clienteService = new ClienteService(request, response);
    }
}

export { ClienteController };