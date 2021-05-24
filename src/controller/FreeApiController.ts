import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import * as fetch from 'node-fetch';

export class FreeApiController {
    async all(request: Request, response: Response, next: NextFunction) {
        return await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
    }

}