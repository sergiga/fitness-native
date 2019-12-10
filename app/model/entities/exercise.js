import { Entity, Column, PrimaryGeneratedColumn } from "typeorm/browser";

@Entity('exercise')
class Exercise {

    @PrimaryGeneratedColumn()
    id

    @Column('integer', { nullable: true })
    remoteID

    @Column('text', { nullable: true })
    name

    @Column('integer', { nullable: true })
    level

}

export default Exercise;
