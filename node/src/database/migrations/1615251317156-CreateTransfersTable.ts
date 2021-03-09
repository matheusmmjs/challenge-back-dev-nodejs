import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTransfersTable1615251317156 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transfers',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'value',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'payer',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'payee',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'Date',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transfers');
  }
}
