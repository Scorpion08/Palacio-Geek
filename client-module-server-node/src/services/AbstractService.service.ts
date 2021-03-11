import { Request, Response } from "express";

abstract class AbstractService {

    constructor(protected request: Request, protected response: Response) {}

}

export{ AbstractService };