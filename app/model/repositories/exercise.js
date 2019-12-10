import axios from 'axios';
import { EntityRepository, Repository } from "typeorm";
import Exercise from "@entities/exercise";

@EntityRepository(Exercise)
export class ExerciseRepository extends Repository {

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
    }
    return await this.getExercises();
  }

}