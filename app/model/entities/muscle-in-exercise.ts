import {
  Column,
  Entity,
  ManyToOne,
} from 'typeorm/browser';
import { BaseModel } from '@entities/base-model';
import { Exercise } from '@entities/exercise';
import { Muscle } from '@entities/muscle';

@Entity('muscleinexercise')
export class MuscleInExercise extends BaseModel {

  @Column('int', { default: 0 })
  order?: number;

  @ManyToOne(type => Exercise, exercise => exercise.musclesInExercise)
  exercise?: Exercise;

  @ManyToOne(type => Muscle, muscle => muscle.exercisesInMuscle)
  muscle?: Muscle;

}
