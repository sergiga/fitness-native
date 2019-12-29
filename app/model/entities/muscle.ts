import {
  Column,
  Entity,
  OneToMany,
} from 'typeorm/browser';
import { BaseModel } from '@entities/base-model';
import { MuscleInExercise } from '@entities/muscle-in-exercise';

@Entity()
export class Muscle extends BaseModel {

  @Column('text')
  name?: string;

  @OneToMany(type => MuscleInExercise, muscleInExercise => muscleInExercise.muscle)
  exercisesInMuscle?: MuscleInExercise[];

}
