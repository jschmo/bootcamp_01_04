import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: 'alisson_veras@hotmail.com',
    password: 'senha123',
    techs: ['Node.js', 'ReactJS', 'React Native',
      { title: 'Javascript', experience: 100 }
    ]
  });
  
  console.log(user.email);

  return res.json({message: 'Hello World'});
}