import { Request, Response } from 'express';

export function helloWorld(req: Request, res: Response) {
//  const user = createUser('Alisson', 'alisson');

  return res.json({message: 'Hello World'});
}