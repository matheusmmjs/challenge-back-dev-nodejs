import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
