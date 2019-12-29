import axios from 'axios';
import { EntityRepository, Repository, getCustomRepository } from "typeorm/browser";
import { Exercise } from "@entities/exercise";
import { MuscleInExerciseMapper, MuscleInExerciseManager } from '@managers/muscle-in-exercise';

export interface ExerciseMapper {
  id: number;
  name: string;
  level: number;
  muscles_in_exercise: MuscleInExerciseMapper[];
}

@EntityRepository(Exercise)
export class ExerciseManager extends Repository<Exercise> {

  url = '/exercises/';

  static get manager() { return getCustomRepository(ExerciseManager) };

  async getAll(): Promise<Exercise[]> {
    return this.createQueryBuilder('exercise')
      .innerJoinAndSelect('exercise.musclesInExercise', 'musclesinexercise')
      .innerJoinAndSelect('musclesinexercise.muscle', 'muscle')
      .getMany();
  }

  async getBy({ remoteID = 0 }): Promise<Exercise | undefined> {
    if (remoteID === 0) { return undefined }
    return this.createQueryBuilder('exercise')
      .where('exercise.remoteID == :remoteID', { remoteID })
      .getOne();
  }

  async createBy({ remoteID = 0 }): Promise<Exercise> {
    const exercise = new Exercise();
    exercise.remoteID = remoteID;
    return exercise;
  }

  async getOrCreateBy({ remoteID = 0 }): Promise<Exercise> {
    return await this.getBy({ remoteID }) || await this.createBy({ remoteID })
  }

  async getRemotes(): Promise<Exercise[]> {
    let mappers: ExerciseMapper[] = [];
    try {
      const response = await axios.get(this.url);
      mappers = response.data;
    } catch (error) {
      console.info(error);
    }
    for (const exerciseMapper of mappers) {
      const remoteID = exerciseMapper.id;
      const exercise = await this.getOrCreateBy({ remoteID });
      exercise.name = exerciseMapper.name;
      exercise.level = exerciseMapper.level;
      await this.save(exercise);
      for (const muscleInExerciseMapper of exerciseMapper.muscles_in_exercise) {
        const muscleInExercise = await MuscleInExerciseManager.manager.getOrCreateBy({
          muscleID: muscleInExerciseMapper.muscle_id,
          exerciseID: muscleInExerciseMapper.exercise_id,
        });
        muscleInExercise.remoteID = muscleInExerciseMapper.id;
        await MuscleInExerciseManager.manager.save(muscleInExercise);
      }
    }
    return await this.getAll();
  }

}
