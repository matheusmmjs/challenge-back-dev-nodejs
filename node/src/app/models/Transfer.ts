import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TransactionRepository,
  Transaction,
} from 'typeorm';

@Entity('transfers')
class Transfer {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  value: string;

  @Column()
  payer: number;

  @Column()
  payee: number;

  @Column()
  date: Date;
}

export default Transfer;
