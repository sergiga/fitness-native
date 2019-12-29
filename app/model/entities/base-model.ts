import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm/browser';

@Entity()
export abstract class BaseModel {
  
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('int', { nullable: true })
  remoteID?: number;

  @Column('int', { default: 0 })
  status?: number;

  @Column('datetime', { nullable: true })
  updated?: Date;

  @Column('datetime', { nullable: true })
  localUpdated?: Date;

}