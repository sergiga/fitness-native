import {
  Column,
  Entity,
  OneToMany,
} from 'typeorm/browser';
import { BaseModel } from '@entities/base-model';
import { MuscleInExercise } from '@entities/muscle-in-exercise';

@Entity()
export class Exercise extends BaseModel {

  @Column('text')
  name?: string;

  @Column('int', { default: 0 })
  level?: number;

  @OneToMany(type => MuscleInExercise, muscleInExercise => muscleInExercise.exercise)
  musclesInExercise?: MuscleInExercise[];

}
