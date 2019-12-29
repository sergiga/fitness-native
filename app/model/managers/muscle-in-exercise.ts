import { EntityRepository, Repository, getCustomRepository } from "typeorm/browser";
import { MuscleInExercise } from "@entities/muscle-in-exercise";

export interface MuscleInExerciseMapper {
  id: number;
  muscle_id: number;
  exercise_id: number;
}

@EntityRepository(MuscleInExercise)
export class MuscleInExerciseManager extends Repository<MuscleInExercise> {

  static get manager() { return getCustomRepository(MuscleInExerciseManager) };

  async getAll(): Promise<MuscleInExercise[]> {
    return this.createQueryBuilder('muscleinexercise').getMany();
  }

  async getBy({ muscleID = 0, exerciseID = 0 }): Promise<MuscleInExercise | undefined> {
    if (muscleID === 0 || exerciseID === 0) { return undefined }
    return this.createQueryBuilder('muscleinexercise')
      .where('muscleinexercise.muscle = :muscleID', { muscleID })
      .andWhere('muscleinexercise.exercise = :exerciseID', { exerciseID })
      .getOne();
  }

  async createBy({ muscleID = 0, exerciseID = 0 }): Promise<MuscleInExercise> {
    const muscleInExercise = new MuscleInExercise();
    muscleInExercise.muscle = { id: muscleID };
    muscleInExercise.exercise = { id: exerciseID };
    await this.save(muscleInExercise);
    return muscleInExercise;
  }

  async getOrCreateBy({ muscleID = 0, exerciseID = 0 }): Promise<MuscleInExercise> {
    return await this.getBy({ muscleID, exerciseID }) || await this.createBy({ muscleID, exerciseID })
  }

}