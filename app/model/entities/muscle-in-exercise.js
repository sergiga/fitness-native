import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm/browser';
import Exercise from '@entities/exercise';
import Muscle from '@entities/muscle';

@Entity('muscleinexercise')
class MuscleInExercise {

  @PrimaryGeneratedColumn()
  id;

  @Column('integer', { nullable: true })
  remoteID;

  @Column('integer', { nullable: true })
  order;

  @ManyToOne(type => Exercise, exercise => exercise.musclesInExercise)
  exercise;

  @ManyToOne(type => Muscle, muscle => muscle.exercisesInMuscle)
  muscle;

}

export default MuscleInExercise;
