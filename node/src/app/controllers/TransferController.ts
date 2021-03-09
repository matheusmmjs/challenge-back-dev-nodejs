import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import axios from 'axios';

import Transfer from '@models/Transfer';
import User from '@models/User';

class TransferController {
  async index(req: Request, res: Response) {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    await queryRunner.connect();

    const transfers = await queryRunner.manager.find(Transfer);

    await queryRunner.release();

    return res.status(200).json({
      success: true,
      transfers,
    });
  }

  async store(req: Request, res: Response) {
    const { value, payer, payee } = req.body;

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    await queryRunner.connect();

    const userPayer = await queryRunner.manager.findOne(User, {
      where: [{ id: payer }],
    });

    const userPayee = await queryRunner.manager.findOne(User, {
      where: [{ id: payee }],
    });

    if (userPayer.type === 'L') {
      return res.status(403).json({
        success: false,
        message: 'User payer is logist',
      });
    } else if (userPayer.value < value) {
      return res.status(403).json({
        success: false,
        message: 'User is not worth enough',
      });
    }

    const transfer = new Transfer();
    transfer.value = value;
    transfer.payee = payee;
    transfer.payer = payer;
    transfer.date = new Date();

    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(transfer);

      await queryRunner.manager.update(User, userPayer.id, {
        value: userPayer.value - value,
      });

      await queryRunner.manager.update(User, userPayee.id, {
        value: userPayee.value + value,
      });

      await axios
        .get('https://run.mocky.io/v3/8fafdd68-a090-496f-8c9a-3442cf30dae6')
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          return res.status(401).json({
            success: false,
            message: 'Error external authorized service - ' + error,
          });
        });

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await axios
        .get('https://run.mocky.io/v3/b19f7b9f-9cbf-4fc6-ad22-dc30601aec04')
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          return res.status(401).json({
            success: false,
            message: 'Error notification service - ' + error,
          });
        });

      await queryRunner.release();

      return res.status(200).json({
        success: true,
        message: 'Enviado',
        transfer,
      });
    }
  }
}

export default new TransferController();
