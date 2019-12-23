import axios from 'axios';
import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import Muscle from '@entities/muscle';

@EntityRepository(Muscle)
export default class MuscleRepository extends Repository {

  url = '/muscles/';
  entity = 'muscle';

  static get manager() {
    return getCustomRepository(MuscleRepository);
  }

  async getAll() {
    return this.createQueryBuilder(this.entity).getMany();
  }

  async getBy({ remoteID }) {
    return this.createQueryBuilder(this.entity)
      .where('muscle.id == :remoteID', { remoteID })
      .getOne();
  }

  async createBy({ remoteID }) {
    const muscle = this.create();
    muscle.remoteID = remoteID;
    return muscle;
  }

  async getOrCreateBy({ remoteID }) {
    return await this.getBy({ remoteID }) || await this.createBy({ remoteID })
  }

  async getRemote() {
    let remotes = [];
    try {
      const response = await axios.get(this.url);
      remotes = response.data;
    } catch (error) {
      console.info(error);
    }
    for (remote of remotes) {
      const remoteID = remote.id;
      const muscle = await this.getOrCreateBy({ remoteID });
      muscle.name = remote.name;
      await this.save(muscle);
    }
    return await this.getAll();
  }

}
