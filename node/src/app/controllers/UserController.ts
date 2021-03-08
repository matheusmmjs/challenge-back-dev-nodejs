import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '@models/User';

class UserController {
  index(req: Request, res: Response) {
    return res.send({ userId: req.userId });
  }

  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, cpfCnpj, password, type, name } = req.body;

    const userExists = await repository.findOne({
      where: [{ email }, { cpfCnpj }],
    });

    if (userExists) {
      return res.sendStatus(409);
    }

    const user = repository.create({ name, cpfCnpj, email, password, type });
    await repository.save(user);

    return res.json(user);
  }
}

export default new UserController();
