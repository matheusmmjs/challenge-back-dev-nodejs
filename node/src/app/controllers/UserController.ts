import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '@models/User';

class UserController {
  index(req: Request, res: Response) {
    return res.status(200).json({
      success: true,
      userId: req.userId,
    });
  }

  async indexAll(req: Request, res: Response) {
    const repository = getRepository(User);
    const users = await repository.find();

    for (let user of users) {
      delete user.password;
    }

    return res.status(200).json({
      success: true,
      users,
    });
  }

  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, cpfCnpj, password, type, name, value } = req.body;

    const userExists = await repository.findOne({
      where: [{ email }, { cpfCnpj }],
    });

    if (userExists) {
      return res.status(409).json({
        success: false,
        message: 'Error, user exists',
      });
    }

    const user = repository.create({
      name,
      cpfCnpj,
      email,
      password,
      type,
      value: value != null ? value : 0,
    });
    await repository.save(user);

    delete user.password;

    return res.status(200).json({
      success: true,
      user,
    });
  }
}

export default new UserController();
