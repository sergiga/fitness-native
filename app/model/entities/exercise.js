import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm/browser';
import MuscleInExercise from '@entities/muscle-in-exercise';

@Entity('exercise')
export class Exercise {

  @PrimaryGeneratedColumn()
  id;

  @Column('integer', { nullable: true })
  remoteID;

  @Column('text', { nullable: true })
  name;

  @Column('integer', { nullable: true })
  level;

  @OneToMany(type => MuscleInExercise, muscleInExercise => muscleInExercise.exercise)
  musclesInExercise;

}

export default Exercise;
