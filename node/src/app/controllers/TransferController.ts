import { Request, Response } from 'express';
import { getConnection } from 'typeorm';

import Transfer from '@models/Transfer';
import User from '@models/User';

class TransferController {
  async index(req: Request, res: Response) {
    // get a connection and create a new query runner
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    // establish real database connection using our new query runner
    await queryRunner.connect();

    // we can also access entity manager that works with connection created by a query runner:
    const transfers = await queryRunner.manager.find(Transfer);

    await queryRunner.release(); // release connection

    return res.json(transfers);
  }

  async store(req: Request, res: Response) {
    const { value, payer, payee } = req.body;

    // get a connection and create a new query runner
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    // establish real database connection using our new query runner
    await queryRunner.connect();

    // we can also access entity manager that works with connection created by a query runner:
    const user = await queryRunner.manager.findOne(User, {
      where: [{ id: payer }],
    });

    if (user.type === 'L') {
      return res.sendStatus(403);
    }

    const transfer = new Transfer();
    transfer.value = value;
    transfer.payee = payee;
    transfer.payer = payer;
    transfer.date = new Date();

    // lets now open a new transaction:
    await queryRunner.startTransaction();

    try {
      // execute some operations on this transaction:
      await queryRunner.manager.save(transfer);

      // commit transaction now:
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors let's rollback changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release query runner which is manually created:
      await queryRunner.release();

      return res.json(transfer);
    }
  }
}

export default new TransferController();
