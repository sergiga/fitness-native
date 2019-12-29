import axios from 'axios';
import { EntityRepository, Repository, getCustomRepository } from 'typeorm/browser';
import { Muscle } from '@entities/muscle';

@EntityRepository(Muscle)
export class MuscleManager extends Repository<Muscle> {

  url = '/muscles/';

  static get manager() { return getCustomRepository(MuscleManager) }

  async getAll(): Promise<Muscle[]> {
    return this.createQueryBuilder('muscle').getMany();
  }

  async getBy({ remoteID = 0 }): Promise<Muscle | undefined> {
    if (remoteID === 0) { return undefined }
    return this.createQueryBuilder('muscle')
      .where('muscle.id == :remoteID', { remoteID })
      .getOne();
  }

  async createBy({ remoteID = 0 }): Promise<Muscle> {
    const muscle = this.create();
    muscle.remoteID = remoteID;
    return muscle;
  }

  async getOrCreateBy({ remoteID = 0 }): Promise<Muscle> {
    return await this.getBy({ remoteID }) || await this.createBy({ remoteID })
  }

  async getRemotes(): Promise<Muscle[]> {
    let remotes = [];
    try {
      const response = await axios.get(this.url);
      remotes = response.data;
    } catch (error) {
      console.info(error);
    }
    for (const remote of remotes) {
      const remoteID = remote.id;
      const muscle = await this.getOrCreateBy({ remoteID });
      muscle.name = remote.name;
      await this.save(muscle);
    }
    return await this.getAll();
  }

}
