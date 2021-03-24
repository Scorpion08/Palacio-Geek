import {Router, Request, Response} from 'express';
import { ClienteController } from './controllers/ClienteController';

const router = Router();

const clienteController = new ClienteController();

router.get("/clientes", clienteController.listaClientes);

export { router };