import axios from 'axios';
import { EntityRepository, Repository, getCustomRepository } from "typeorm";
import Exercise from "@entities/exercise";
import MuscleRepository from '@repos/muscle';
import MuscleInExerciseRepository from '@repos/muscle-in-exercise';

@EntityRepository(Exercise)
export default class ExerciseRepository extends Repository {

  url = '/exercises/';

  async getExercises() {
    return this.createQueryBuilder('exercise').getMany();
  }

  async getExerciseBy({ remoteID }) {
    return this.createQueryBuilder('exercise')
      .where('exercise.remoteID == :remoteID', { remoteID })
      .getOne();
  }

  async createExerciseBy({ remoteID }) {
    const exercise = new Exercise();
    exercise.remoteID = remoteID;
    return exercise;
  }

  async getOrCreateExerciseBy({ remoteID }) {
    return await this.getExerciseBy({ remoteID }) || await this.createExerciseBy({ remoteID })
  }

  async getRemoteExercises() {
    let remotes = [];
    try {
      const response = await axios.get(this.url);
      remotes = response.data;
    } catch (error) {
      console.info(error);
    }
    for (remote of remotes) {
      const remoteID = remote.id;
      const exercise = await this.getOrCreateExerciseBy({ remoteID });
      exercise.name = remote.name;
      exercise.level = remote.level;
      await this.save(exercise);

      // for (muscle of remote.muscles) {
      //   MuscleRepository.manager.getOrCreateBy()
      //   MuscleRepository.manager.getOrCreateExerciseBy({
      //     muscleID: muscle.muscle_id,
      //     exerciseID: exercise.id
      //   });
      //   muscleInExercise.remoteID = muscle.muscles_in_exercise_id;
      //   await muscleInExerciseRepository.save(muscleInExercise);
    }
    return await this.getExercises();
  }

}
