import { EntityRepository, Repository, getCustomRepository } from "typeorm";
import MuscleInExercise from "@entities/muscle-in-exercise";

@EntityRepository(MuscleInExercise)
export class MuscleInExerciseRepository extends Repository {

  static get manager() {
    return getCustomRepository(MuscleInExercise);
  }

  async getAll() {
    return this.createQueryBuilder('muscleinexercise').getMany();
  }

  async getBy({ muscleID, exerciseID }) {
    return this.createQueryBuilder('muscleinexercise')
      .leftJoin('muscleinexercise.muscle', 'muscle', 'muscle.id = :muscleID', { muscleID })
      .leftJoin('muscleinexercise.exercise', 'exercise', 'exercise.id = :exerciseID', { exerciseID })
      .getOne();
  }

  async createBy({ muscleID, exerciseID }) {
    const muscleInExercise = new MuscleInExercise();
    muscleInExercise.muscle = { id: muscleID };
    muscleInExercise.exercise = { id: exerciseID };
    return muscleInExercise;
  }

  async getOrCreateBy({ muscleID, exerciseID }) {
    return await this.getMuscleInExerciseBy({ muscleID, exerciseID }) || await this.createMuscleInExerciseBy({ muscleID, exerciseID })
  }

}