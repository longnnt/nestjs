import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // sql table === 'auth'
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  // khai báo json nếu column là 1 array
  // @Column('json', { nullable: true })
  // flavors: string[];

  @Column('json', { nullable: true })
  flavors: string[];
}
