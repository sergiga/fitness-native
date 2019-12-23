import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm/browser';
import MuscleInExercise from '@entities/muscle-in-exercise';

@Entity('muscle')
class Muscle {

  @PrimaryGeneratedColumn()
  id;

  @Column('integer', { nullable: true })
  remoteID;

  @Column('text', { nullable: true })
  name;

  @OneToMany(type => MuscleInExercise, muscleInExercise => muscleInExercise.muscle)
  exercisesInMuscle;

}

export default Muscle;
